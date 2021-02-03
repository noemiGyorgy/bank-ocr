import parseToAccountNumbers from "./parseToAccountNumbers";

const getFileContent = async (e) => {
  e.preventDefault();
  const reader = new FileReader();

  reader.onload = async (e) => {
    const text = e.target.result;
    parseToAccountNumbers(text);
  };

  reader.readAsText(e.target.files[0]);
};

export default getFileContent;
