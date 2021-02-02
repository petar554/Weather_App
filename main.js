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
    <h2>Temperature: <b>${info.main.temp}</b></h2>
    <h3>Feels like: <b>${info.main.feels_like}</b></h3>
    <h4>Min Temperature: <b>${info.main.temp_min}</b></h4>
    <h4>Max Temperature: <b>${info.main.temp_max}</b></h4>
    `
}

