import React, { useState } from "react";
import "./App.css";

const btns1 = ["1", "2", "3", "+"];
const btns2 = ["4", "5", "6", "-"];
const btns3 = ["7", "8", "9", "*"];
const btns4 = [".", "0", "=", "/"];

function App() {
  const [result, setResult] = useState("");

  const handleClick = (button) => {
    console.log("button", button);
    if (button === "=") {
      calculate();
      return;
    }
    setResult(result + button);
  };

  const calculate = () => {
    try {
      // console.log("result", result);
      // console.log("eval(result)", eval(result));
      // console.log("eval(result).toString()", eval(result).toString());
      // eslint-disable-next-line
      setResult(eval(result).toString());
    } catch (error) {
      alert("Error");
    }
  };

  const handleDelete = () => {
    setResult(result.slice(0, -1));
  };

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="">
      <div className="flex justify-center">
        <input
          className="text-7xl md:text-9xl font-bold bg-slate-500 w-full md:w-[48rem] md:px-7 py-7 md:py-0 "
          type="text"
          value={result}
          onChange={handleClick}
        />
      </div>

      <div className=" flex md:flex justify-center">
        {btns1.map((btn, index) => (
          <button
            className="border border-slate-100 w-full md:w-48 h-20 bg-gray-900 text-white text-5xl"
            onClick={() => handleClick(btn)}
            key={index}
          >
            {btn}
          </button>
        ))}
      </div>
      <div className="flex justify-center">
        {btns2.map((btn, index) => (
          <button
            className="border border-slate-100 w-full md:w-48 h-20 bg-gray-900 text-white text-5xl"
            onClick={() => handleClick(btn)}
            key={index}
          >
            {btn}
          </button>
        ))}
      </div>
      <div className="flex justify-center">
        {btns3.map((btn, index) => (
          <button
            className="border border-slate-100 w-full md:w-48 h-20 bg-gray-900 text-white text-5xl"
            onClick={() => handleClick(btn)}
            key={index}
          >
            {btn === "*" ? "x" : btn}
          </button>
        ))}
      </div>
      <div className="flex justify-center">
        {btns4.map((btn, index) => (
          <button
            className="border border-slate-100 w-full md:w-48 h-20 bg-gray-900 text-white text-5xl"
            onClick={() => handleClick(btn)}
            key={index}
          >
            {btn === "/" ? "÷" : btn}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-4 md:flex justify-center">
        <button className="border border-slate-100 w-full md:w-48 h-20 bg-gray-900 text-white text-5xl"></button>
        <button
          className="border border-slate-100 w-full md:w-48 h-20 bg-gray-900 text-white text-5xl"
          onClick={handleDelete}
        >
          Del
        </button>
        <button
          className="col-span-2 border border-slate-100 w-full md:w-48 h-20 bg-gray-900 text-white text-5xl"
          onClick={handleReload}
        >
          Reload
        </button>
        <button className="hidden md:block border border-slate-100 w-full md:w-48 h-20 bg-gray-900 text-white text-5xl"></button>
      </div>
    </div>
  );
}

export default App;
