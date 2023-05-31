const nextButtonOne = document.querySelector(".next")
const nextButtonTwo = document.querySelector(".next2")
const questionOne = document.querySelector(".ques1")
const questionTwo = document.querySelector(".ques2")
let inputOne
let inputTwo
const results = document.querySelector(".results") 
const answerOne = document.querySelector(".fighterRobot")
const answerTwo = document.querySelector(".hardjobRobot")
const answerThree = document.querySelector(".homeworkerRobot")
const answerFour = document.querySelector(".cityworkerRobot")
const answerText = document.querySelector(".answer-text")

nextButtonOne.onclick = function() {
  inputOne = document.querySelector(".q1-answer").value;
  questionOne.style.display = "none";
  questionTwo.style.display = "block";
};

nextButtonTwo.onclick = function() {
  inputTwo = document.querySelector(".q2-answer").value;
  
  questionOne.style = "display:none";
  questionTwo.style = "display:none";
  results.style = "display:block";
  

  if ((inputOne === "3" || inputOne === "4") && (inputTwo ===  'yes' || inputTwo === 'Yes')){
    answerOne.style.display = "block"; 
    answerText.innerHTML = "You are a figher robot for entertainment or wars.";
  }

  else if ((inputOne === '3' || inputOne === '4') && (inputTwo ==  'no' || inputTwo === 'No')){
    answerTwo.style.display = "block"; 
    answerText.innerHTML = "You are a hard job worker ment for constuction,mines, and other dangerus and physically demading jobs";
  }

  else if ((inputOne === '1' || inputOne === '2') && (inputTwo ==  'no' || inputTwo === 'No')){
    answerThree.style.display = "block";
    answerText.innerHTML = "You are made to help around the house";
  }

  else if ((inputOne === '1' || inputOne === '2') && (inputTwo ===  'yes' || inputTwo === 'Yes')){
    answerFour.style.display = "block"; 
    answerText.innerHTML = "You are made to help the city and genaral population";
  }
};





// make descriptions for answers 

// when show answer say "blank"