import isValidChecksum from "./isValidChecksum";
import replaceAt from "./replaceAt";

const possibleNumbers = {
  0: ["8"],
  1: ["7"],
  3: ["9"],
  5: ["6", "9"],
  6: ["8"],
  9: ["8"],
};

const correctNumber = (accountNumber) => {
  let validAccountNumber = "";

  let i = 0;
  while (i < accountNumber.length) {
    let digit = accountNumber[i];
    if (digit in possibleNumbers) {
      for (let d of possibleNumbers[digit]) {
        let modifiedNumber = replaceAt(accountNumber, i, d);

        if (isValidChecksum(modifiedNumber)) {
          if (validAccountNumber === "") {
            validAccountNumber = modifiedNumber;
          } else {
            return { account: accountNumber, status: "AMB" };
          }
        }
      }
    }
    i++;
  }

  if (validAccountNumber !== "") {
    return { account: validAccountNumber, status: "OK" };
  }
  return { account: accountNumber, status: "ILL" };
};

export default correctNumber;
