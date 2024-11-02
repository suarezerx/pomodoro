import style from "./BreakSession.module.css";
import React from "react";

const BreakSession = ({ time, onClickAdd, onClickSubTraction }) => {
  return (
    <>
      <div className={style.lineButton}>
        <button onClick={onClickSubTraction}>-</button>

        {/*<div className={style.box} onClick={handleClick}>
          <img
            src="./negative.png"
            alt="negative"
            className="image"
            width="20px"
            height="10px"
          />
        </div>*/}

        <div className={style.digital}>{String(time).padStart(2, "0")}</div>

        <button onClick={onClickAdd}>+</button>
        {/*<div className={style.box}>
          <img
            src="./positive.png"
            alt="positive"
            className="image"
            width="20px"
          />
        </div>*/}
      </div>
    </>
  );
};

export default BreakSession;
