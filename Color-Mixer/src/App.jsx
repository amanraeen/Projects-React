import { useState } from "react";
import "./App.css";

function App() {
  const [r, setR] = useState(0);
  const [g, setG] = useState(255);
  const [b, setB] = useState(255);

  return (
    <div className="main-div">
      <h1>Color Mixer</h1>
      <div className="box">
        <div
          className="color-box"
          style={{ backgroundColor: "rgb(" + r + "," + g + ",+" + b + ")" }}
        ></div>

        <div className="content">
          <label htmlFor="">Red</label>
          <input
            type="range"
            min={0}
            max={255}
            value={r}
            onChange={(e) => setR(e.target.value)}
          />
          <br />
          <br />

          <label htmlFor="">Green</label>
          <input
            type="range"
            min={0}
            max={255}
            value={g}
            onChange={(e) => setG(e.target.value)}
          />
          <br />
          <br />

          <label htmlFor="">Blue</label>
          <input
            type="range"
            min={0}
            max={255}
            value={b}
            onChange={(e) => setB(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
