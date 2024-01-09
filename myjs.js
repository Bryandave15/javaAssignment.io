let add = (num1, num2) => num1 + num2;
let subtract = (num1, num2) => num1 - num2;
let multiply = (num1, num2) => num1 * num2;
let divide = (num1, num2) => num1 / num2;

function calculate() {
  let num1 = parseInt(document.getElementById('num1').value);
  let num2 = parseInt(document.getElementById('num2').value);

  if (isNaN(num1) || isNaN(num2)) {
    alert("Please enter valid numbers");
  } else {
    let resultHTML = '<p>The Total is: ' + add(num1, num2) + '</p>' +
                   '<p>The Difference is: ' + subtract(num1, num2) + '</p>' +
                   '<p>The Product is: ' + multiply(num1, num2) + '</p>' +
                   '<p>The quotient is: ' + divide(num1, num2) + '</p>';
document.getElementById('result').innerHTML = resultHTML;

  }
}