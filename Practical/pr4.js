function calculateFactorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    return number * calculateFactorial(number - 1);
  }
}

function mainFunction() {
  let globalVar = "I am a global variable.";

  function nestedFunction() {
    let localVar = "I am a local variable.";
    console.log(localVar);
    console.log(globalVar);
  }

  console.log(globalVar);
  nestedFunction();
}

mainFunction();

const numberToCalculate = 5;
const factorial = calculateFactorial(numberToCalculate);
console.log(`Factorial of ${numberToCalculate} is: ${factorial}`);
