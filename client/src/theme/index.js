import { createTheme } from "@mui/material/styles"

export const ThemeLight = createTheme({
  keys: ["xs", "sm", "md", "lg", "xl"],
  breakpoints: {
    values: {
      xs: 0,
      xsm: 450,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  },
  palette: {
    mode: "dark",
    secondary: {
      main: "#18c1f0",
      light: "#41d2fa",
      dark: "#1c8ba9"
    },
    primary: {
      main: "#e53637",
      light: "#ff5253",
      dark: "#e40002"
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
