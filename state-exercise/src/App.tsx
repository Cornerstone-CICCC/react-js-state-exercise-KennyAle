import { useState } from "react";
import "./App.css";
import LightToggle from "./components/LightToggle";
import LottoNumbers from "./components/LottoNumbers";
import ClickCounter from "./components/ClickCounter";

function App() {
  const [isLightOn, setIsLightOn] = useState<boolean>(false);
  const [numbers, setNumbers] = useState<number[]>([]);
  const [counter, setCounter] = useState<number>(0);

  const handleLightChange = () => {
    setIsLightOn(!isLightOn);
  };

  const handleAddCounter = () => {
    setCounter(counter + 1);
  };

  const handleLottoNumbers = () => {
    const newNumbers = [];
    for (let i = 0; i < 7; i++) {
      newNumbers.push(Math.floor(Math.random() * 49) + 1);
    }
    setNumbers(newNumbers);
  };
  return (
    <div>
      <h2>Light Toggle</h2>
      <LightToggle onClick={handleLightChange} />
      <div
        style={{
          backgroundColor: isLightOn ? "white" : "black",
          color: isLightOn ? "black" : "white",
        }}
      >
        Change this background color using the style attribute
      </div>
      <h2>Lotto Numbers</h2>
      <LottoNumbers onClick={handleLottoNumbers} />
      <div className="output">
        {numbers.map((n, i) => (
          <span key={i}>{n} </span>
        ))}
      </div>

      <h2>Click Counter</h2>
      <ClickCounter onClick={handleAddCounter} />
      <div className="output">{counter}</div>
    </div>
  );
}

export default App;
