import React, { useEffect } from "react";

const Button = ({ id, value, onClick }) => (
  <button id={id} onClick={() => onClick(value)} className="button">
    {value}
  </button>
);

export default Button;
