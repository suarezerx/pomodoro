import React from "react";
import style from "./Timer.module.css";

const Timer = ({ time }) => {
  return (
    <div className={style.lineReloj}>
      <div className={style.circle}>
        <img src="./pomodoro.png" alt="pomodoro" width="150px" />
        <div className={style.boxDigitalReloj}>{time}</div>
      </div>
    </div>
  );
};

export default Timer;
