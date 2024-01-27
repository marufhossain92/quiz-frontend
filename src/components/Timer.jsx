import { useState, useEffect } from "react";

const Timer = ({ totalTime, onTimeUp }) => {
  const [seconds, setSeconds] = useState(totalTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    if (seconds === 0) {
      clearInterval(interval);
      onTimeUp();
    }

    return () => clearInterval(interval);
  }, [seconds, onTimeUp]);

  return <div>{seconds} seconds remaining</div>;
};

export default Timer;
