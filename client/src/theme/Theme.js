import { createTheme } from "@mui/material/styles";

export const ThemeLight = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0cb994",
      light: "#397376",
      dark: "#05383A",
    },
    secondary: {
      main: "#fd5557",
      light: "#FD7778",
      dark: "#B13B3C",
    },
    text: {
      primary: "#",
    },
  },
});
export const ThemeDark = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0cb994",
      light: "#397376",
      dark: "#05383A",
    },
    secondary: {
      main: "#fd5557",
      light: "#FD7778",
      dark: "#B13B3C",
    },
    text: {
      primary: "#fff",
      secondary: "#b2ad9d",
    },
    background: {
      paper: "#070720",
      default: "#0b0c2a",
    },
  },
});
