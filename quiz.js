const startButton = document.getElementById('start')
const nextButton = document.getElementById('next')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('btn-grid')
const finish=document.getElementById('finish')
const carousel=document.getElementById('carousel')
const controls=document.getElementById('controls')
const question=document.getElementById('question')
let questions;
var count=1;
var correctAnswers=0;
let quizzes=0;
let shuffledQuestions, currentQuestionIndex


finish.addEventListener('click',()=>{
    localStorage.setItem("answeredQs", correctAnswers);
    quizzes++;
    localStorage.setItem("CompletedQuizzes", quizzes);
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
  SetTopic();
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

function SetTopic(){
  var topic=localStorage.getItem("Topic");
  var diff=localStorage.getItem("Difficulty");
  var length=localStorage.getItem("Length");
  if(topic==1){
    if(diff==1){
      if(length==1){
        questions = [
          {
            question: 'What is the main cause of climate change?',
            answers: [
              { text: 'Human activities', correct: true },
              { text: 'Volcanic eruptions', correct: false },
              { text: 'Solar radiation', correct: false },
              { text: 'Solar radiation', correct: false }
            ]
          },
          {
            question: 'What are the effects of climate change?',
            answers: [
              { text: 'All of the stated', correct: true },
              { text: 'Rising sea levels', correct: false },
              { text: 'More extreme weather events', correct: false },
              { text: 'Changes in the distribution of plants and animals', correct: false }
            ]
          },
          {
            question: 'How can we reduce greenhouse gas emissions?',
            answers: [
              { text: 'By using renewable energy sources', correct: false },
              { text: 'All of the stated', correct: true },
              { text: 'By reducing the use of fossil fuels', correct: false },
              { text: 'By protecting and restoring natural systems', correct: false }
            ]
          },
          {
            question: 'What is the goal of computer models in climate change?',
            answers: [
              { text: 'To measure the temperature of the Earths surface', correct: false },
              { text: 'To understand the causes of climate change', correct: false },
              { text: 'To study the effects of solar radiation', correct: false },
              { text: ' To predict how the Earths climate will change in the future', correct: true }
            ]
          }
        ]  
      }
      if(length==2){
        questions = [
          {
            question: 'What is one promising area of research in the search for a cure for cancer?',
            answers: [
              { text: 'Immunotherapy', correct: true },
              { text: 'Gene therapy', correct: false },
              { text: 'Radiation therapy', correct: false },
              { text: 'Chemotherapy', correct: false }
            ]
          },
          {
            question: 'How does chemotherapy work to kill cancer cells?',
            answers: [
              { text: 'By preventing the cancer cells from dividing and growing', correct: true },
              { text: 'By introducing healthy genes into cancer cells', correct: false },
              { text: 'By using high-energy radiation to kill cancer cells', correct: false },
              { text: 'By using the bodys own immune system to fight cancer', correct: false }
            ]
          },
          {
            question: 'What is the goal of surgery in treating cancer?',
            answers: [
              { text: 'To introduce healthy genes into cancer cells', correct: false },
              { text: 'To remove as much of the cancer as possible while preserving as much healthy tissue as possible', correct: true },
              { text: 'To prevent the cancer cells from dividing and growing', correct: false },
              { text: 'To train the immune system to recognize and attack cancer cells', correct: false }
            ]
          },
          {
            question: 'What are the side effects of chemotherapy?',
            answers: [
              { text: 'Introduction of healthy genes into cancer cells', correct: false },
              { text: 'Using high-energy radiation to kill cancer cells', correct: false },
              { text: 'Introduction of healthy genes into cancer cells', correct: false },
              { text: 'Hair loss, nausea, and fatigue', correct: true }
            ]
          }
        ]  
      }
      if(length==3){
        questions = [
          {
            question: 'What is one of the main reasons why endangered species recovery is important?',
            answers: [
              { text: 'To maintain biodiversity', correct: true },
              { text: 'To protect the cultural heritage of indigenous people', correct: false },
              { text: 'To reduce greenhouse gas emissions', correct: false },
              { text: 'To regulate hunting and fishing', correct: false }
            ]
          },
          {
            question: 'What is one way to protect the habitats of endangered species?',
            answers: [
              { text: 'By creating national parks and wildlife refuges', correct: true },
              { text: 'By engaging the public in conservation efforts', correct: false },
              { text: 'By reducing greenhouse gas emissions', correct: false },
              { text: 'By regulating hunting and fishing', correct: false }
            ]
          },
          {
            question: 'How can climate change affect endangered species?',
            answers: [
              { text: 'By increasing hunting and fishing', correct: false },
              { text: 'By causing rising temperatures, droughts, and sea level rise', correct: true },
              { text: 'By protecting and restoring natural habitats', correct: false },
              { text: 'By reducing greenhouse gas emissions', correct: false }
            ]
          },
          {
            question: 'What is an important step to educate the public about the importance of endangered species recovery?',
            answers: [
              { text: 'By reducing greenhouse gas emissions', correct: false },
              { text: 'By creating national parks and wildlife refuges', correct: false },
              { text: 'By regulating hunting and fishing', correct: false },
              { text: 'By providing information through websites, books and other resources', correct: true }
            ]
          }
        ]  
      }
    }
    if(diff==2){
      if(length==1){
        questions = [
          {
            question: 'What is the main contribution of microbiology?',
            answers: [
              { text: 'All of the stated', correct: true },
              { text: 'Understanding of the crucial role microorganisms play in nutrient cycling and the maintenance of biodiversity', correct: false },
              { text: 'The study of pathogenic microorganisms and the mechanisms by which they cause disease', correct: false },
              { text: 'The production of various fermented food products and industrial compounds', correct: false }
            ]
          },
          {
            question: 'What is the role of microorganisms in bioremediation?',
            answers: [
              { text: 'They clean up contaminated soils and water', correct: true },
              { text: 'They form soil and remineralize nutrients', correct: false },
              { text: 'They produce biofuels, enzymes and chemicals', correct: false },
              { text: 'They cause diseases', correct: false }
            ]
          },
          {
            question: 'What are the practical applications of microbiology?',
            answers: [
              { text: 'Agriculture, energy production, and construction', correct: false },
              { text: 'Food production, medicine, and biotechnology', correct: true },
              { text: 'Space exploration, transportation, and communication', correct: false },
              { text: 'Fashion, art, and entertainment', correct: false }
            ]
          },
          {
            question: 'Which microorganisms are involved in biogeochemical processes?',
            answers: [
              { text: 'Bacteria', correct: false },
              { text: 'Viruses', correct: false },
              { text: 'Fungi', correct: false },
              { text: 'All of the stated', correct: true }
            ]
          }
        ]  
      }
      if(length==2){
        questions = [
          {
            question: 'What is one of the negative effects of technology on human communication?',
            answers: [
              { text: 'Increased stress and burnout', correct: true },
              { text: 'Improved social skills', correct: false },
              { text: 'Increased privacy', correct: false },
              { text: 'More accurate and reliable information', correct: false }
            ]
          },
          {
            question: 'How does technology affect the spread of information?',
            answers: [
              { text: 'It makes it less trustworthy', correct: true },
              { text: 'It makes it more accurate and reliable', correct: false },
              { text: 'It makes it easier to access', correct: false },
              { text: 'It makes it slower', correct: false }
            ]
          },
          {
            question: ' How does technology affect the way we communicate?',
            answers: [
              { text: 'It makes it more formal', correct: false },
              { text: 'It allows for new and different forms of expression', correct: true },
              { text: 'It makes it more face-to-face', correct: false },
              { text: 'It makes it less personal', correct: false }
            ]
          },
          {
            question: 'Why can technology lead to a decline in face-to-face communication?',
            answers: [
              { text: 'It makes it more convenient', correct: false },
              { text: 'It increases privacy', correct: false },
              { text: 'It improves social skills', correct: false },
              { text: 'It makes it easier to avoid in-person interactions', correct: true }
            ]
          }
        ]  
      }
      if(length==3){
        questions = [
          {
            question: 'What is one of the most significant ethical concerns about human genetic engineering?',
            answers: [
              { text: 'The possibility of creating "designer babies"', correct: true },
              { text: 'The potential for genetic engineering to create new forms of human life', correct: false },
              { text: 'The risk that genetic engineering may be used to create organisms that are resistant to', correct: false },
              { text: 'The potential for genetic engineering to improve crop yields', correct: false }
            ]
          },
          {
            question: 'How might genetic engineering exacerbate existing social inequalities?',
            answers: [
              { text: 'By only allowing certain individuals or groups to have access to genetic enhancements', correct: true },
              { text: 'By increasing the pace of human evolution', correct: false },
              { text: 'By creating new forms of human life', correct: false },
              { text: 'By improving the human immune system', correct: false }
            ]
          },
          {
            question: 'What are unintended consequences of genetic engineering?',
            answers: [
              { text: 'The potential for genetic engineering to improve crop yields', correct: false },
              { text: 'The risk that a genetic alteration intended to cure a specific disease may have unintended side effects', correct: true },
              { text: 'The potential for genetic engineering to create new forms of human life', correct: false },
              { text: 'The potential for genetic engineering to improve the human immune system', correct: false }
            ]
          },
          {
            question: 'What are some potential benefits of human genetic engineering?',
            answers: [
              { text: 'The potential to change the definition of what it means to be human', correct: false },
              { text: 'The potential to exacerbate existing social inequalities', correct: false },
              { text: 'The potential to create new forms of human life', correct: false },
              { text: 'The ability to cure or prevent genetic disorders', correct: true }
            ]
          }
        ]  
      }
    }
    if(diff==3){
      if(length==1){
    questions = [
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
  }
  if(length==2){
    questions = [
      {
        question: 'What was the main goal of the Human Genome Project?',
        answers: [
          { text: 'All of the stated', correct: true },
          { text: 'To decode the human genome', correct: false },
          { text: 'To understand the genetic basis of disease', correct: false },
          { text: 'To understand the genetic basis of human variation', correct: false }
        ]
      },
      {
        question: 'What is the potential of CRISPR-Cas9 gene editing?',
        answers: [
          { text: 'All of the stated', correct: true },
          { text: 'To treat genetic disorders', correct: false },
          { text: 'To create new treatments for diseases', correct: false },
          { text: 'To create designer babies', correct: false }
        ]
      },
      {
        question: 'What are the ethical and societal implications of the decoding of the human genome?',
        answers: [
          { text: 'Privacy, security and discrimination', correct: false },
          { text: 'All of the stated', correct: true },
          { text: 'Stigmatization of individuals with genetic disorders', correct: false },
          { text: 'Wave-particle duality', correct: false }
        ]
      },
      {
        question: 'What is the impact of the decoding of the human genome on societal attitudes towards individuals with genetic disorders?',
        answers: [
          { text: 'It has led to greater stigmatization', correct: false },
          { text: 'It has no impact', correct: false },
          { text: 'It is not known', correct: false },
          { text: 'It has led to a greater understanding and reduction of stigmatization', correct: true }
        ]
      }
    ]    
  }
  if(length==3){
    questions = [
      {
        question: 'What is AGI?',
        answers: [
          { text: 'A system that can understand or learn any intellectual task that a human being can', correct: true },
          { text: 'A subset of machine learning', correct: false },
          { text: 'A type of neural network', correct: false },
          { text: 'A method to make predictions', correct: false }
        ]
      },
      {
        question: 'What are the advantages of cloud-based AI services?',
        answers: [
          { text: 'All of the stated', correct: true },
          { text: 'Cost-effective and efficient deployment of AI applications', correct: false },
          { text: 'Development of AI applications without the need for specialized expertise', correct: false },
          { text: 'Processing and analyzing vast amounts of data', correct: false }
        ]
      },
      {
        question: 'What are the ethical concerns surrounding AI?e?',
        answers: [
          { text: 'None of the stated', correct: false },
          { text: 'Job displacement, privacy, and misuse', correct: true },
          { text: 'Medical diagnosis, self-driving cars, and personal assistants', correct: false },
          { text: 'Climate change and disaster response', correct: false }
        ]
      },
      {
        question: 'How should AI be developed and used?',
        answers: [
          { text: 'Without any regulations', correct: false },
          { text: 'Unrestricted and without any oversight', correct: false },
          { text: 'As quickly as possible with no consideration for the consequences', correct: false },
          { text: 'Responsibly and ethically', correct: true }
        ]
      }
    ]    
  }
  }
  }
  if(topic==2){
  }

  if(topic==3){
    questions = [
      {
        question: 'When were the first modern Olympic Games held?',
        answers: [
          { text: '1896', correct: true },
          { text: '1896', correct: false },
          { text: '2000', correct: false },
          { text: '776 BC', correct: false }
        ]
      },
      {
        question: 'What is the International Olympic Committee (IOC)?',
        answers: [
          { text: 'A group of representatives from different countries who work together to plan and organize the Olympics.', correct: true },
          { text: 'A group of athletes who compete in the Olympics', correct: false },
          { text: 'A group of sports commentators who provide analysis during the Olympics', correct: false },
          { text: 'A group of sponsors who provide funding for the Olympics', correct: false }
        ]
      },
      {
        question: 'What are the three medal types given in the Olympics?',
        answers: [
          { text: 'Diamond, Platinum, Gold', correct: false },
          { text: 'Gold, Silver, Bronze', correct: true },
          { text: 'Gold, Silver, Copper', correct: false },
          { text: 'Platinum, Gold, Silver', correct: false }
        ]
      },
      {
        question: 'Why were the Olympics cancelled in 1916, 1940 and 1944?',
        answers: [
          { text: 'Lack of funding', correct: false },
          { text: 'Political issues', correct: false },
          { text: 'Disagreements between countries', correct: false },
          { text: 'Due to World War I and II', correct: true }
        ]
      }
    ]  
  }

  if(topic==4){
    if(diff==3){
    questions = [
      {
        question: 'What is the emotional power of music attributed to?',
        answers: [
          { text: 'Its ability to activate specific regions of the brain associated with emotion, memory, and cognition', correct: true },
          { text: 'Its complexity and nuance', correct: false },
          { text: 'Its ability to reflect cultural and historical context', correct: false },
          { text: 'Its ability to transcend linguistic barriers', correct: false }
        ]
      },
      {
        question: 'How has music been used throughout history?',
        answers: [
          { text: 'As a means of treating conditions such as depression, anxiety, and PTSD', correct: true },
          { text: 'As a means of expressing dissent and resistance', correct: false },
          { text: 'As a means of self-expression and emotional catharsis', correct: false },
          { text: 'As a medium to foster a sense of communal unity', correct: false }
        ]
      },
      {
        question: 'How has technology impacted music?',
        answers: [
          { text: 'By making it possible to record and reproduce music', correct: false },
          { text: 'All of the stated', correct: true },
          { text: 'By making it possible to create and perform music using electronic instruments such as the synthesizer', correct: false },
          { text: 'By making it easier to produce', correct: false }
        ]
      },
      {
        question: 'What is the purpose of music therapy?',
        answers: [
          { text: 'To activate specific regions of the brain associated with emotion, memory, and cognition', correct: false },
          { text: 'To reflect cultural and historical context', correct: false },
          { text: 'To treat conditions such as depression, anxiety, and PTSD', correct: false },
          { text: 'To foster a sense of communal unity', correct: true }
        ]
      }
    ]
  }
  }

  if(topic==5){

  }

  if(topic==6){
    if(diff==1){
    questions = [
      {
        question: 'Who were the two opposing military alliances in World War II?',
        answers: [
          { text: 'Axis and Allies', correct: true },
          { text: 'Axis and Axis', correct: false },
          { text: 'Allies and Allies', correct: false },
          { text: 'None of the stated', correct: false }
        ]
      },
      {
        question: 'What was the first war in which airplanes played a major role?',
        answers: [
          { text: 'World War II', correct: true },
          { text: 'World War I', correct: false },
          { text: 'Korean War', correct: false },
          { text: 'Vietnam War', correct: false }
        ]
      },
      {
        question: 'Who was the leader of Germany during World War II?',
        answers: [
          { text: 'Adolf Hitler', correct: false },
          { text: 'Joseph Stalin', correct: true },
          { text: 'Franklin D. Roosevelt', correct: false },
          { text: 'Winston Churchill', correct: false }
        ]
      },
      {
        question: 'What was the major turning point of the war on the Eastern Front?',
        answers: [
          { text: 'Atomic bombing of Hiroshima', correct: false },
          { text: 'D-Day landing', correct: false },
          { text: 'Normandy invasion', correct: false },
          { text: 'Battle of Stalingrad', correct: true }
        ]
      }
    ]  
  }
  if(diff==2){
    questions = [
      {
        question: 'What was the cause of the Chernobyl disaster?',
        answers: [
          { text: 'All of the stated', correct: true },
          { text: 'A failed safety test', correct: false },
          { text: 'Operator negligence', correct: false },
          { text: 'A design defect in the reactor', correct: false }
        ]
      },
      {
        question: 'How many plant workers died instantly in the immediate aftermath of the disaster?',
        answers: [
          { text: '2', correct: true },
          { text: '28', correct: false },
          { text: '115.000', correct: false },
          { text: 'None', correct: false }
        ]
      },
      {
        question: 'How many people were evacuated from the contaminated area in the days and weeks following the accident?',
        answers: [
          { text: '115.000', correct: true },
          { text: '28', correct: false },
          { text: '115', correct: false },
          { text: 'None', correct: false }
        ]
      },
      {
        question: 'What was the purpose of the concrete sarcophagus constructed around the damaged reactor?',
        answers: [
          { text: 'None of the stated', correct: false },
          { text: 'To evacuate people from the area', correct: false },
          { text: 'To prevent further spread of contamination', correct: false },
          { text: 'To contain the radioactive material', correct: true }
        ]
      }
    ]  
  }
  if(diff==3){
    questions = [
      {
        question: 'Who is widely accepted to have made the first recorded discovery of America?',
        answers: [
          { text: 'Christopher Columbus', correct: true },
          { text: 'Leif Erikson', correct: false },
          { text: 'Marco Polo', correct: false },
          { text: 'Vasco da Gama', correct: false }
        ]
      },
      {
        question: 'What was the immediate impact of the discovery of America on the indigenous populations?',
        answers: [
          { text: 'Displacement and disease', correct: true },
          { text: 'Wealth and prosperity', correct: false },
          { text: 'Religious conversion', correct: false },
          { text: 'Development of new trade routes', correct: false }
        ]
      },
      {
        question: 'What led to the widespread destruction of cultures in the New World?',
        answers: [
          { text: 'The imposition of European customs and beliefs', correct: true },
          { text: 'The spread of Christianity', correct: false },
          { text: 'The transatlantic slave trade', correct: false },
          { text: 'The exploitation of resources', correct: false }
        ]
      },
      {
        question: 'How did the discovery of America contribute to the development of the modern world?',
        answers: [
          { text: 'By introducing new foods to Europe', correct: false },
          { text: 'By leading to the displacement of autochthonous peoples', correct: false },
          { text: 'By providing a source of wealth and resources for European colonizers', correct: false },
          { text: 'All of the stated', correct: true }
        ]
      }
    ]  
  }
  }
}
