import React from "react"
import styles from "./RoundButton.module.scss"
import { useTheme } from "@mui/material"
const RoundButton = ({ className, handler, children, outlined }) => {
  const theme = useTheme()
  return (
    <>
      {outlined ? (
        <button
          style={{
            borderColor: theme.palette.secondary.main
          }}
          className={`${styles["btn"]} ${styles["ghost"]} ${className}`}
          id={`${styles["signIn"]}`}
          onClick={handler}
        >
          {children}
        </button>
      ) : (
        <button
          style={{
            backgroundColor: theme.palette.primary.main,
            borderColor: theme.palette.primary.main
          }}
          className={`${styles["btn"]} ${className}`}
          id={`${styles["signIn"]}`}
          onClick={handler}
        >
          {children}
        </button>
      )}
    </>
  )
}

export default RoundButton
