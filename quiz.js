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
    question: 'What is the Heisenberg uncertainty principle?',
    answers: [
      { text: 'Position and velocity cannot be known simultaneously.', correct: true },
      { text: 'Particles can exist in multiple positions simultaneously.', correct: false },
      { text: 'The principle of wave-particle duality', correct: false },
      { text: 'The principle of quantum entanglement', correct: false }
    ]
  },
  {
    question: 'What is the concept of superposition?',
    answers: [
      { text: 'A particle can exist in multiple states or positions simultaneously.', correct: true },
      { text: 'The precise position and momentum of a particle cannot both be known simultaneously.', correct: false },
      { text: 'Two particles become inextricably linked', correct: false },
      { text: 'The principle of wave-particle duality', correct: false }
    ]
  },
  {
    question: 'Which concept is the foundation of quantum computing?',
    answers: [
      { text: 'The Heisenberg uncertainty principle', correct: false },
      { text: 'The concept of superposition', correct: true },
      { text: 'The principle of quantum entanglement', correct: false },
      { text: 'Wave-particle duality', correct: false }
    ]
  },
  {
    question: 'What is the main application of quantum entanglement?',
    answers: [
      { text: 'Quantum computing', correct: false },
      { text: 'Quantum cryptography', correct: false },
      { text: 'The creation of unbreakable codes', correct: false },
      { text: ' All of the above', correct: true }
    ]
  }
]