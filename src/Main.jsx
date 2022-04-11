import React from "react";
import { Button, Typography, AppBar, Toolbar, IconButton} from "@mui/material";
import App from "./App";
import { AccountCircleIcon } from "@mui/icons-material";


const Main = () => {
    return(
<div>
    <AppBar position="static">
  <Toolbar variant="dense">
    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
  
    </IconButton>
    <Typography variant="h6" color="inherit" component="div">
      My Portfolio
    </Typography>
  </Toolbar>
</AppBar>
</div>
    );
}

export default Main;