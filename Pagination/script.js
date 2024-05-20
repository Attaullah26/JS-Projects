
const start_button = document.querySelector('#start_button')
const prev_next = document.querySelectorAll('.prev_next')
const end_button = document.querySelector('#end_button')
const number = document.querySelectorAll('.link')
let current_link = ''

// console.log(number);


Array.from(number).forEach((number, index_number) => {
    number.addEventListener('click', (e) => {
        e.preventDefault()
        current_link = index_number
        document.querySelector('.active').classList.remove('active')
        number.classList.add('active')
    })

});

prev_next.forEach(button => {
    button.addEventListener('click', (e)=>{
        current_link += e.target.id === 'next' ? 1: -1
        number.forEach((number, index_number)=>{
            number.classList.toggle('active', current_link === index_number)
        })
    })
})
