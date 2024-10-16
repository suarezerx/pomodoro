import React from "react";

const Controls = () => {
  return (
    <div className="lineButtonEnd">
      <div className="boxButton">
        <img src="./stop.png" alt="stop" className="image" width="40px" />
        <div>STOP</div>
      </div>

      <div className="boxButton">
        <img src="./reset.png" alt="reset" className="image" width="40px" />
        <div>RESET</div>
      </div>
    </div>
  );
};

export default Controls;
