let elements = []; //elements números inseridos

// // falta parênteses, backspace calcular com ponto
// var valido = true

function clean() {
  elements = [];
  document.getElementsByClassName('display-operations')[0].innerHTML = '';
  document.getElementById('display-continues').placeholder = '';
  let teste = calcular()
  console.log(teste);
}

function insert(numberOrOperations) {
  let numberIsOperation = numberOrOperations;

  if ((isMathematicalOperator(numberOrOperations) || numberIsOperation == '.') && elements.length == 0) {
    return
  }

  const lastInLine = lastIndex(elements);

  if (isMathematicalOperator(lastInLine) && isMathematicalOperator(numberIsOperation)) {
    elements.pop();
  }

  if (isNumber(lastInLine) && (isNumber(numberIsOperation) || numberIsOperation == '.')) {
    if (!isNumber(lastInLine + numberIsOperation)) {
      return;
    }
    numberIsOperation = `${lastInLine}` + `${numberIsOperation}`;
    elements.pop();
  }

  // Se a concatenação não resultar em um número válido, isso significa que o último elemento
  //  da array elements não é um número válido quando concatenado com o próximo número
  //  ou operador a ser inserido. Nesse caso, a função retorna imediatamente, ou seja, 
  // não faz mais nada e sai da função.

  elements.push(numberIsOperation)
  document.getElementsByClassName('display-operations')[0].innerHTML = elements.join('');

  if (((elements.length % 2) != 0) && (elements.length > 1)) {
    document.getElementById('display-continues').placeholder = calcular();
  }
}

// parseFloat para converter o valor em um número flutuante. 
// isFinite para verificar se o valor é finito.
function isNumber(number) {
  return !isNaN(parseFloat(number)) && isFinite(number);
}

function lastIndex(array) {
  return array[array.length - 1];
}

function isMathematicalOperator(operador) {
  return operador == '+' || operador == '-' || operador == 'x' || operador == '÷' || operador == '%'
}

function resul() {
  let resultado = calcular()
  document.getElementsByClassName('display-operations')[0].innerHTML = resultado
  document.getElementsByClassName('display-continues')[0].innerHTML = ''
  // document.getElementById('display-continues').innerHTML = ''

  elements = []
  elements.push(resultado)
}


function calcular() {
  let stack = [];
  let currentoperator = null;
  // operador atual = nulo, nenhum ainda

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];

    if (!isMathematicalOperator(element)) {
      // Se element não for um operador, o código próximo é executado.
      if (!currentoperator) {
        stack.push(element);
        // Se não houver um operador atual, adiciona a pilha.
        continue;
      }

      if (currentoperator === 'x') {
        stack[stack.length - 1] = Number(stack[stack.length - 1]) * Number(element);
      }

      if (currentoperator === '÷') {
        stack[stack.length - 1] = Number(stack[stack.length - 1]) / Number(element);

      }

      if (currentoperator === '%') {
        stack[stack.length - 1] = Number(stack[stack.length - 1]) * Number(element) / 100
      }

      currentoperator = null;
      //  retorna a nulo para poder separar as operações

      continue;

      // o último número de pilha é multiplicado ou dividido
      //  por elemento atual
    }

    if (element === 'x' || element === '÷' || element === '%') {
      currentoperator = element;
    }
    // operador atual = elemento, o próximo


    if (element === '+' || element === '-') {
      stack.push(element);
    }
    // ele é adicionado a pilha
  }


  let result = stack[0];
  for (let i = 1; i < stack.length; i += 2) {
    const operator = stack[i];

    // primeiro número a cada dois elementos, o primeiro é um operador
    //  e o segundo é um número. 


    if (operator === '+') {
      result = Number(result) + Number(stack[i + 1]);
    }

    if (operator === '-') {
      result = Number(result) - Number(stack[i + 1]);
    }
  }
  // document.getElementById('display-continues').innerHTML = result
  if (result) {
    return result.toFixed(1);
  }
}