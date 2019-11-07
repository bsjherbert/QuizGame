var startBtn = document.getElementById("startButton");
var currentQuestionIndex = 0;


var questions = [
  {
    title: "The condition in an if / else statement is enclosed within ____?",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
  {
    title: "Arrays in JavaScript can be used to store ____?",
    choices: ["numbers and strings", "other arrays", "booleans", "all the above"],
    answer: "all the above"
  },
  {
    title: "Commonly used data types do not include ____?",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "String values must be enclosed within ____ when being assigned to variables?",
    choices: ["commas", "curley brackets", "quotes", "parentheses"],
    answer: "quotes"
  },
  {
    title: "A very useful tool used during developement and debugging for printing content to the debugger is?",
    choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
    answer: "console.log"
  }
];


startBtn.addEventListener("click", function () {
  var hideMe = document.getElementById("startContainer")
  hideMe.style.display = "none";
  startBtn.style.display = "none";

  //Start timer here

  createQuestion();
});

function createQuestion() {
  var currentQuestion = questions[currentQuestionIndex]
  var currentTitle = document.getElementById("question");
  currentTitle.textContent = currentQuestion.title

  document.getElementById("answers").innerHTML = "";

  currentQuestion.choices.forEach(function (choice) {
    var btn = document.createElement("button")
    btn.setAttribute("class", "choice")
    btn.setAttribute("value", choice)
    btn.textContent = choice
    btn.onclick = buttonClick
    document.getElementById("answers").appendChild(btn)

  })

}

function buttonClick() {
  console.log(this.value)

  if (this.value === questions[currentQuestionIndex].answer) {
    document.getElementById("correctChoice").textContent = "Correct";
  } else {
    document.getElementById("correctChoice").textContent = "Wrong";
  }

  currentQuestionIndex++
  if (questions.length === currentQuestionIndex) {
    console.log("quizOver")
    // Highscores Logic -> leads to highscores page
  } else {
    createQuestion()
  }

}



// timer
  // add time for correct answer
  //subtract time for incorrect answer

//high score
  //store high score - time remaining - logged to local storage 







