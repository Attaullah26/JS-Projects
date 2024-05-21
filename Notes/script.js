let add_new = document.querySelector('.add_new')
let main = document.querySelector('.container')

add_new.addEventListener('click', () => {
    addNote()
})

const saveNote = ()=>{
        let notes = document.querySelectorAll('.note textarea')
        let data = []
        notes.forEach(note => {
            data.push(note.value)
        });
        localStorage.setItem('Notes', JSON.stringify(data))
}

function addNote(text = " ") {
    let note = document.createElement('div')
    note.classList.add('note')
    note.innerHTML = `
        <div class="head">
            <i class="save fa-solid fa-floppy-disk"></i>
            <i class="trash fa-solid fa-trash"></i>
        </div>
        <textarea name="note" id="note_area" style="height: 100%;">${text}</textarea>
    `;
    main.appendChild(note)
    deleteNote(note)
    note.querySelector('.save').addEventListener('click', ()=>{
        saveNote()
    })
    note.querySelector('textarea').addEventListener('focusout', ()=>{
        saveNote()
    })
    saveNote()
}

const deleteNote = (note)=>{
    let trash = note.querySelector('.trash')
    trash.addEventListener('click', ()=>{
        note.remove()
        saveNote()
    })
}

(
    function (){
        let lsnotes = JSON.parse(localStorage.getItem('Notes'))
        lsnotes.sort((a,b) => b - a)
        lsnotes.forEach((lsnotes)=>{
            addNote(lsnotes)
        })
    }
)()
