import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import './../App.css';
const done_sound = new Audio('sounds/done.ogg');

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
        done_sound.volume = 0.5; 
        done_sound.addEventListener('done', () => {
          setTime(25*60);;
        });
        done_sound.play();        
        setIsPaused(true);
        return;
      }
      if (!isPaused){
        timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
        }, 1000); // decrement time every second
      }
      return () => clearInterval(timer); // cleanup timer to avoid memory leak aka remove prev timer before starting new one
    }, [isPaused, time]); // changes every time time or isPaused changes

    // handlers for button actions
    const handleStartandPause = () => {setIsPaused(!isPaused);};
    const handleReset = () => {setTime(25*60); setIsPaused(true);};
    const handleIncrease = () => {setTime(time + 5*60);}; // add 5 minutes every increase
    const handleDecrease = () => {time - (5*60) >= 0 ? setTime(time - 5*60) : setTime(0);}; // subtract 5 minutes every decrease
    
    // my visuals
    return (
      <Box 
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "50vh",
          gap: 3
        }}
      >
        {/* Timer Display */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, backgroundColor: "white", padding: "30px", borderRadius: "20px", marginTop: "150px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
          <Typography variant="h2" sx={{ fontWeight: "bold", fontSize: "11rem", color: "#ff85a2" }}>
            {formatTime(time)}
          </Typography>
          {/* Timer Buttons + and - */}
          <Box sx={{ display: "flex", flexDirection:"column", gap: 1 }}>
            {isPaused && (
              <Button variant="contained" onClick={handleIncrease} sx={{ fontSize: "2rem", backgroundColor: "#ff85a2", borderRadius: "50px" }}>➕</Button>
            )}
            {isPaused && (
              <Button variant="contained" onClick={handleDecrease} sx={{ fontSize: "2rem", backgroundColor: "#ff85a2", borderRadius: "50px" }}>➖</Button>
            )}
          </Box>
        </Box>

        {/* Timer Controls */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button variant="contained" onClick={handleStartandPause} sx={{ textTransform:"none", fontSize: "2rem", backgroundColor: "#ff85a2", borderRadius: "20px", color:"#6d4fe3" }}>
            {isPaused ? "▶" : "❚❚"}
          </Button>
          <Button variant="contained" onClick={handleReset} sx={{ textTransform:"none", fontSize: "2rem",backgroundColor: "#ff85a2" ,borderColor: "#ff85a2", borderRadius: "20px",color:"#6d4fe3" }}>
           ↺
          </Button>
        </Box>
      </Box>
    );
}

export default Timer;
