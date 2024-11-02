import React from "react";
import style from "./Timer.module.css";

const Timer = ({ minutes, seconds }) => {
  return (
    <div className={style.lineReloj}>
      <div className={style.circle}>
        <img src="./pomodoro.png" alt="pomodoro" width="150px" />
        <div className={style.boxDigitalReloj}>
          {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
        </div>
      </div>
    </div>
  );
};

export default Timer;
