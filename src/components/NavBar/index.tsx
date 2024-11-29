"use client";
import { AppBar, Toolbar, Typography } from "@mui/material";

function NavBar() {
  return (
    <AppBar sx={{ borderRadius: 0 }}>
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit" component="div">
          TaskBoard
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
export default NavBar;
