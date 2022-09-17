const input = require('sync-input');
const botName = "MyBot";
const birthYear = "September 16 2022";
let userName = "";
let userAge = 0;

/* validations */
const isValidNumber = (number) => !isNaN(number);

/* logs */
showGreetings = () => {
  console.log(`Hello! My name is ${botName}`);
  console.log(`I was created in ${birthYear}`);
}

const showInvalidNumberMessage = () => console.log("Please introduce a valid number");

const showWrongAnswer = () => console.log("Please, try again.");

/* inputs */
askForName = () => {
  userName = input("Please, remind me your name. \n");
  console.log(`What a great name you have, ${userName}!`);
}

askForAge = () => {
  console.log("Let me guess your age.");
  console.log("Enter remainders of dividing your age by 3, 5 and 7.");
  let remainder3 = Number(input());
  while (!isValidNumber(remainder3)) {
    showInvalidNumberMessage();
    remainder3 = Number(input());
  }
  let remainder5 = Number(input());
  while (!isValidNumber(remainder5)) {
    showInvalidNumberMessage();
    remainder5 = Number(input());
  }
  let remainder7 = Number(input());
  while (!isValidNumber(remainder7)) {
    showInvalidNumberMessage();
    remainder7 = Number(input());
  }
  userAge = (remainder3 * 70 + remainder5 * 21 + remainder7 * 15) % 105
  console.log(`Your age is ${userAge}; that's a good time to start programming!`);
}

const askForNumber = () => {
  console.log("Now I will prove to you that I can count to any number you want.");
  let counter = 0;
  let number = Number(input());
  while (!isValidNumber(number)) {
    showInvalidNumberMessage();
    number = Number(input());
  }
  while (counter <= number) {
    console.log(`${counter}!`);
    counter += 1;
  }
  console.log("Completed, have a nice day!");
}

const doQuiz = () => {
  console.log("Let's test your programming knowledge");
  const correctAnswer = 4;
  console.log("Which language is used for web development?");
  console.log("1. C++");
  console.log("2. Haskell");
  console.log("3. Kotlin");
  console.log("4. JavaScript");
  let answer = Number(input());
  while (correctAnswer !== answer) {
    showWrongAnswer();
    answer = Number(input());
    while (!isValidNumber(answer)) {
      showInvalidNumberMessage();
      answer = Number(input());
    }
  }
  console.log("Congratulations, have a nice day!");
}

showGreetings();
askForName();
askForAge();
askForNumber();
doQuiz();