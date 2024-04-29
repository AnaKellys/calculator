let elements = []; //elementsr números inseridos

function clean() {
  elements = [];
  document.getElementsByClassName('display-operations')[0].innerHTML = '';
}

// function equal() {
// document.getElementsByClassName('display-continues').innerHTML = '';
// document.getElementsByClassName('display-operations').innerHTML = calculate();
// }

function insert(numberOrOperaations) {
  let numberIsOperation = numberOrOperaations;

  const lastInLine = lastIndex(elements);

  if (isMathematicalOperator(lastInLine) && isMathematicalOperator(numberIsOperation)) {
    elements.pop();
  }

  if (isNumber(lastInLine) && (isNumber(numberIsOperation) || numberIsOperation == '.')) {
    console.log(lastInLine + numberIsOperation);
    if (!isNumber(lastInLine + numberIsOperation)) {

      return;
    }
    numberIsOperation = lastInLine + numberIsOperation;
    elements.pop();
  }


  elements.push(numberIsOperation)
  document.getElementsByClassName('display-operations')[0].innerHTML = elements.join('');
  // console.log(elements);
}

function isNumber(number) {
  return !isNaN(parseFloat(number)) && isFinite(number);
}

function lastIndex(array) {
  return array[array.length - 1];
}

function isMathematicalOperator(operador) {
  return operador == '+' || operador == '-' || operador == 'x' || operador == '÷' || operador == '%'
}




//  TESTE TWO

// function equal() {
//   let resultt = calculate(elements[0], elements[1], elements[2]);
//   document.getElementById('display-operations').innerHTML = resultt;
// }

function calculate(number1, operator, number2) {
  let result

  if (operator == '+') {
    result = elements.push(Number(number1) + Number(number2))
  }
  if (operator == '-') {
    result = elements.pop(Number(number1) - Number(number2))
  }
  if (operator == 'x') {
    result = Number(number1) * Number(number2)
  }
  if (operator == '÷') {
    result = Number(number1) / Number(number2)
  }

  document.getElementsByClassName('display-operations')[0].innerHTML = result;

}


// function tokenizeExpression(expression) {
//   return expression.match(/\d+|\+|\-|\*|\/|\(|\)/g);
// }

// function precedence(operator) {
//   if (operator === '+' || operator === '-') return 1;
//   if (operator === 'x' || operator === '÷') return 2;
//   return 0;
// }

// function infixToPostfix(tokens) {
//   let outputQueue = [];
//   let operatorStack = [];

//   tokens.forEach(token => {
//     if (isNumber(token)) {
//       outputQueue.push(token);
//     } else if (token === '(') {
//       operatorStack.push(token);
//     } else if (token === ')') {
//       while (operatorStack.length > 0 && operatorStack[operatorStack.length - 1] !== '(') {
//         outputQueue.push(operatorStack.pop());
//       }
//       operatorStack.pop(); // Remove o '('
//     } else {
//       while (operatorStack.length > 0 && precedence(token) <= precedence(operatorStack[operatorStack.length - 1])) {
//         outputQueue.push(operatorStack.pop());
//       }
//       operatorStack.push(token);
//     }
//   });

//   while (operatorStack.length > 0) {
//     outputQueue.push(operatorStack.pop());
//   }

//   return outputQueue;
// }



// function evaluatePostfix(tokens) {
//   let stack = [];

//   tokens.forEach(token => {
//     if (isNumber(token)) {
//       stack.push(Number(token));
//     } else {
//       let num2 = stack.pop();
//       let num1 = stack.pop();
//       switch (token) {
//         case '+':
//           stack.push(num1 + num2);
//           break;
//         case '-':
//           stack.push(num1 - num2);
//           break;
//         case 'x':
//           stack.push(num1 * num2);
//           break;
//         case '÷':
//           stack.push(num1 / num2);
//           break;
//       }
//     }
//   });

//   return stack.pop();

// }

// function isNumber(token) {
//   return !isNaN(parseFloat(token)) && isFinite(token);
// }

// function evaluateExpression(expression) {
//   let tokens = tokenizeExpression(expression);
//   let postfixExpression = infixToPostfix(tokens);
//   return evaluatePostfix(postfixExpression);
// }

// // Exemplo de uso
// let expression = "3 + 4 * (2 - 1) / 5";
// let result = evaluateExpression(expression);
// console.log(result); // Saída esperada: 3.8




// TESTE UM


// function calculate() {
//   let resultado

//   switch (elements[1]) {
//     case '+':
//       resultado = parseFloat(elements[0]) + parseFloat(elements[2])
//       break;
//     case '-':
//       resultado = parseFloat(elements[0]) - parseFloat(elements[2])
//       break;
//     case 'x':
//       resultado = parseFloat(elements[0]) * parseFloat(elements[2])
//       break;
//     case '÷':
//       resultado = parseFloat(elements[0]) / parseFloat(elements[2])
//       break;
//   }

//   elements.shift()
//   elements.shift()
//   elements[0] = `${resultado}`
//   console.log(resultado);
//   while (elements.length > 2) {
//     return calculate()
//   }
//   document.getElementsByClassName('display-operations').innerHTML = elements.join('');
// }