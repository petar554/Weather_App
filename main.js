const input = document.querySelector('input');
const data = document.getElementById('data');

createAutocomplite({
    rootElement: document.querySelector('#autocomplete'),
    async fetchData(searchTerm) {
        const response = await axios.get('http://api.openweathermap.org//data/2.5/weather?', {
            params: {
                q: searchTerm,
                appid: '06b8dbc1b469c1a8509ab3fd20ded3d0',
                units: 'metric'
            }
        });

        if (response.data.Error) {
            return [];
        }
        console.log(response.data)
        return response.data;
    },
    chooseACity(func, city, el) {

        console.log(func(city.name))
        func(city.name);
        el.innerHTML = aboutCity(city);
    }
});


function aboutCity(info) {
    return `<h1>${info.name}</h1>
    <h2>${info.main.temp}</h2>
    <h3>${info.main.feels_like}</h3>
    <h4>${info.main.temp_min}</h4>
    <h4>${info.main.temp_max}</h4>
    `
}

