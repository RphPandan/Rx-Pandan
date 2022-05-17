import { createTheme } from "@mui/material/styles";

export default createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#9e9e9e",
    },
    secondary: {
      main: "#4747f7",
    },
    error: {
      main: "#f32314",
    },
    warning: {
      main: "#c7d642",
    },
    logo: {
      main: "#47da23",
    },
  },
  typography: {
    fontSize: 14,
  },
  spacing: 8,
});
