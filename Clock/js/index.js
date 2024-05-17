let hour = document.querySelector('#hour')
let minute = document.querySelector('#minute')
let second = document.querySelector('#second')

setInterval(() => {
    let date = new Date()
    let hour_time = date.getHours()
    let minute_time = date.getMinutes()
    let second_time = date.getSeconds()
    
    let hour_rotation = 30 * hour_time + minute_time / 2
    let minute_rotation = 6 * minute_time
    let second_rotation = 6 * second_time

    hour.style.transform = `rotate(${hour_rotation}deg)`
    minute.style.transform = `rotate(${minute_rotation}deg)`
    second.style.transform = `rotate(${second_rotation}deg)`
}, 1000);



