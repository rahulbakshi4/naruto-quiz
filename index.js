var chalk  = require('chalk')
var readlineSync = require('readline-sync')
var score = 0

var userName = readlineSync.question("Please Enter Your Username:\n")
console.log(`Welcome ${chalk.italic(userName.toUpperCase())}, to ${chalk.blue.bgHex('#FF8800')('Tale of Naruto Uzumaki: The Quiz')}\nRule: Answer the question by typing the right qption like a/b/c.\n${chalk.blue.bgYellow("Ikuzo!")}`)

 function game(question, answer) {

  var userAnswer = readlineSync.question(question)  
  
  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log(`${chalk.black.bgGreen.italic("You Got It Right. 🎉")}`)
    score += 10
  } else {
    console.log(`${chalk.bgHex('#E40017').italic("That's a wrong answer ❌. You sure you a Naruto fan?")}`)
  }
  console.log("Current Score is: ", score)
  console.log("------------------------")
 }
 var questions = [
   {
     question: "What is Naruto's catchphrase? \n a.Ikuzo \t b.Dattebayo \t c.Mendokuse\n",
     answer: "b"
   },
      {
     question: "Which team does Naruto belong to? \n a.Team 7\t b.Team 1\t c.Team 10\n",
     answer: "a"
   },
      {
     question: "What is the name of Nine Tails? \n a.Son Goku\t b.Gyuki c.Kuruma\n",
     answer: "c"
   },
      {
     question: "What is the name of fourth Hokage? \n a.Hashirama Senju\tb.Tobirama Senju\t c.Minato Namikaze\n",
     answer: "c"
   },
      {
     question: "Name Naruto's mentor . \n a. Kakashi \t b. Jiraya \t c.Iruka\n",
     answer: "b"
   },
 
 ]








 for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];

  game(currentQuestion.question, currentQuestion.answer)
}

console.log(chalk.black`{bgYellow \nYou got ${score / 10} right answers out of ${questions.length}}`)
console.log(`\nYour final score is ${score}`)
