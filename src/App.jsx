import React, { useEffect, useState } from "react";
import Display from "./component/Display";
import ButtonPanel from "./component/ButtonPanel";

const regex = /[^0-9\s]/;
const digit = /\d/;

const App = () => {
  const [input, setInput] = useState("0");
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    if (input === "NaN") {
      setInput(value);
      setExpression(value);
      setResult("");
    } else if (value === "AC") {
      setInput("0");
      setExpression("");
      setResult("");
    } else if (value === "=") {
      if (!regex.test(expression)) {
        return;
      }
      if (expression.split("").includes("=")) {
        setExpression(expression.split("=")[1]);
      } else {
        try {
          if (
            ["+", "-", "*", "/"].includes(
              expression.charAt(expression.split("").length - 1)
            )
          ) {
            setExpression((prev) => prev.slice(0, -1));
            setInput(expression);
          } else {
            const evalResult = eval(expression);
            setInput(evalResult.toString());
            setExpression((prev) => prev + " = " + evalResult.toString());
            setResult(evalResult.toString());
          }
        } catch (e) {
          setInput("Error");
          setExpression("");
          setResult("");
        }
      }
    } else if (value === ".") {
      if (!input.includes(".")) {
        setInput((prev) => prev + value);
        setExpression((prev) => prev + value);
      }
    } else if (["+", "-", "*", "/"].includes(value)) {
      if (expression.split("").includes("=")) {
        setExpression(expression.split("=")[1]);
      }

      if (expression.charAt(expression.length - 2) === value) {
        setExpression((prev) => prev.slice(0, -1));
      }
      if (
        ["*", "/"].includes(expression.charAt(expression.length - 1)) &&
        ["*", "/"].includes(value)
      ) {
        setExpression((prev) => prev.slice(0, -1) + value);
      } else if (
        ["+", "-"].includes(expression.charAt(expression.length - 1)) &&
        ["*", "/"].includes(value)
      ) {
        setExpression((prev) => prev.slice(0, -1) + value);
      } else if (
        !digit.test(
          expression.charAt(expression.length - 1) +
            expression.charAt(expression.length - 2)
        )
      ) {
        setExpression((prev) => prev.slice(0, -2) + value);
      } else if (
        ["+", "-"].includes(expression.charAt(expression.length - 1)) &&
        ["+", "-"].includes(value)
      ) {
        setExpression((prev) => prev.slice(0, -1) + value);
      } else {
        setExpression((prev) => prev + value);
      }

      setInput(value);
    } else {
      // Handle number input
      if (input === "0" || ["+", "-", "*", "/"].includes(input)) {
        setInput(value);
        if (input === "0") setExpression("");
      } else {
        setInput((prev) => prev + value);
      }
      if (expression.includes("=")) {
        setExpression(expression.split("=")[1] + value);
      } else {
        setExpression((prev) => prev + value);
      }
    }
  };

  return (
    <div className="Calculator">
      <Display input={input} expression={expression} />
      <ButtonPanel onClick={handleButtonClick} />
    </div>
  );
};

export default App;
