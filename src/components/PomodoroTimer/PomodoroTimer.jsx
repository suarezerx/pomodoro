import React, { useEffect, useState } from "react";
import BreakSession from "../BreakSession/BreakSession";
import Timer from "../Timer/Timer";
import Controls from "../Control/Controls";
import style from "./PomodoroTimer.module.css";
import soundBells from "../../sounds/bells.mp3";

const PomodoroTimer = () => {
  const [minutesWork, setMinutesWork] = useState(25);
  const [isRunningWork, setIsRunningWork] = useState(false);
  const [minutesBreack, setMinutesBreack] = useState(5);

  const [minutes, setMinutes] = useState(minutesWork);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const playSound = new Audio(soundBells);

  const handleClickWorkAdd = () => {
    setMinutesWork(minutesWork + 1);
    setMinutes(minutesWork + 1);
  };

  const handleClickWork = () => {
    setMinutesWork(minutesWork > 0 ? minutesWork - 1 : 0);
    setMinutes(minutesWork > 0 ? minutesWork - 1 : 0);
  };

  const handleClickBreackAdd = () => {
    setMinutesBreack(minutesBreack + 1);
  };

  const handleClickBreack = () => {
    setMinutesBreack(minutesBreack > 0 ? minutesBreack - 1 : 0);
  };

  const handleClickStarStop = () => {
    if (minutes > 0) {
      playSound.play();
      setIsRunningWork(true);
      if (isRunning) {
        setIsRunning(false);
      } else {
        setIsRunning(true);
      }
    }
  };

  const handleClickReset = () => {
    setMinutes(minutesWork);
    setSeconds(0);
    setIsRunning(false);
  };

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          playSound.play();
          clearInterval(timer);
          if (isRunningWork) {
            setIsRunningWork(false);
            setMinutes(minutesBreack);
          } else {
            setIsRunningWork(true);
            setMinutes(minutesWork);
          }
        }
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [minutes, seconds, isRunning]);

  return (
    <>
      <div className={style.title}>Pomodoro Timer</div>
      <div className={style.painting}>
        <div className={style.lineButtonTop}>
          <BreakSession
            time={minutesBreack}
            onClickAdd={handleClickBreackAdd}
            onClickSubTraction={handleClickBreack}
          />
          <BreakSession
            time={minutesWork}
            onClickAdd={handleClickWorkAdd}
            onClickSubTraction={handleClickWork}
          />
        </div>
        <Timer minutes={minutes} seconds={seconds} />
        <Controls
          isRunning={isRunning}
          onClickStarStop={handleClickStarStop}
          onClickReset={handleClickReset}
        />
      </div>
    </>
  );
};

export default PomodoroTimer;
