import './App.css';
import Timer from './components/Timer';
import SpotifyPlayer from './components/SpotifyPlayer';
import React, { useState, useEffect } from 'react';

import b1 from './images/w1.png';
import b2 from './images/w2.png';
import b3 from './images/w4.png';
import b4 from './images/w5.png';
import b5 from './images/w6.png';

const backgroundImgs = [
  b1, b2, b3, b4, b5
];
function App() {

  const [backgroundImg, setBackgroundImg] = useState(backgroundImgs[0]);
  
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * backgroundImgs.length);
    setBackgroundImg(backgroundImgs[randomIndex]);
  }, []);
  
  return (
    <div className="App"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column', // Change to column
      }}>
      <Timer />
      <SpotifyPlayer />
    </div>
  );
}

export default App;
