import React from "react"
import styles from "./styles.module.scss"
const Preloader = () => {
  return (
    <div id={styles.preloder}>
      <div className={styles.loader}></div>
    </div>
  )
}

export default Preloader
