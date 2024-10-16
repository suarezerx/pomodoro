import React from "react";
import BreakSession from "./BreakSession";
import Timer from "./Timer";
import Controls from "./Controls";

const PomodoroTimer = () => {
  return (
    <>
      <div className="title">Pomodoro Timer</div>
      <div className="painting">
        <div className="lineButtonTop">
          <BreakSession type="break" time="05" />
          <BreakSession type="session" time="25" />
        </div>
        <Timer time="19:00" />
        <Controls />
      </div>
    </>
  );
};

export default PomodoroTimer;
