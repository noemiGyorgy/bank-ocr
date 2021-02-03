import React, { useContext } from "react";
import { AccountNumbersContext } from "../context/AccountNumbersContext";

function FileList() {
  const [accountNumbers, setAccountNumbers] = useContext(AccountNumbersContext);

  let content = <div />;

  if (accountNumbers.length !== 0) {
    content = accountNumbers.map((a, index) => (
      <div className="file-item" key={index}>
        {a.fileName}
      </div>
    ));
  }

  return <div id="file-list">{content}</div>;
}

export default FileList;
