const fetchData2 = async () => {
    const response = await axios.get('http://api.openweathermap.org//data/2.5/weather?', {
        params: {
            q: 'London',
            appid: '06b8dbc1b469c1a8509ab3fd20ded3d0',
            units: 'metric'
        }
    });

    console.log(response.data)
}


