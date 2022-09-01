import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
let theme = createTheme({
  typography: {
    fontSize: 12,
    h1: {
      fontSize: "3.2rem",
    },
  },
  palette: {
    primary: {
      main: "#d83c46",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiFormLabel: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            color: "#0000008a",
          },
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
