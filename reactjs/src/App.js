import './App.css';

function Timer() {
  return (
    <div>
      <h1>Time: {new Date().toLocaleTimeString()}</h1>
    </div>
  );
}

function BackgroundSelector() {
  return (
    <div>
      <h1>Background Selector</h1>
      <button>Red</button>
      <button>Green</button>
      <button>Blue</button>
    </div>
  );
}

function MusicPlayer(){
  return (
    <div>
      <h1>Music Player</h1>
      <button>Play</button>
      <button>Pause</button>
      <button>Stop</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Cozy Study Room</h1>
      <Timer />
      <BackgroundSelector />
      <MusicPlayer />
    </div>
  );
}

export default App;
