import React, { useState } from 'react';
import './../App.css'
import { Box, Typography, Select, MenuItem, FormControl } from "@mui/material";

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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          width: "fit-content",
          margin: "auto",
          marginTop: 3
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          choose your playlist!
        </Typography>
        <FormControl sx={{ minWidth: 100}}>
          <Select
            value={playlist}
            onChange={(e) => setPlaylist(e.target.value)}
            displayEmpty
            variant="outlined"
            sx={{ fontWeight: "bold",
                  height: "30px",  
            }}
          >
            {Object.keys(playlistsIds).map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
  
        <Box
          component="iframe"
          src={`https://open.spotify.com/embed/playlist/${playlistsIds[playlist]}`}
          sx={{
            width: "300px",
            height: "200px",
            border: "none",
            borderRadius: "10px",
          }}
        />
      </Box>
    );
  }
export default SpotifyPlayer;