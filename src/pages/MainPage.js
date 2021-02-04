import React, { useState, useEffect, useContext } from "react";
import getFileContent from "../service/getFileContent";
import parseToAccountNumbers from "../service/parseToAccountNumbers";
import { AccountNumbersContext } from "../context/AccountNumbersContext";
import FileList from "../components/FileList";

function MainPage() {
  const [accountNumbers, setAccountNumbers] = useContext(AccountNumbersContext);
  const [fileName, setFileName] = useState("");
  const [text, setText] = useState("");

  const handleChange = (e) => {
    let name = e.target.files[0].name;
    let dot = name.lastIndexOf(".");
    setFileName(name.substring(0, dot));
    getFileContent(e, setText);
  };

  useEffect(() => {
    if (fileName !== "") {
      let newAccountNumbers = { ...accountNumbers };
      newAccountNumbers[fileName] = parseToAccountNumbers(text);
      setAccountNumbers(newAccountNumbers);
    }
  }, [text]);

  return (
    <div id="upload-area">
      <div id="inner-area">
        <p>Upload your files here</p>
        <label htmlFor="upload-button" className="file-upload">
          {" "}
          CHOOSE A FILE
        </label>
        <input
          id="upload-button"
          type="file"
          onChange={(e) => handleChange(e)}
        />
        <FileList />
      </div>
    </div>
  );
}

export default MainPage;
