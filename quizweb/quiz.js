const questions=[
    {
        question:"Which is largest animal in the world?",
        answers:[
            {text:"Shark",correct:false} ,
                {text:"Bluewhale",correct:true},
                {text:"elephant",correct:false},
                {text:"Giraffe",correct:false },
           

        ]
    },
    {
        question:"Which is smallest country in the world?",
        answers:[
            {text:"Vatican City",correct:false},
                {text:"Bhutan",correct:true},
               { text:"Nepal",correct:false},
                {text:"Shri Lanka",correct:false  },
          

        ]
    },
    {
        question:"Which is largest dessert in the world?",
        answers:[
            {text:"kalahari",correct:false},
               {text:"Gobi",correct:false} ,
                {text:"Sahara",correct:true},
                {text:"Antarctica",correct:false  },
          

        ]
    },
    {
        question:"Which is smallest continent in the world?",
        answers:[
            {
                text:"Asia",correct:false},
                {text:"Australia",correct:true},
                {text:"Arctic",correct:false},
                {text:"Africa",correct:false},
         

        ]
    },
    { 
        question:"which is the largest mountain peak?",
        answers:[
            {text:"k2",correct:false},
               {text:"Mount Everest",correct:true},
               {text:"Kangchenjunga",correct:false},
               {text:"Lhotse",correct:false},
        ]

            }
        ]




    
    


const questionElement=document.getElementById("questions");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-button");


let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    resetState();//it reset the previous question and answers
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();

}
/*function randomquestion(){
    var num=[1,2,3,4,5];
    rannum=[];
    i=num.length;
    j=0;
    while(i--){
       j= Math.floor(Math.random()*i);
       rannum.push(num[j]);
       num.slice(j,1);
       

    }
    

}*/
function generateRan(){
    var max = 5;
    var random = [];
    for(var i = 0;i<max ; i++){
        var temp = Math.floor(Math.random()*max);
        if(random.indexOf(temp) == -1){
            random.push(temp);
        }
        else
         i--;
    }
    return random;
}


 
function showQuestion(){
    resetState();//purana question hat jayega
   let currentQuestion=questions[generateRan()];//pura question aur answer show ho rha hai
   let questionNo=currentQuestionIndex+1;
   questionElement.innerHTML= questionNo+". "+ currentQuestion.question;//full question print ho jayega
   
    
   currentQuestion.answers.forEach(answer =>{
    const button =document.createElement("button");//to creating an html element.
    button.innerHTML=answer.text;//yaha pe hum button element mai answer ka text daal rhe hai
    button.classList.add("btn");//btn class add kr di button element mai
    answerButtons.appendChild(button);//answerbuttons ke last mai yeh add kr dega button element ko
    if(answer.correct){
        button.dataset.correct=answer.correct;//agar humara answer true hai toh button ke correct mai true assign kr do
    }
    button.addEventListener("click", selectAnswer);//jab hum button ko press krenge toh hum select answer pe poch jayenge
   });
}


function showScore(){                               //done
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";

}
function resetState(){
    nextButton.style.display="none";//first page hides the next button
    while(answerButtons.firstChild){      //it removes the previous answer buttons
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
  const selectedBtn = e.target;//jis button pe click kiya hai voh selected button mai aa jayega
  const isCorrect = selectedBtn.dataset.correct ==="true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
  }
  else{
    selectedBtn.classList.add("incorrect");
  }

  Array.from(answerButtons.children).forEach(button =>{
      if(button.dataset.correct ==="true"){
        button.classList.add("correct");
      }
      button.disabled =true;//button disable ho jayenge
    });
    nextButton.style.display="block";//next button show hone lgega


  }

  function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();

    }

  }

  nextButton.addEventListener("click",()=>{
      if(currentQuestionIndex<questions.length){
            handleNextButton();
      }
      else{
        startQuiz();
      }

  })

  startQuiz();

