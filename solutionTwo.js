/*
2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE:

Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
*/
const fibonacciCache = [0, 1, 1];

function recursiveFibonacci(index) {
  if (index <= 0) return 0;
  if (index <= 2) return 1;
  if (fibonacciCache[index]) return fibonacciCache[index];

  fibonacciCache[index] = recursiveFibonacci(index - 1) + recursiveFibonacci(index - 2);

  return fibonacciCache[index];
}

function solutionTwo(num) {
  if (num === 0) return 'O número pertence à sequência';

  let fibonacciIndex = 1;
  let fibonacciValue = 0;

  while (num > fibonacciValue) {
    fibonacciValue = recursiveFibonacci(fibonacciIndex);

    if (num === fibonacciValue) return 'O número pertence à sequência';

    fibonacciIndex += 1;
  }

  return 'O número não pertence à sequência'
}

module.exports = solutionTwo;
