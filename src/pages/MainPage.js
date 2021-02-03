import React, { useState, useEffect, useContext } from "react";
import getFileContent from "../service/getFileContent";
import parseToAccountNumbers from "../service/parseToAccountNumbers";
import { AccountNumbersContext } from "../context/AccountNumbersContext";

function MainPage() {
  const context = useContext(AccountNumbersContext);
  const [text, setText] = useState("");

  useEffect(() => {
    context.setAccountNumbers(parseToAccountNumbers(text));
  }, [text]);

  return (
    <div>
      <h3>Upload your file here</h3>
      <input type="file" onChange={(e) => getFileContent(e, setText)} />
    </div>
  );
}

export default MainPage;
