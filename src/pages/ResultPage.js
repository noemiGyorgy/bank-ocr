import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AccountNumbersContext } from "../context/AccountNumbersContext";

function ResultPage() {
  const { fileName } = useParams();
  const [accountNumbers, setAccountNumbers] = useContext(AccountNumbersContext);

  let content = (
    <React.Fragment>
      <h2>
        No account number was found in <span className="blue">{fileName}</span>
      </h2>
    </React.Fragment>
  );

  if (accountNumbers[fileName] !== undefined) {
    content = (
      <React.Fragment>
        <div className="filename">FILENAME: {fileName}</div>

        <table>
          <thead>
            <tr>
              <th>Account</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {accountNumbers[fileName].map((a, index) => (
              <tr key={index}>
                <td>{a.account}</td>
                <td>{a.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }

  return <React.Fragment>{content}</React.Fragment>;
}

export default ResultPage;
