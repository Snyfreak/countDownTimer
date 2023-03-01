import { useEffect, useState } from "react";
import Timer from "./Timer";
export const CountDown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(null);

  useEffect(() => {
    // setDays(window.localStorage.getItem("days"));
    // setHours(window.localStorage.getItem("hours"));
    // setMinutes(window.localStorage.getItem("minutes"));
    // setSeconds(window.localStorage.getItem("seconds"));

    console.log("code start");
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds((seconds) => seconds - 1);
        } else if (minutes > 0) {
          setMinutes((minutes) => minutes - 1);
          setSeconds(59);
        } else if (hours > 0) {
          setHours((hours) => hours - 1);
          setMinutes(59);
          setSeconds(59);
        } else if (days > 0) {
          setDays((days) => days - 1);
          setHours(23);
          setMinutes(59);
          setSeconds(59);
        }
      }, 1000);
    }

    return () => {
      console.log("page is refreshed");
      window.localStorage.setItem("days", days);
      window.localStorage.setItem("hours", hours);
      window.localStorage.setItem("minutes", minutes);
      window.localStorage.setItem("seconds", seconds);
      clearInterval(interval);
    };
  }, [seconds, minutes, hours, days, isActive]);
  return (
    <>
      <Timer
        seconds={seconds}
        minutes={minutes}
        hours={hours}
        days={days}
        isActive={isActive}
        setIsActive={setIsActive}
        setDays={setDays}
        setHours={setHours}
        setMinutes={setMinutes}
        setSeconds={setSeconds}
      />
    </>
  );
};
