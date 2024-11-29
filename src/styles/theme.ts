"use client";
import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1e1e5d",
    },
    secondary: {
      main: "#439093",
    },
    error: {
      main: "#ed565d",
    },
    success: {
      main: "#1aad2b",
    },
    warning: {
      main: "#219ebc",
    },
    background: {
      default: "#f3f4f5",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
          borderRadius: "4px",
        },
      },
    },
  },
});
