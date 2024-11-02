import React from "react";
import style from "./Controls.module.css";

const Controls = ({ isRunning, onClickStarStop, onClickReset }) => {
  return (
    <div className={style.lineButtonEnd}>
      {/*<div className={style.boxButton}>
        <img src="./stop.png" alt="stop" width="40px" />
        <div>STOP</div>
      </div>*/}
      <button className={style.boxButton} onClick={onClickStarStop}>
        <img
          src={isRunning ? "./stop.png" : "./star.png"}
          alt="stop"
          width="40px"
        />
        <div>{isRunning ? "STOP" : "STAR"}</div>
      </button>

      <button className={style.boxButton} onClick={onClickReset}>
        <img src="./reset.png" alt="reset" width="40px" />
        <div>RESET</div>
      </button>
    </div>
  );
};

export default Controls;
