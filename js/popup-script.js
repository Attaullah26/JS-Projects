
const popupBox = document.querySelector('.popup')
const loginButton = document.querySelector('.login-btn')
const closeButton = document.querySelector('.close')
const clickButton = document.querySelector('.click-btn')
const successMessage = document.querySelector('.success')
const errorMessage = document.querySelector('.danger')
const username = document.querySelector('#username')
const password = document.querySelector('#password')
const closeSuccess = document.querySelector('.close-success')
const closeError = document.querySelector('.close-danger')
const body = document.querySelector('.container')



clickButton.addEventListener('click', function (e) {
    e.preventDefault()
    popupBox.style.display = 'block'
    e.target.style.display = 'none'
})


closeButton.addEventListener('click', function (e) {
    e.preventDefault()

    popupBox.style.display = 'none'
    clickButton.style.display = 'block'
})

body.addEventListener('click', function (e) {
    if (body === e.target) {
        popupBox.style.display = 'none'
        clickButton.style.display = 'block'

    }
})
loginButton.addEventListener('click', (e) => {
    if (username.value === "" || password.value === "") {
        showError()
    } else {
        showSuccess()
    }
})

closeSuccess.addEventListener('click', () => {
    successMessage.style.display = 'none'
})
closeError.addEventListener('click', () => {
    errorMessage.style.display = 'none'
})

let showSuccess = function () {
    let successSetTime = setTimeout(() => {
        successMessage.style.display = 'block'
        successMessage.classList.add(' animate__animated animate__bounce')
    }, 0);

    setTimeout(() => {
        clearTimeout(successSetTime)
        successMessage.style.display = 'none'
    }, 3000);
}

let showError = function () {
    let setTime = setTimeout(() => {
        errorMessage.style.display = 'block'
    }, 0);

    setTimeout(() => {
        clearTimeout(setTime)
        errorMessage.style.display = 'none'
    }, 3000);
}
