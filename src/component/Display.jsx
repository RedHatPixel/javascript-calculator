import React from "react";

const Display = ({ input, expression }) => (
  <div className="output">
    <div id="expression">{expression}</div>
    <div id="display">{input}</div>
  </div>
);

export default Display;
