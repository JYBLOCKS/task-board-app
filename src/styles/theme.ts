"use client";
import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#001d3d",
    },
    secondary: {
      main: "#219ebc",
    },
    error: {
      main: "#e63946",
    },
    success: {
      main: "#023047",
    },
    warning: {
      main: "#219ebc",
    },
    background: {
      default: "#000814",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          backgroundColor: "#219ebc"
        },
      },
    },
  },
});
