import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import { Provider } from "react-redux"
import store from "./redux/store"
import { ThemeLight, ThemeDark } from "./theme"
import { ThemeProvider } from "@mui/material/styles"
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={ThemeLight}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
