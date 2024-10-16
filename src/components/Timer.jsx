import React from "react";

const Timer = ({ time }) => {
  return (
    <div className="lineReloj">
      <div className="circle">
        <img
          src="./pomodoro.png"
          alt="pomodoro"
          className="imagePomodoro"
          width="180px"
        />
        <div className="boxDigitalReloj">{time}</div>
      </div>
    </div>
  );
};

export default Timer;
