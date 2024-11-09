const questionSection = document.querySelector("#question-section");
const question = document.querySelector("#question");
const answer = document.querySelector("#answer");
const startButton = document.querySelector("#start");
const score = document.querySelector("#score");
const submitButton = document.querySelector("#submit-button");
const q = document.querySelector("#q");
const timeOutput = document.querySelector("#time");
let correctAnswer = 0;
let count = 0;
let timer;
let time;
let duration = 10;
function startGame(){
    startButton.classList.add("hidden");
    questionSection.classList.remove("hidden");
    score.textContent = 0;
    count = 0;
    generateQuestion();
}
// Generate Random Number
function randomNumber(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}
//Generate Question
function generateQuestion(){
    answer.value="";
    let questionType = randomNumber(1,4)
    switch (questionType){
        case 1:
            // addition
            let num1 = randomNumber(10,100);
            let num2 = randomNumber(10,100);
            question.textContent = num1+"+"+num2;
            correctAnswer = num1+num2;
            duration = 10;
            break;
        case 2:
            //substraction
            let num3 = randomNumber(10,100);
            let num4 = randomNumber(10,100);
            question.textContent = num3+"-"+num4;
            correctAnswer = num3-num4;
            duration = 20;
            break;
        case 3:
            //multiplication
            let num5 = randomNumber(2,20);
            let num6 = randomNumber(2,20);
            question.textContent = num5+"×"+num6;
            correctAnswer = num5*num6;
            duration = 30;
            break;
        case 4:
            //division
            let num7 = randomNumber(2,10);
            let num8 = randomNumber(2,10);
            question.textContent = num7*num8+"/"+num8;
            correctAnswer = num7;
            duration = 30;
        default:
            break;
    }
    count++;
    q.textContent = count;
    
    startTimer();
}
startButton.onclick = startGame;
//Check Answer and Next Question
function nextQuestion(){
    if(answer.value == correctAnswer){
        score.textContent++;
    }
    if(count == 10){
        clearInterval(timer);
        alert("Game Over, Your score is "+score.textContent+"/10");
        question.innerHTML = "";
        score.textContent = 0;
        startButton.classList.remove('hidden');
        questionSection.classList.add('hidden');
        timeOutput.textContent = 0;
        count = 0;
        time = 0;
        q.textContent = count;
    }else{
        generateQuestion();
    }
}
submitButton.addEventListener("click", () =>{
    if(answer.value == ""){
        alert("Please enter your answer");
    }else{
        nextQuestion();
    }
})
// Timer
function startTimer(){
    time = 0;
    timeOutput.textContent = duration-time;
    clearInterval(timer);
    timer = setInterval(() => {
        time++;
        timeOutput.textContent = duration-time;
        if (time >= duration){
            nextQuestion();
        }
    },1000)
}