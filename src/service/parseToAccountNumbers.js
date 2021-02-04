import digitalNumbers from "./digitalNumbers";
import isValidChecksum from "./isValidChecksum";
import correctNumber from "./correctNumber";

const getNumber = (firstLine, secondLine, thirdLine) => {
  const DIGIT_WIDTH = 3;
  let accountNumber = "";
  let status = "OK";
  let isIllegible = false;

  for (let i = 0; i < firstLine.length; i += DIGIT_WIDTH) {
    let digitalNumber =
      firstLine.slice(i, i + DIGIT_WIDTH) +
      secondLine.slice(i, i + DIGIT_WIDTH) +
      thirdLine.slice(i, i + DIGIT_WIDTH);
    if (digitalNumber in digitalNumbers) {
      accountNumber += digitalNumbers[digitalNumber];
    } else {
      accountNumber += "?";
      isIllegible = true;
    }
  }

  if (isIllegible) {
    status = "ILL";
  } else if (!isValidChecksum(accountNumber)) {
    status = "ERR";
  }

  if (status === "OK") {
    return { account: accountNumber, status: status };
  }

  return correctNumber(accountNumber);
};

const parseToAccountNumbers = (text) => {
  const ENTRY_HEIGHT = 4;
  let lines = text.split("\n");
  let accounts = [];

  for (let i = 0; i < lines.length; i += ENTRY_HEIGHT) {
    accounts.push(getNumber(lines[i], lines[i + 1], lines[i + 2]));
  }

  return accounts;
};

export default parseToAccountNumbers;
