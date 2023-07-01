function calculate(operator) {
  const input1 = parseFloat(document.getElementById("input1").value);
  const input2 = parseFloat(document.getElementById("input2").value);

  const input1Error = document.getElementById("input1-error");
  const input2Error = document.getElementById("input2-error");

  // Reset error messages
  input1Error.textContent = "";
  input2Error.textContent = "";

  if (isNaN(input1)) {
    input1Error.textContent = "* Invalid input";
    return;
  }

  if (isNaN(input2)) {
    input2Error.textContent = "* Invalid input";
    return;
  }

  let result;
  switch (operator) {
    case "+":
      result = input1 + input2;
      break;

    case "-":
      result = input1 - input2;
      break;
    case "*":
      result = input1 * input2;
      break;
    case "/":
      if (input2 === 0) {
        result = "Infinity";
      } else {
        result = input1 / input2;
      }
      break;
    default:
      result = "Invalid operation";
  }

  document.getElementById("result").value = result;
}
