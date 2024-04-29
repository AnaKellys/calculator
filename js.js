function calcular(elements) {
  let stack = [];
  let operadorAtual = null;

  for (let i = 0; i < elements.length; i++) {
      const element = elements[i];

      if (!isOperadorMatematico(element)) {
          if (!operadorAtual) {
              stack.push(element);

              continue;
          }

          if (operadorAtual === '*') {
              stack[stack.length - 1] *= element;
          }

          if (operadorAtual === '/') {
              stack[stack.length - 1] /= element;
          }

          operadorAtual = null;

          continue;
      }

      if (element === '*' || element === '/') {
          operadorAtual = element;
      }

      if (element === '+' || element === '-') {
          stack.push(element);
      }
  }


  let result = stack[0];
  for (let i = 1; i < stack.length; i += 2) {
      const operator = stack[i];

      if (operator === '+') {
          result += stack[i + 1];
      } 
      
      if (operator === '-') {
          result -= stack[i + 1];
      }
  }

  return result;
}

function isOperadorMatematico(element) {
  return element === '*' || element === '/' || element === '+' || element === '-';
}