const quizDB=[
    {
        question: "Q1: What is the full form of HTML?",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "Hello Text Markup Language",
        d: "Hyper Text Markup Language",
        ans: "ans4"

    },
    {
        question: "Q2:Which program is used by web clients to view the web pages?",
        a:"Web browser",
        b: "Protocol",
        c:  "Web server",
        d: "Search Engine",
        ans: "ans1"

    },
    {
        question: "Q3:What is the name of the location address of the hypertext documents?",
        a: "Web server",
        b: "Uniform Resource Locator",
        c: " Web address",
        d: "File",
        ans: "ans2"

    },
    {
        question: "Q4: Which attribute is used to name an element uniquely?",
        a: "class",
        b: "id",
        c: "dot",
        d: "All of above",
        ans: "ans2"
    }

];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');


//  for answer 

const answers=document.querySelectorAll('.answer');

// for score 

const showScore=document.querySelector('#showScore');

// load question function 

    let questionCount=0;
    let score=0;

const loadQuestion =() =>{

    const questionList=quizDB[questionCount];
    question.innerHTML=questionList.question;
    option1.innerHTML=questionList.a;
    option2.innerHTML=questionList.b;
    option3.innerHTML=questionList.c;
    option4.innerHTML=questionList.d;
}


loadQuestion();

// User submitted answer function 

const getCheckAnswer=() =>{
    let answer;
    answers.forEach((curAnsElem)=>{
        if(curAnsElem.checked){
            answer=curAnsElem.id;
        }
    });
    return answer;

}
    // decelect selected ans 

const deselectAll=() => {

    answers.forEach((curAnsElem)=> curAnsElem.checked=false);

}



submit.addEventListener('click',() => {
    const checkedAnswer= getCheckAnswer();
    console.log(checkedAnswer);

    // answer matched then score increase 

    if(checkedAnswer ==quizDB[questionCount].ans){
        score++;
    };

        // load another question 
        questionCount++;

        deselectAll();

        if(questionCount< quizDB.length){
            loadQuestion();
        }

        else{
            showScore.innerHTML=`

                <h3> Your Scored ${score}/${quizDB.length} </h3>            
                <button class="btn" onclick="location.reload()">Play Again</button>
            `;

            showScore.classList.remove('scoreArea');
        }

});

