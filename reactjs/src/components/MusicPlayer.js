function MusicPlayer(){
    const playMusic = () => {
      console.log("Music is playing");
    }
    return (
      <div>
        <h1>Music Player</h1>
        <button>Play</button>
        <button>Pause</button>
        <button>Stop</button>
      </div>
    );
  }
export default MusicPlayer;