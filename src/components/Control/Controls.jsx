import React from "react";
import style from "./Controls.module.css";

const Controls = () => {
  return (
    <div className={style.lineButtonEnd}>
      <div className={style.boxButton}>
        <img src="./stop.png" alt="stop" width="40px" />
        <div>STOP</div>
      </div>

      <div className={style.boxButton}>
        <img src="./reset.png" alt="reset" width="40px" />
        <div>RESET</div>
      </div>
    </div>
  );
};

export default Controls;
