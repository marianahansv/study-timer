import React, { useState, useEffect } from 'react';

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
    const readyToStudy = false;

    useEffect(() => {
      if (time === 0) {
        // play sound
        // show notification
        // reset timer
      }
      const timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000); // decrement time every second
      
      return () => clearInterval(timer); // cleanup timer to avoid memory leak aka remove prev timer before starting new one
    }, [time]);

    return (
      <div>
        <h2>Set your study time!</h2>
        <>
          <p>{formatTime(time)}</p>

          <button>Start</button>
          <button>Pause</button>
          <button>Reset</button>
        </>
      </div>
    );
  }
  
export default Timer;