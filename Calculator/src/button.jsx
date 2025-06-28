import { useState } from "react";

const Buttons = ({setDisplayVal}) => {
  const button = [
    "C",
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    "*",
    "/",
    "0",
    "="
  ];

  return (
    <>
      <div className="buttons">
        {button.map((button, index) => (
          <button key={index} onClick={()=>setDisplayVal(button)}>
            {button}
          </button>
        ))}
      </div>
    </>
  );
};

export default Buttons;
