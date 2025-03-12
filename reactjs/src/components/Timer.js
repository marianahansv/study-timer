import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
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
      <Box 
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "30vh",
          backgroundColor: "#white",
          gap: 3
        }}
      >
        {/* Timer Display */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, backgroundColor:"white"}}>
        <Typography variant="h2" sx={{ fontWeight:"bold",fontSize: "9rem" }}>
            {formatTime(time)}
          </Typography>
          {/* Timer Buttons + and - */}
          <Box sx={{ display: "flex", flexDirection:"column", gap: 1, backgroundColor:"white" }}>
          {isPaused && (
            <Button variant="contained" onClick={handleIncrease} sx={{ fontSize: "2rem" }}>+</Button>
          )}
          {isPaused && (
            <Button variant="contained" onClick={handleDecrease} sx={{ fontSize: "2rem" }}>-</Button>
          )}</Box>
        </Box>

        {/* Timer Controls */}
        <Box sx={{ display: "flex", gap: 2}}>
          <Button variant="contained" color="primary" onClick={handleStartandPause} sx={{textTransform:"none", fontSize: "1.3rem"}}>
            {isPaused ? "start" : "stop"}
          </Button>
          <Button variant="outlined" color="secondary" onClick={handleReset} sx={{textTransform:"none", fontSize: "1.3rem"}}>
            reset
          </Button>
        </Box>
      </Box>
    );
  }

export default Timer;