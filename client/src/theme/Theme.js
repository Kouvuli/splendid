import { createTheme } from "@mui/material/styles"

export const ThemeLight = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0fe1b4",
      light: "#23ffcf",
      dark: "#05383A"
    },
    secondary: {
      main: "#fd5557",
      light: "#FD7778",
      dark: "#B13B3C"
    },
    // text: {
    //   primary: "#070720",
    //   secondary: "",
    //   disable: ""
    // },
    background: {
      paper: "#070720",
      default: "#0b0c2a"
    }
  }
})
export const ThemeDark = createTheme({
  palette: {
    mode: "dark",
    secondary: {
      main: "#0cb994",
      light: "#397376",
      dark: "#05383A"
    },
    primary: {
      main: "#e53637",
      light: "#FD7778",
      dark: "#B13B3C"
    },
    text: {
      primary: "#fff",
      secondary: "#b2ad9d"
    },
    background: {
      paper: "#070720",
      default: "#0b0c2a"
    }
  }
})
