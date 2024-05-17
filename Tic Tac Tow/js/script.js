console.log('Welcome to Tic Tac Toe');

let boxes = document.getElementsByClassName('box')
let info = document.querySelector('.info')
let resetBtn = document.querySelector('.resetBtn')
// let excited = document.getElementsByTagName('img')
let text_box = document.getElementsByClassName('text-box')


// let music = new Audio('music.mp3')
// let turnMusic = new Audio('ting.mp3')
// let gameOver = new Audio('gameover.mp3')

let turn = '';

// Function to change turn
const changeTurn = ()=> {
    return turn === 'X'?'0':'X'
}


resetBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    text_box.innerHTML = ' '
})
// Function to check for a WIN

const checkWin = function (){
    let text_box = document.getElementsByClassName('text-box')
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e => {
        if((text_box[e[0]].innerText === text_box[e[1]].innerText) && (text_box[e[2]].innerText === text_box[e[1]].innerText) && (text_box[e[0]].innerText !== "")){
            info.innerText = text_box[e[0]].innerText + ' Won'
            let excited = document.getElementsByTagName('img').style.width = '200px'
            excited.style.width = '200px'
            
        }
    })
}


// Game Logic
let boxes_arr = Array.from(boxes)
boxes_arr.forEach(element => {
    element.addEventListener('click', ()=>{
        let text_box = element.querySelector('.text-box')
        if(text_box.innerText === ''){
            text_box.innerText = turn
             turn = changeTurn()
            checkWin()
        }
    })
});



