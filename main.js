const quizDat=[
    {
        quiestion : "What does HTML stand for?",
        a: "Hyper Text Markup Language",
        b:"Hyper Link Text",
        c:"Hyper id Markup Language",
        d:"Hyper class Markup Language",
        correct:"a",
    },
    {
        quiestion:"Choose the correct HTML element for the largest heading:",
        a:"head",
        b:"h1",
        c:"heading",
        d:"h4",
        correct:"b",
    },
    {
        quiestion:"What is the correct HTML element for inserting a line break?",
        a:"bl",
        b:"hr",
        c:"br",
        d:"a",
        correct:"c",
    },
    {
        quiestion:"Which character is used to indicate an end tag?",
        a:"*",
        b:"?",
        c:"/",
        d:"%",
        correct:"c",
    },
    {
        quiestion:"How can you make a numbered list?",
        a:"ol",
        b:"li",
        c:"ul",
        d:"table",
        correct:"a",
    }
];

const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("quiestion");
const answerEl = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");


// var count = 15;
var minute = 1;
var second = 60;
let currentQuiz = 0;
let score = 0;
var interval = setInterval(function(){
    if(second === 0){
        minute--;
        second = 60;
    }
 
//   count--;
second--;
  if (minute === 0 && second ===0){
    clearInterval(interval);
    document.getElementById('count').innerHTML='Done';
    // or...
    alert("You're out of time!");
    location.reload();
  }
  document.getElementById('count').innerHTML=second;
  document.getElementById('miutes').innerHTML=minute;
}, 1000);



function loadQuistuion(){
    deselectAnswers();
    const currentQuizInfo = quizDat[currentQuiz];
    questionEl.innerText= currentQuizInfo.quiestion;
    a_text.innerText = currentQuizInfo.a;
    b_text.innerText = currentQuizInfo.b;
    c_text.innerText = currentQuizInfo.c;
    d_text.innerText = currentQuizInfo.d;
}
loadQuistuion();

function deselectAnswers(){
    answerEl.forEach(answerEl=>{
        answerEl.checked =false;
    });
}

function getSelect(){
    let answer = undefined;
    answerEl.forEach((answerEl)=>{
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener("click",()=>{
    const answer = getSelect();
    if(answer === quizDat[currentQuiz].correct){
        score++;
    }
    currentQuiz++;

    if(currentQuiz < quizDat.length){
        loadQuistuion();
    }else{
        quiz.innerHTML = '<h3>Your degree is '+ score + '|' + quizDat.length +
        ' </h3>    <button onclick="location.reload()">Reload</button>';
    }
});