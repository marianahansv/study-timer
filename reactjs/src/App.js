import './App.css';
import Timer from './components/Timer';
import SpotifyPlayer from './components/SpotifyPlayer';

function App() {
  return (
    <div className="App">
      <h1>your study room to lock in</h1>
      <Timer />
      <SpotifyPlayer />
    </div>
  );
}

export default App;
