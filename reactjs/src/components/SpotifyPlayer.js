import React, { useState } from 'react';
import './../App.css'
import { Box, Typography, Select, MenuItem, FormControl } from "@mui/material";

const playlistsIds = {
  "chill vibes 🐻✨🌻" : "1gVVXE5aOUgYHbv6RdzzOC?si=f7f28804cbb74b75",
  "lo-fi 🌆🎶" : "3WLDIcG4Cx2UOPy0rbFhQn?si=51daab58fa7045df",
  "dark academia core 📜🏛️" : "3iqq84bJKB5OsLXsQx7720?si=3caf533820e94e03",
  "coffee shop 🧋🍰" : "19xWKcfAvw1epnlsTqjfTV?si=17deadd0ac1542ee",
  "girly pop! 🍓🍒🎀" : "7xkmRjcU7adwvRRtdHCLGr?si=4b8e1e74a2c14b70"
};

function SpotifyPlayer() {
    const [playlist, setPlaylist] = useState("chill vibes 🐻✨🌻");

    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 2,
          padding: "20px",
          borderRadius: "20px",
          width: "fit-content",
          marginLeft: "100px",
        }}
      >
        <Typography variant="h6" fontWeight="bold" color="#ff1493">
        </Typography>
        <FormControl sx={{ minWidth: 120 }}>
          <Select
            value={playlist}
            onChange={(e) => setPlaylist(e.target.value)}
            displayEmpty
            variant="outlined"
            sx={{ 
              fontFamily: "monospace",
              fontWeight: "bold",
              height: "40px",
              backgroundColor: "white",
              borderBlockColor: "#ff85a2",
              borderRadius: "15px",
              borderRadius: "15px",
              '&:focus': {
              outline: '2px solid #ff85a2', 
        },
            }}
          >
            {Object.keys(playlistsIds).map((name) => (
              <MenuItem key={name} value={name} sx={{ fontFamily: "monospace", fontWeight: "bold" }}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
  
        <Box
          component="iframe"
          src={`https://open.spotify.com/embed/playlist/${playlistsIds[playlist]}`}
          sx={{
            width: "350px",
            height: "200px",
            border: "none",
            borderRadius: "20px",
          }}
        />
      </Box>
    );
}

export default SpotifyPlayer;
