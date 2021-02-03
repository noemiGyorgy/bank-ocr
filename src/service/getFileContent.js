const getFileContent = async (e, setText) => {
  e.preventDefault();
  const reader = new FileReader();

  reader.onload = async (e) => {
    const text = e.target.result;
    setText(text);
  };

  reader.readAsText(e.target.files[0]);
};

export default getFileContent;
