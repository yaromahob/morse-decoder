const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let morseDecoder = [];

  for (let i = 0; i < expr.length; i = i + 10) {
    const letter = expr.substring(i, i + 10);
    let morsePreDecoder = [];
    for (let j = 0; j <= letter.length; j = j + 2) {
      if (letter[j] == "1" && letter[j + 1] == "0") {
        morsePreDecoder.push(".");
      }
      if (letter[j] == "1" && letter[j + 1] == "1") {
        morsePreDecoder.push("-");
      }
      if (letter == "**********") {
        morsePreDecoder.push(" ");
        break;
      }
    }
    let letterString = morsePreDecoder.join("");
    if (MORSE_TABLE[letterString] != undefined) {
      morseDecoder.push(MORSE_TABLE[letterString]);
    } else morseDecoder.push(" ");
  }
  return morseDecoder.join("");
}

module.exports = {
  decode,
};
