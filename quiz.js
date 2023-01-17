const startButton = document.getElementById('start')
const nextButton = document.getElementById('next')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('btn-grid')
const finish=document.getElementById('finish')
const carousel=document.getElementById('carousel')
const controls=document.getElementById('controls')
const question=document.getElementById('question')
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
  startButton.style.visibility="hidden"
  question.style.visibility="visible"
  carousel.style.visibility="visible"
  controls.style.visibility="visible"
  answerButtonsElement.style.visibility="visible"
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
    question: 'What is the capital of Spain',
    answers: [
      { text: 'Madrid', correct: true },
      { text: 'Barcelona', correct: false },
      { text: 'Paris', correct: false },
      { text: 'Montreal', correct: false }
    ]
  },
  {
    question: 'Which famous football club is located in Catalonia?',
    answers: [
      { text: 'FC Barcelona', correct: true },
      { text: 'Sporting', correct: false },
      { text: 'Real Madrid', correct: false },
      { text: 'Fiorentina', correct: false }
    ]
  },
  {
    question: 'Which of the following does not neighbour Spain?',
    answers: [
      { text: 'Portugal', correct: false },
      { text: 'Germany', correct: true },
      { text: 'France', correct: false },
      { text: 'Morroco', correct: false }
    ]
  },
  {
    question: 'What is the capital of Portugal?',
    answers: [
      { text: 'London', correct: false },
      { text: 'Lisbon', correct: true },
      { text: 'Paris', correct: false },
      { text: 'Berlin', correct: false }
    ]
  }
]