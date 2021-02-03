import React, { useState } from "react";

function MainPage() {
  const [file, setFile] = useState(null);

  const getFileContent = async (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = async (e) => {
      const text = e.target.result;
      console.log(text);
    };

    reader.readAsText(e.target.files[0]);
  };
  return (
    <div>
      <input type="file" onChange={(e) => getFileContent(e)} />
    </div>
  );
}

export default MainPage;
