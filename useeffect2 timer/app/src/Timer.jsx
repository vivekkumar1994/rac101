import React from "react";
import { useStopwatch } from "react-timer-hook";

 function Timer() {
  const stopwatchOffset = new Date();
  stopwatchOffset.setSeconds(stopwatchOffset.getSeconds() + 300);
  const {
    seconds,
    minutes,
    hours,
    isRunning,
    start,
    pause,
    reset
  } = useStopwatch({ autoStart: true, offsetTimestamp: stopwatchOffset });
  const hourTime = hours < 10 ? `0${hours}` : `${hours}`;
  const secondTime = seconds < 10 ? `0${seconds}` : `${seconds}`;
  const minuteTime = minutes < 10 ? `0${minutes}` : `${minutes}`;
  return (
    <div style={{ textAlign: "center" }}>
      <h1>react-timer-hook</h1>
      <p>Stopwatch Demo</p>
      <div style={{ fontSize: "100px" }}>
        <span>{hourTime}</span>:<span>{minuteTime}</span>:
        <span>{secondTime}</span>
      </div>
      <p>{isRunning ? "Running" : "Not running"}</p>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
export default Timer