import React, { useContext } from "react";
import { AccountNumbersContext } from "../context/AccountNumbersContext";
import { Link } from "react-router-dom";

function FileList() {
  const [accountNumbers, setAccountNumbers] = useContext(AccountNumbersContext);

  let content = <div />;

  if (Object.keys(accountNumbers).length !== 0) {
    content = Object.keys(accountNumbers).map((file, index) => (
      <div className="file-item" key={index}>
        <Link to={`file/${file}`} key={index} className="file-link">
          {file}
        </Link>
      </div>
    ));
  }

  return <div id="file-list">{content}</div>;
}

export default FileList;
