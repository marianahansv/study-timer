import React, { useState } from 'react';

const playlistsIds ={
  "chill vibes" : "1gVVXE5aOUgYHbv6RdzzOC?si=f7f28804cbb74b75" ,
  "lo-fi" : "3WLDIcG4Cx2UOPy0rbFhQn?si=51daab58fa7045df" ,
  "dark academia core" : "3iqq84bJKB5OsLXsQx7720?si=3caf533820e94e03" ,
  "coffee shop" : "19xWKcfAvw1epnlsTqjfTV?si=17deadd0ac1542ee",
  "girly pop!" : ,
  "a"
};


function SpotifyPlayer(){
    const playMusic = () => {
      console.log("Music is playing");
    }
    return (
      <div>
        <h1>pick your playlist!</h1>
        <button>Play</button>
        <button>Pause</button>
        <button>Stop</button>
      </div>
    );
  }
export default SpotifyPlayer;