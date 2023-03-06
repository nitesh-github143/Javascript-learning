let winningNumber = 19;

let userInput = + prompt('guess a number');
console.log(userInput)

let ans = userInput === 19 ? console.log('correct') : userInput > 19 ? console.log('too high') : console.log('too low')