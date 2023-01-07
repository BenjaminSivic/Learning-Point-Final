const startButton = document.getElementById('exit-btn')
const nextButton = document.getElementById('next')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('btn-grid')
const finish=document.getElementById('finish')
var count=1;
var correctAnswers=0;
let shuffledQuestions, currentQuestionIndex


finish.addEventListener('click',()=>{
    localStorage.setItem("answeredQs", correctAnswers);
})
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    if(count>=3){
        nextButton.style.visibility="hidden";
        finish.style.visibility="visible";
    }
    count++;
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('button-answer')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if(correct){
    correctAnswers++;
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'What is 2 + 2?',
    answers: [
      { text: '4', correct: true },
      { text: '22', correct: false },
      { text: '12', correct: false },
      { text: '3', correct: false }
    ]
  },
  {
    question: 'What ball is orange?',
    answers: [
      { text: 'Basketball', correct: true },
      { text: 'Football', correct: false },
      { text: 'Tennis Ball', correct: false },
      { text: 'Bowling Ball', correct: false }
    ]
  },
  {
    question: 'Is web development fun?',
    answers: [
      { text: 'Kinda', correct: false },
      { text: 'YES!!!', correct: true },
      { text: 'Um no', correct: false },
      { text: 'IDK', correct: false }
    ]
  },
  {
    question: 'What is 4 * 2?',
    answers: [
      { text: '6', correct: false },
      { text: '8', correct: true },
      { text: '12', correct: false },
      { text: '7', correct: false }
    ]
  }
]