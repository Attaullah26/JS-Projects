
const input = document.querySelector('#input-field')
const submit = document.querySelector('#add-btn')
const taskDesc = document.querySelector('.task-desc')
const mainTask = document.querySelector('.task')
const check = document.querySelector('#check')
const taskWrap = document.querySelector('.task-wrap')
const deleteTask = document.querySelectorAll('#delete')


input.addEventListener('keyup', (e) => {
    if (e.key == "Enter") {
        addTodo(input.value);
        input.value = ""
    }
})

let addTodo = (item = " ") => {
    let listItem = document.createElement('li')
    listItem.classList.add('task')
    listItem.innerHTML = `
    <p class="task-desc">${item}</p>
    <div class="icons">
    <i class="fa-solid fa-circle-check" id="check"></i>
    <i class="fa-solid fa-trash" id="delete"></i>
    </div>
    `;
    taskWrap.appendChild(listItem);
    // console.log(listItem);

    checTask(listItem)
    deleteItem(listItem)
    saveTask(listItem)
}

let taskData = []
let saveTask = (task)=>{
    let taskItem = task.querySelectorAll('.task-desc')
    taskItem.forEach(task => {
        taskData.push(task.innerHTML)
        localStorage.setItem('Tasks', JSON.stringify(taskData))
    });
}

(
    function(){
        const tasks = localStorage.getItem('Tasks')
        JSON.parse(tasks).forEach((task)=>{
            addTodo(task)
        })
    }
)()

function deleteItem(item) {
    item.querySelector('#delete').addEventListener('click', () => {
        item.remove()
    })
}

function checTask(item) {
    item.querySelector('#check').addEventListener('click', () => {
        item.classList.toggle('done')
    })
}
