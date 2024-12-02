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
    info: {
      main: "#219ebc",
    },
    warning: {
      main: "#FFB200",
    },
    background: {
      default: "#f3f4f5",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
        },
      },
    },
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
