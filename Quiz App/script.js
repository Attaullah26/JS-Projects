const questions = [
    {
        "question": "Which one is correct team name in NBA?",
        'a': "New York Bulls",
        'b': "Los Angeles Kings",
        'c': "Golden State Warriros",
        'd': "Huston Rocket",
        "answer": "Huston Rocket"
    },
    {
        "question": "'Namaste' is a traditional greeting in which Asian language?",
        'a': "Hindi",
        'b': "Mandarin",
        'c': "Nepalese",
        'd': "Thai",
        "answer": "Hindi"
    },
    {
        "question": "The Spree river flows through which major European capital city?",
        'a': "Berlin",
        'b': "Paris",
        'c': "Rome",
        'd': "London",
        "answer": "Berlin"
    },
    {
        "question": "Which famous artist had both a 'Rose Period' and a 'Blue Period'?",
        'a': "Pablo Picasso",
        'b': "Vincent van Gogh",
        'c': "Vincent van Gogh",
        'd': "Edgar Degas",
        "answer": "Pablo Picasso"
    }
]

const questionBox = document.querySelector('#questionBox')
const optionsData = document.querySelectorAll('.option')
const main = document.querySelectorAll('.container')
let total_questions = questions.length
let index = 0
let right = 0
let wrong = 0



const reset = ()=>{
    optionsData.forEach(input =>{
        input.checked = false
    })
}
console.log(total_questions, index);
const loadQuestion = ()=>{
    if(index === total_questions){
       return endQuiz()
    }
    reset()
    let data = questions[index]
    console.log(data);
    questionBox.innerHTML = `${index+1}) ${data.question}`
    optionsData[0].nextElementSibling.innerHTML = data.a
    optionsData[1].nextElementSibling.innerHTML = data.b
    optionsData[2].nextElementSibling.innerHTML = data.c
    optionsData[3].nextElementSibling.innerHTML = data.d
    // console.log(optionsData[0].nextElementSibling.innerHTML);
    console.log(total_questions, index);
}

const submitQuiz = ()=>{
    let data = questions[index]
    let ans = getAnswer()
    if(ans === data.answer){
        right++
    }else{
        wrong++
    }
    index++
    loadQuestion()
    return;
}

const getAnswer = ()=>{
    let answer = ''
    optionsData.forEach(input =>{
        if(input.checked){
            answer = input.value
        }
    })
    return answer
}

loadQuestion()



const endQuiz = ()=>{
    main.innerHTML = `
    <h1>Thanks for playing.</h1>
    `
}