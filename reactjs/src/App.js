import './App.css';
import Timer from './components/Timer';
import BackgroundSelector from './components/BackgroundSelector';
import MusicPlayer from './components/MusicPlayer';

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
