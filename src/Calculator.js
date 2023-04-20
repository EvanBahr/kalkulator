import React, { useState } from "react";

export default function Calculator() {
  const handleClick = (v) => {
    if (v === "=") {
      calculate();
    } else if (v === "DEl") {
      setResult(result.slice(0, -1));
    } else if (v === "clear") {
      setResult("");
    } else {
      setResult(result + v);
    }
  };
  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      alert("di luar nalar cuy :v ");
    }
  };
  const btn = [
    "DEl",
    "clear",
    "+",
    "-",
    7,
    8,
    9,
    "*",
    4,
    5,
    6,
    "/",
    1,
    2,
    3,
    "=",
    0,
    ".",
  ];
  const [result, setResult] = useState("");
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-blue-500   w-64 p-3 space-y-4">
        <div className="h-14 bg-slate-200 rounded-md justify-end flex items-center px-2">
          {result}
        </div>
        <div className=" gap-1 grid grid-cols-4 ">
          {btn.map((v, i) => (
            <button
              className={` ${v === "DEl" ? "bg-red-500" : ""} ${
                v === "=" ? "bg-green-600" : ""
              } bg-emerald-300 h-14 w-14 hover:bg-emerald-400  "`}
              onClick={() => {
                handleClick(v);
              }}
            >
              {v}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
