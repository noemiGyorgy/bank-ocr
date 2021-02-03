import digitalNumbers from "./digitalNumbers";

const getNumber = (firstLine, secondLine, thirdLine) => {
  const DIGIT_WIDTH = 3;
  let accountNumber = "";

  for (let i = 0; i < firstLine.length; i += DIGIT_WIDTH) {
    let digitalNumber =
      firstLine.slice(i, i + DIGIT_WIDTH) +
      secondLine.slice(i, i + DIGIT_WIDTH) +
      thirdLine.slice(i, i + DIGIT_WIDTH);
    if (digitalNumber in digitalNumbers) {
      accountNumber += digitalNumbers[digitalNumber];
    }
  }
  return accountNumber;
};

const parseToAccountNumbers = (text) => {
  const ENTRY_HEIGHT = 4;
  let lines = text.split("\n");

  for (let i = 0; i < lines.length; i += ENTRY_HEIGHT) {
    console.log(getNumber(lines[i], lines[i + 1], lines[i + 2]));
  }
};

export default parseToAccountNumbers;
