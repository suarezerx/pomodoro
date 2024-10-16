import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="title">Pomodoro Tiner</div>
      <div className="painting">
        <div className="lineButtonTop">
          <div className="breack">
            <div className="box">
              <img
                src="./negative.png"
                alt="positive"
                className="image"
                width="20px"
              />
            </div>
            <div className="box digital">05</div>
            <div className="box">
              <img
                src="./positive.png"
                alt="positive"
                className="image"
                width="20px"
              />
            </div>
          </div>
          <div className="session">
            <div className="box">
              <img
                src="./negative.png"
                alt="positive"
                className="image"
                width="20px"
              />
            </div>
            <div className="box digital">25</div>
            <div className="box">
              <img
                src="./positive.png"
                alt="positive"
                className="image"
                width="20px"
              />
            </div>
          </div>
        </div>
        <div className="lineReloj">
          <div className="circle">
            <img
              src="./pomodoro.png"
              alt="positive"
              className="imagePomodoro"
              width="180px"
            />
            <div className="boxDigitalReloj">19:00</div>
          </div>
        </div>
        <div className="lineButtonEnd">
          <div className="boxButton">
            <img
              src="./stop.png"
              alt="positive"
              className="image"
              width="40px"
            />
            <div>STOP</div>
          </div>

          <div className="boxButton">
            <img
              src="./reset.png"
              alt="positive"
              className="image"
              width="40px"
            />
            <div>RESET</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
