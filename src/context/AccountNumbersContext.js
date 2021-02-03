import React, { useState, createContext } from "react";

export const AccountNumbersContext = createContext();

export const AccountNumbersProvider = (props) => {
  const [accountNumbers, setAccountNumbers] = useState([]);

  return (
    <AccountNumbersContext.Provider
      value={{ accountNumbers, setAccountNumbers }}
    >
      {props.children}
    </AccountNumbersContext.Provider>
  );
};
