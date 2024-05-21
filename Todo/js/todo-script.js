
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

let addTodo = (item) => {
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

    checTask(listItem)
    deleteItem(listItem)
  
}

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











// let p = document.createElement('p')
//         p.classList.add('task-desc')
//         li.appendChild(p)
//         p.innerHTML = input.value

//         let div = document.createElement('div')
//         p.classList.add('icons')
//         li.appendChild(div)

//         let i = document.createElement('i')
//         p.classList.add('fa-solid')
//         p.id = 'check'
//         div.appendChild(i)

//         let span = document.createElement('span')
//         p.classList.add('fa-solid')
//         p.id = 'delete'
//         div.appendChild(span)