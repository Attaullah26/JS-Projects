
const input_field = document.querySelector('#input_field')
const taskWrap = document.querySelector('.task_wrap')
const submit = document.querySelector('#add_btn')
const check_btn = document.querySelector('#check')
const delete_btn = document.querySelectorAll('#delete')

submit.addEventListener('click', (e)=>{
    input_field.value
    addTask(input_field.value)
})

input_field.addEventListener('keyup', (e)=>{
    if(e.key == 'Enter'){
        addTask(input_field.value)
        input_field.value = null
    }
})

let addTask = (task_value = " ")=>{
    let task = document.createElement('li')
    task.classList.add('task')
    task.innerHTML = `
    <p class="task_desc">${task_value}</p>
    <div class="icons">
        <i class="fa-solid fa-circle-check" id="check"></i>
        <i class="fa-solid fa-trash" id="delete"></i>
    </div>
    `;
    taskWrap.appendChild(task)
    input_field.value = null

    task.querySelector('#delete').addEventListener('click', (e)=>{
        task.remove()
        saveTask()
    })

    task.querySelector('#check').addEventListener('click', (e)=>{
        task.classList.toggle('done')
    })


    saveTask()
}

function saveTask(){
    const tasks = taskWrap.querySelectorAll('.task p')
    const data = []
    tasks.forEach((task)=>{
        data.push(task.innerText)
    })
    localStorage.setItem('TasksNew', JSON.stringify(data))
}

(
    function(){
        let local_data = localStorage.getItem('TasksNew')
        local_data = JSON.parse(local_data)
        local_data.forEach((task)=>{
            addTask(task)
        })
    }
)()