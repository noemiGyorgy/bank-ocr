const isValidChecksum = (accountNumber) => {
  let sum = 0;
  let length = accountNumber.length;
  for (let i = 1; i < length; i++) {
    sum += i * parseInt(accountNumber.charAt(length - i));
  }

  if (sum % 11 === 0) {
    return true;
  }
  return false;
};

export default isValidChecksum;
