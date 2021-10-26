const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
// User Input
readline.question("Write Your Input:   ", (input) => {
  // Keypad Array
  const keypad = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["*", "0", "#"],
  ];
  // Mapping in ascii value
  const mapping = [
    -1, -1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 9,
    9, 9, 9,
  ];

  getIndexWithKey = (key) => {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 3; j++) {
        if (keypad[i][j] == key) {
          return [i + 1, j + 1];
        }
      }
    }
  };

  inputIsChar = () => {
    // Checking input is char
    var _pattern = /[A-Za-z0-9]/g;
    if (input.match(/[a-z]/i)) {
      return true;
    } else {
      return false;
    }
  };

  inputContainsSpeacialSymbol = (input) => {
    // Cheking input in special Symbol
    if (input == "*" || input == "#") {
      return true;
    } else {
      return false;
    }
  };

  inputIsNumber = (input) => {
    // Checking input is number
    if (isNaN(input)) {
      return true;
    } else {
      return false;
    }
  };

  if (inputIsChar()) {
    console.log(
      " Output is:  ",
      getIndexWithKey(mapping[input.toLowerCase().charCodeAt(0) - 95])
    );
  } else if (inputIsNumber() || inputContainsSpeacialSymbol()) {
    console.log("Output is :  ", getIndexWithKey(input));
  }
  readline.close();
});
