import React from "react";
import BreakSession from "../BreakSession/BreakSession";
import Timer from "../Timer/Timer";
import Controls from "../Control/Controls";
import style from "./PomodoroTimer.module.css";

const PomodoroTimer = () => {
  return (
    <>
      <div className={style.title}>Pomodoro Timer</div>
      <div className={style.painting}>
        <div className={style.lineButtonTop}>
          <BreakSession time="05" />
          <BreakSession time="25" />
        </div>
        <Timer time="19:00" />
        <Controls />
      </div>
    </>
  );
};

export default PomodoroTimer;
