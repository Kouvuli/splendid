import React from "react"
import styles from "./RoundButton.module.css"
const RoundButton = ({ className, handler, children, outlined }) => {
  return (
    <>
      {outlined ? (
        <button
          className={`${styles["btn"]} ${styles["ghost"]} ${className}`}
          id={`${styles["signIn"]}`}
          onClick={handler}
        >
          {children}
        </button>
      ) : (
        <button
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
