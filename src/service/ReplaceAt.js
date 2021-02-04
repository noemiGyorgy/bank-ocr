const replaceAt = (str, index, char) => {
  let strArray = str.split("");
  strArray[index] = char;
  return strArray.join("");
};

export default replaceAt;
