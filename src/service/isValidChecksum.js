const isValidChecksum = (accountNumber) => {
  let sum = 0;
  let length = accountNumber.length;
  for (let i = 1; i <= length; i++) {
    let char = accountNumber[length - i];
    sum += i * parseInt(char, 16);
  }

  if (sum % 11 === 0) {
    return true;
  }
  return false;
};

export default isValidChecksum;
