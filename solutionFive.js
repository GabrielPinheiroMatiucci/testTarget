/*
5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:

a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

b) Evite usar funções prontas, como, por exemplo, reverse;
*/

function solutionFive(word) {
  let left = 0;
  let right = word.length - 1;
  const arrayChars = [];
  let invertedWord = '';

  for (let i = 0; i < word.length; i += 1) {
    arrayChars.push(word[i]);
  }

  while (left < right) {
    const leftChar = arrayChars[left];
    const rightChar = arrayChars[right];

    arrayChars[left] = rightChar;
    arrayChars[right] = leftChar;
    
    left += 1;
    right -= 1;
  }

  for (let i = 0; i < word.length; i += 1) {
    invertedWord += arrayChars[i];
  }

  return invertedWord;
}

module.exports = solutionFive;
