import isValidChecksum from "./IsValidChecksum";
import replaceAt from "./ReplaceAt";
import digitalNumbers from "./DigitalNumbers";

/*
Changes can be found in these positions:

  (1)__2__(3)
    |     |
   4|     |6
    |__5__|
    |     |
   7|     |9
    |_____|
       8

*/

//positions: possible characters
const possibleChars = {
  2: [" ", "_"],
  4: [" ", "|"],
  5: [" ", "_"],
  6: [" ", "|", "\\"],
  7: [" ", "|"],
  8: [" ", "_"],
  9: [" ", "|", "/"],
};

const getLegibleDigits = (strDigital) => {
  let legibleDigits = [];
  for (let i = 1; i <= strDigital.length; i++) {
    if (i in possibleChars) {
      for (let c of possibleChars[i]) {
        if (c !== strDigital[i - 1]) {
          let modifiedDigit = replaceAt(strDigital, i - 1, c);
          if (modifiedDigit in digitalNumbers) {
            legibleDigits.push(digitalNumbers[modifiedDigit]);
          }
        }
      }
    }
  }
  return legibleDigits;
};

const correctNumber = (accountNumber, strDigitals) => {
  let validAccountNumber = "";

  let i = 0;
  while (i < accountNumber.length) {
    let legibleDigits = getLegibleDigits(strDigitals[i]);
    console.log(legibleDigits);

    for (let d of legibleDigits) {
      let modifiedNumber = replaceAt(accountNumber, i, d);

      if (isValidChecksum(modifiedNumber)) {
        if (validAccountNumber === "") {
          validAccountNumber = modifiedNumber;
        } else {
          return { account: accountNumber, status: "AMB" };
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
