var startBtn = document.getElementById("startButton");

var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
  
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    }
  
  
  
  ];
  

startBtn.addEventListener("click", function(event) {
    var x = document.getElementById("hideH1")
    x.style.display = "none";
    createQuestion(questions);
});

function createQuestion(question) {
    for (let i = 0; i < question.length; i++) {
         var x = document.createElement("button");
        x.innerHTML = question[i].title;
        var questionContainer = document.getElementById("questions");
        questionContainer.appendChild(x);
    }
}



