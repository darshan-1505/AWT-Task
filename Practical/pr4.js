function factorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}

function mainFunction() {
  const globalVar = "I am a global variable.";

  function nestedFunction() {
    const localVar = "I am a local variable.";
    console.log(localVar);
    console.log(globalVar);
  }

  console.log(globalVar);
  nestedFunction();
}

mainFunction();

const number = 5;
const answer = factorial(number);
console.log(`Factorial of ${number} is: ${answer}`);
