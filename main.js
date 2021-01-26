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

        const info = document.createElement('div');
        info.innerHTML = response.data.main.temp;
        data.appendChild(info);

        console.log(response.data)
    },
})


/* let timeoutId;
const onInput = event => {
    if (timeoutId) {
        clearInterval(timeoutId);
    }
    timeoutId = setTimeout(() => {
        fetchData(event.target.value);
    }, 500)
}

input.addEventListener('input', onInput);
 */
