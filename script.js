const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'bc3e54182bmsh31213eefc26a766p11d095jsnb2c8c84400d6',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getweather = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            temp.innerHTML = response.temp
            cloud_pct.innerHTML = response.cloud_pct
            humidity.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
        })
        .catch(err => console.error(err));
}
submit.addEventListener("click", (e) => {
    e.preventDefault()
    getweather(city.value)
})
getweather("Delhi")