const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const keys = Object.keys(MORSE_TABLE);
    const arrOfLetters = [];
    const morseLetters = [];
    let result = '';

    for (let i = 0; i < expr.length; i += 10) {
        arrOfLetters.push(expr.slice(i, i + 10));
    }

    arrOfLetters.map( letter => morseLetters.push(changeLetters(letter)));

    for (const letter of morseLetters) {
        if (letter.length === 0) result += ' ';

        keys.map( key => key === letter ? result += MORSE_TABLE[key] : result += '');
    }

    return result;
}

function changeLetters (str) {
    const arrOfSymbols = [];
    const start = str.indexOf('1');
  
    if (start < 0) return '';
  
    for (let i = start; i < str.length; i += 2) {
      const symbol = str.slice(i, i + 2);
  
      if (symbol === '10') arrOfSymbols.push('.');
  
      if (symbol === '11') arrOfSymbols.push('-');
    }
  
    return arrOfSymbols.join('');
}

module.exports = {
    decode
}