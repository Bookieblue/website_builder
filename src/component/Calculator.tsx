import React from "react";
import { useState } from "react";
import { calculator_buttons } from "../constants";
import { create, all } from "mathjs";

const math = create(all);

const Calculator = () => {
  const [operand, setOperand] = useState<string>("0");
  const [result, setResult] = useState<string>("");
  const [isResultDisplayed, setIsResultDisplayed] = useState<boolean>(false);
  //function to show and append  the correct values on the screen
  const showValue = (value: string) => {
    setOperand((prev) => {
      if (prev === "Invalid Operation" || isResultDisplayed) {
        setIsResultDisplayed(false);
        return value;
      }
      return prev === "0" ? value : prev + value;
    });
  };
  //function to clear all the values on the screen
  const clearAll = () => {
    setOperand("0");
    setResult("");
    setIsResultDisplayed(false);
  };
  //function to delete the last value on the screen
  const deleteLast = () => {
    setOperand((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"));
  };
  //function to calculate the result on the screen
  const Result = () => {
    try {
      let expression = operand
        .replace("pi", "pi")
        .replace(/sqrt\(/g, "sqrt(")
        .replace(/(\d+)\^2/g, (_, n) => `(${n}^2)`)
        .replace(/(\d+)!/g, (_, n) => factorial(parseInt(n)).toString());

      // To close the open parentheses for square root function

      let openParenthesesCount = (expression.match(/sqrt\(/g) || []).length;
      let closeParenthesesCount = (expression.match(/\)/g) || []).length;

      while (openParenthesesCount > closeParenthesesCount) {
        expression += ")";
        closeParenthesesCount++;
      }
      const calcResult = math.evaluate(expression);
      setResult(calcResult.toString());
      setIsResultDisplayed(true);
    } catch (e) {
      setOperand("Invalid Operation");
      setResult("0");
    }
  };

  // const Result = () => {
  //   try {
  //     let expression = operand
  //       .replace("^2", "**2")
  //       .replace("pi", "Math.PI")
  //       .replace(/sqrt\(/g, "Math.sqrt(")
  //       .replace(/(\d+)!/g, (_, n) => factorial(parseInt(n)).toString());
  //     // To close the open parentheses for square root function
  //     let openParenthesesCount = (expression.match(/Math.sqrt\(/g) || [])
  //       .length;
  //     let closeParenthesesCount = (expression.match(/\)/g) || []).length;
  //     while (openParenthesesCount > closeParenthesesCount) {
  //       expression += ")";
  //       closeParenthesesCount++;
  //     }

  //     const calcResult = math.evaluate(expression);
  //     setResult(calcResult.toString());
  //     setIsResultDisplayed(true);
  //   } catch (e) {
  //     setOperand("Invalid Operation");
  //     setResult("0");
  //   }
  // };
  //function to calculate the factorial on the screen
  const factorial = (n: number): number => {
    if (n < 0) return NaN;
    if (n === 0) return 1;
    return n * factorial(n - 1);
  };
  //function to calculate the percentage of number
  const calculatePercentage = () => {
    try {
      const value = parseFloat(operand);
      if (!isNaN(value)) {
        setResult((value / 100).toString());
        setIsResultDisplayed(true);
      } else {
        setOperand("Invalid Operation");
        setResult("0");
      }
    } catch (e) {
      setOperand("Invalid Operation");
      setResult("0");
    }
  };
  //function to calculate the result on the screen
  const handleButtonClick = (button: any) => {
    if (button.action) {
      if (button.action === "clearAll") clearAll();
      else if (button.action === "deleteLast") deleteLast();
      else if (button.action === "calculateResult") Result();
      else if (button.action === "calculatePercentage") calculatePercentage();
    } else {
      showValue(button.value || button.label);
    }
  };
  return (
    <div className="bg-white h-fit p-4 max-w-xs mx-auto rounded-lg w-full lg:w-1/2 shadow-lg overflow-hidden mb-10 lg:mb-0">
      {/* display box*/}
      <div className="bg-[#f8f5f3] text-white text-right text-2xl pr-1 h-[70px] shadow-inner">
        <p id="operand" className="text-[#353fa9] font-semibold">
          {operand}
        </p>
        <p id="result" className="text-gray-500">
          {result && `=${result}`}
        </p>
      </div>
      {/* buttons */}
      <div className="grid grid-cols-4 gap-2 pt-4">
        {calculator_buttons.map((button, index) => (
          <button
            key={index}
            className={`${
              button.type === "numbers"
                ? "bg-[#f8f5f3] hover:bg-white text-black py-2 px-4 rounded"
                : button.type === "operation"
                ? "bg-blue-700 hover:bg-blue-700 text-white py-2 px-4 rounded"
                : button.type === "delete_last"
                ? "bg-green-500 hover:bg-green-500 text-white  py-2 px-4 rounded"
                : "bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
            } ${
              button.label === "0" ? "col-span-2" : ""
            } transform transition-transform duration-200 ease-in-out active:scale-95`}
            onClick={() => handleButtonClick(button)}
          >
            {button.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
