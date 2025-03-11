import React, { useState } from 'react';

const playlistsIds ={
  "chill vibes" : "1gVVXE5aOUgYHbv6RdzzOC?si=f7f28804cbb74b75" ,
  "lo-fi" : "3WLDIcG4Cx2UOPy0rbFhQn?si=51daab58fa7045df" ,
  "dark academia core" : "3iqq84bJKB5OsLXsQx7720?si=3caf533820e94e03" ,
  "coffee shop" : "19xWKcfAvw1epnlsTqjfTV?si=17deadd0ac1542ee",
  "girly pop!" : "7xkmRjcU7adwvRRtdHCLGr?si=4b8e1e74a2c14b70"
};

function SpotifyPlayer(){
    const [playlist, setPlaylist] = useState("chill vibes");

    return (
      <div>
        <div>
          <p>pick your playlist!</p>
          <select onChange={(e) => setPlaylist(e.target.value)}>
            {Object.keys(playlistsIds).map((name) => (
              <option key={name} value={name}>{name}</option>
            ))}
          </select>
        </div>
      <iframe 
          src={`https://open.spotify.com/embed/playlist/${playlistsIds[playlist]}`}
          width="300" height="200" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
    );
  }
export default SpotifyPlayer;