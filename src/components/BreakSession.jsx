import React from "react";

const BreakSession = ({ type, time }) => {
  return (
    <div className={type}>
      <div className="box">
        <img
          src="./negative.png"
          alt="negative"
          className="image"
          width="20px"
        />
      </div>
      <div className="box digital">{time}</div>
      <div className="box">
        <img
          src="./positive.png"
          alt="positive"
          className="image"
          width="20px"
        />
      </div>
    </div>
  );
};

export default BreakSession;
