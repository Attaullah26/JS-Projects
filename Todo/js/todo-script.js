
const input = document.querySelector('#input-field')
const submit = document.querySelector('#add-btn')
const timeDate = document.querySelector('.date-time')
const taskDesc = document.querySelector('.task-desc')
const mainTask = document.querySelector('.task')
const check = document.querySelector('#check')
const deleteTask = document.querySelectorAll('#delete')
const taskWrap = document.querySelector('.task-wrap')

submit.addEventListener('click', (e) => {
    e.preventDefault()
    let inputValue = input.value
    addNewTask(inputValue)

})

let addNewTask = function (value) {
    let li = document.createElement('li')
    li.className = 'task'
    taskWrap.appendChild(li)

    let pa = document.createElement('p')
    li.appendChild(pa)
    pa.className = 'task-desc'
    pa.innerHTML = value

    let iconsDiv = document.createElement('div')
    iconsDiv.className = 'icons'
    li.appendChild(iconsDiv)

    let check = document.createElement('i')
    check.className = 'fa-solid fa-circle-check'
    iconsDiv.appendChild(check)

    let deleteT = document.createElement('i')
    deleteT.className = 'fa-solid fa-trash'
    iconsDiv.appendChild(deleteT)

    input.value = ''
    // deleteTasks(li)
    if(deleteTask){
        deleteTask.addEventListener('click', function(){
            taskWrap.removeChild(li)
        })
    }
}




