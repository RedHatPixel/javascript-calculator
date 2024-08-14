import React from "react";
import Button from "./Button";

const ButtonPanel = ({ onClick }) => (
  <div className="button-panel">
    <Button id="clear" value="AC" onClick={onClick} />
    <Button id="divide" value="/" onClick={onClick} />
    <Button id="multiply" value="*" onClick={onClick} />
    <Button id="seven" value="7" onClick={onClick} />
    <Button id="eight" value="8" onClick={onClick} />
    <Button id="nine" value="9" onClick={onClick} />
    <Button id="add" value="+" onClick={onClick} />
    <Button id="four" value="4" onClick={onClick} />
    <Button id="five" value="5" onClick={onClick} />
    <Button id="six" value="6" onClick={onClick} />
    <Button id="subtract" value="-" onClick={onClick} />
    <Button id="one" value="1" onClick={onClick} />
    <Button id="two" value="2" onClick={onClick} />
    <Button id="three" value="3" onClick={onClick} />
    <Button id="equals" value="=" onClick={onClick} />
    <Button id="zero" value="0" onClick={onClick} />
    <Button id="decimal" value="." onClick={onClick} />
  </div>
);

export default ButtonPanel;
