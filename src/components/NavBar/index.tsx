'use client'
import { AppBar, Toolbar, Typography } from "@mui/material";

function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit" component="div">
          TaskBoard
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
export default NavBar;
