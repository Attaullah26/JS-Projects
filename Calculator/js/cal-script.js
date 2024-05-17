const input = document.querySelector('#input-field')
const buttons = document.querySelectorAll('button')
const clear = document.querySelector('#clear')
let string = ''

Array.from(buttons).forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault()
       if (e.target.innerHTML == '=') {
            string = eval(string)
            input.value = string
        } else if (e.target.innerHTML == 'c') {
            {
                string = ''
                input.value = string
            }
        } else if (e.target.innerHTML == 'x') {
            {
                string = string.slice(0, -1)
                input.value = string
            }
        } else {
            string = string + e.target.innerHTML
            input.value = string
        }
    })
})

let clearInput = function () {
    clear.addEventListener('click', function () {
        input.innerHTML = ''
    })
}
