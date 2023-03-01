import React, { useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import HistoryToggleOffRoundedIcon from "@mui/icons-material/HistoryToggleOffRounded";

const Timer = ({
  seconds,
  minutes,
  hours,
  days,
  isActive,
  setIsActive,
  setSeconds,
  setDays,
  setHours,
  setMinutes,
  disabled,
  setDisabled,
}) => {
  const [dropDown, setDropDown] = useState(false);
  return (
    <div className="main-container">
      <div className="wrapper">
        <div className="wrapper-header">
          <div className="left-header">
            <HistoryToggleOffRoundedIcon style={{ fontSize: "60px" }} />
            <h2>Countdown Timer</h2>
          </div>
          <span>STAGE 1</span>
        </div>

        <div className="timer">
          <div className="input">
            <div className="time-input2">
              <input
                disabled={disabled}
                value={days}
                onChange={(e) => {
                  setDays(e.target.value);
                }}
              />
              <span> : </span>
            </div>
            <label>D</label>
          </div>

          <div className="input">
            <div className="time-input2">
              <input
                disabled={disabled}
                value={hours}
                onChange={(e) => {
                  setHours(e.target.value);
                }}
              />
              <span> : </span>
            </div>
            <label>H</label>
          </div>

          <div className="input">
            <div className="time-input2">
              <input
                disabled={disabled}
                value={minutes}
                onChange={(e) => {
                  setMinutes(e.target.value);
                }}
              />
              <span> : </span>
            </div>
            <label>M</label>
          </div>

          <div className="input">
            <div className="time-input2">
              <input
                disabled={disabled}
                value={seconds}
                onChange={(e) => {
                  setSeconds(e.target.value);
                }}
              />
            </div>
            <label>S</label>
          </div>
          <div className="setting-icon">
            <SettingsIcon
              className="img"
              style={{ fontSize: "80px", color: "grey" }}
              onClick={() => {
                setDropDown((prev) => !prev);
              }}
            />

            {dropDown && (
              <div className="menu">
                <ul>
                  <li
                    onClick={() => {
                      if (
                        (days !== 0 ||
                          hours !== 0 ||
                          minutes !== 0 ||
                          seconds !== 0) &&
                        hours < 24 &&
                        minutes < 60 &&
                        seconds < 60
                      ) {
                        setIsActive(true);

                        setDisabled((disabled) => !disabled);
                      } else {
                        window.alert("add valid time");
                      }
                    }}
                  >
                    Start
                  </li>
                  <li
                    onClick={() => {
                      if (
                        days !== 0 ||
                        hours !== 0 ||
                        minutes !== 0 ||
                        seconds !== 0
                      ) {
                        setIsActive(false);
                      } else {
                        window.alert("add input");
                      }
                    }}
                  >
                    pause
                  </li>
                  <li
                    onClick={() => {
                      setIsActive(true);
                    }}
                  >
                    Resume
                  </li>
                  <li
                    onClick={() => {
                      setDisabled(false);
                      setIsActive(false);
                      setIsActive(0);
                      setSeconds(0);
                      setDays(0);
                      setHours(0);
                      setMinutes(0);
                    }}
                  >
                    Stop
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .main-container {
          display: flex;
          justify-content: center;
          align-items: center;

          height: 100vh;
          background-color: black;
        }
        .wrapper {
          background-color: white;
          width: 100%;
          position: relative;
          height: 400px;
          padding-bottom: 30px;
        }
        .wrapper-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 40px;
        }

        .left-header {
          display: flex;
          //background-color: green;
          margin-left: 70px;
          padding: 10px 40px;
          width: 35%;
          align-items: center;
          justify-content: space-between;
        }
        .left-header h2 {
          font-size: 40px;
        }

        .wrapper-header span {
          margin: 10px;
          // backgroung-color: green;
          padding: 10px 30px 10px 30px;
          background-color: green;
          border-radius: 5px;
          color: white;

          font-size: 40px;
        }

        .timer {
          height: 200px;
          width: 360px;
          // background-color: green;
          display: flex;
          justify-content: center;

          width: 100%;
        }
        .input {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 10px;
        }

        .time-input2 {
          font-size: 30px;
          display: flex;
          align-items: center;
        }
        input {
          width: 140px;
          height: 100px;
          text-align: center;
          font-size: 80px;
          font-weight: bold;
          border-style: hidden;
          border-radius: 10px;
        }
        span {
          font-size: 50px;
          font-weight: bold;
          padding-bottom: 10px;
        }
        label {
          font-size: 40px;
          background-color: #efebeb;
          padding: 20px;
          margin-top: 10px;
          color: grey;
          border-radius: 10px;
        }
        .img:hover {
          cursor: pointer;
        }
        // .img {
        //   //position: absolute;
        //   right: 90px;
        //   bottom: 20px;
        // }
        .menu li {
          list-style: none;
        }
        li:hover {
          cursor: pointer;
        }

        .menu {
          position: absolute;
          color: white;
          // border: 0.5px solid white;
          //background-color: grey;
          left: -80px;
        }

        .setting-icon {
          position: absolute;
          bottom: 10px;
          right: 90px;
        }
      `}</style>
    </div>
  );
};

export default Timer;
