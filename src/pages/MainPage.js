import React, { useState, useEffect } from "react";
import getFileContent from "../service/getFileContent";

function MainPage() {
  return (
    <div>
      <h3>Upload your file here</h3>
      <input type="file" onChange={(e) => getFileContent(e)} />
    </div>
  );
}

export default MainPage;
