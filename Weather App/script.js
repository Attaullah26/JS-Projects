const apiKey = 'd15bab419e524428c2b6f72686603bcc'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='
const searchInput = document.querySelector('.search')
const searchBtn = document.querySelector('.search_btn')

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    let data = await response.json()

    console.log('data');
    document.querySelector('.location').innerHTML = data.name
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°c'
    document.querySelector('#humidity').innerHTML = data.main.humidity + '%'
    document.querySelector('#wind').innerHTML = data.wind.speed + ' km/h'


    // if(data.weather[])

}

searchBtn.addEventListener('click', ()=>{
    checkWeather(searchInput.value)
    searchInput.value = ''
})
