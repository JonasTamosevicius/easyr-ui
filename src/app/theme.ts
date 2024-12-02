import { ThemeOptions, createTheme } from "@mui/material/styles";

export const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#6A66E7",
    },
    secondary: {
      main: "#17C3B5",
    },
    text: {
      primary: "#454F5B",
      secondary: "#778699",
      disabled: "#A6ADBF",
    },
    background: {
      paper: "#F6F8F8",
    },
    divider: "#E3E8ED",
    success: {
      main: "#17C3B5",
    },
    warning: {
      main: "#d32f2f",
    },
    info: {
      main: "#292F35",
    },
  },
  typography: {
    h1: {
      fontSize: 20,
      fontWeight: 600,
    },
    h2: {
      fontSize: 20,
    },
    body1: {
      fontSize: 14,
      fontWeight: 300,
    },
    button: {
      fontSize: 14,
      fontWeight: 600,
    },
    caption: {
      fontSize: 12,
    },
  },
};

export default createTheme(themeOptions);
