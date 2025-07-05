import { useEffect, useState } from "react";

function App() {
  const [color, setColor] = useState("#fff");
  const [colorType, setColorType] = useState("HEX");

  function randomColorGenerator(length) {
    return Math.floor(Math.random() * length);
  }

  function hexColorGenerate() {
    const code = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += code[randomColorGenerator(code.length)];
    }
    setColor(hexColor);
  }

  function rgbColorGenerate() {
    const r = randomColorGenerator(256);
    const g = randomColorGenerator(256);
    const b = randomColorGenerator(256);

    setColor(`RGB(${r}, ${g}, ${b})`);
  }

  useEffect(() => {
    if (colorType === "HEX") hexColorGenerate();
    else rgbColorGenerate();
  }, [colorType]);

  return (
    <>
      <div className="container">
        <h1>Random Color Generator</h1>
        <div className="screen" style={{ backgroundColor: color }}>
          <h1>{colorType} Color Code</h1>
          <h1>{color}</h1>
        </div>
        <div className="button-div">
          <button onClick={() => setColorType("HEX")}>Hex Color</button>
          <button onClick={() => setColorType("RGB")}>RGB Color</button>
          <button
            onClick={
              colorType === "HEX"
                ? () => hexColorGenerate()
                : () => rgbColorGenerate()
            }
          >
            Generate Random Color
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
