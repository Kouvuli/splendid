import React from "react"
import styles from "./OvalButton.module.scss"
const OvalButton = ({ title, handler, outlined }) => {
  return (
    <>
      {outlined ? (
        <button
          className={`${styles["btn"]} ${styles["ghost"]}`}
          id={`${styles["signIn"]}`}
          onClick={handler}
        >
          {title}
        </button>
      ) : (
        <button
          className={`${styles["btn"]}`}
          id={`${styles["signIn"]}`}
          onClick={handler}
        >
          {title}
        </button>
      )}
    </>
  )
}

export default OvalButton
