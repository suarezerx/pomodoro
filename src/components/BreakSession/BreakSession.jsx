import style from "./BreakSession.module.css";
import React from "react";

const BreakSession = ({ time }) => {
  const handleClick = () => {
    console.log("click");
    alert("click");
  };

  return (
    <>
      <div className={style.lineButton}>
        <div className={style.box} onClick={handleClick}>
          <img
            src="./negative.png"
            alt="negative"
            className="image"
            width="20px"
            height="10px"
          />
        </div>
        <div className={style.digital}>{time}</div>
        <div className={style.box}>
          <img
            src="./positive.png"
            alt="positive"
            className="image"
            width="20px"
          />
        </div>
      </div>
    </>
  );
};

export default BreakSession;
