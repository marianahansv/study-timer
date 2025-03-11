import React, { useState, useEffect } from 'react';
import './../App.css'
// format time to display as HH:MM:SS
// Note: time is in seconds
const formatTime = (time) => { 
  const hrs = Math.floor(time / 3600).toString().padStart(2, '0');
  const mins = Math.floor((time % 3600)/60).toString().padStart(2, '0');
  const secs = (time % 60).toString().padStart(2, '0');
  return `${hrs}:${mins}:${secs}`;
};

function Timer() {
    const [time, setTime] = useState(25*60); // 25 minutes in seconds
    const [isPaused, setIsPaused] = useState(true);

    useEffect(() => {
      let timer;
      if (time === 0) {
        // play bell sound 
        return;
      }
      if (!isPaused){
        timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
        }, 1000); // decrement time every second
      }
      return () => clearInterval(timer); // cleanup timer to avoid memory leak aka remove prev timer before starting new one
    }, [isPaused, time]); //changes every time time or isPaused changes

    //handlers for button actions
    const handleStartandPause = () => {setIsPaused(!isPaused);};
    const handleReset = () => {setTime(25*60); setIsPaused(true);};
    const handleIncrease = () => {setTime(time + 5*60);}; //add 5 minutes every increase
    const handleDecrease = () => {time - (5*60) >= 0 ? setTime(time - 5*60) : setTime(0);}; //subtract 5 minutes every decrease
    
    //my visuals
    return (
      <div>
        <h2>set your time!</h2>
          <div className='timer-container'>
          <h1 className='timer-display'>{formatTime(time)}</h1>
          <div className='timer-controls'>
            {isPaused ? <button className='control-button' onClick={handleIncrease}>+</button> : null}
            {isPaused ? <button className='control-button' onClick={handleDecrease}>-</button>: null}
            </div>
          </div>

          <div className='timer-buttons'>
          <button onClick={handleStartandPause}>
              {isPaused ? "start": "stop"}</button>
              <button onClick={handleReset}>reset</button>
          </div>
      </div>
    );
  }

export default Timer;