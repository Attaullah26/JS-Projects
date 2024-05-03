
const button = document.querySelector('button')
const progress_bar = document.querySelector('.progress')

button.addEventListener('click', function (e) {
    e.preventDefault()
    setTimeout(() => {
        progress_bar.classList.add('animate-progressBar')
    }, 0);


})