/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import styles from "./styles.module.scss"
import clsx from "clsx"
const FloatingFilterButton = ({ handler }) => {
  return (
    <>
      <button onClick={handler} id={styles["floating-button"]}>
        <i
          alt="filter"
          className="bx bxs-filter-alt bx-sm"
          style={{ color: "#ffffff" }}
        ></i>
      </button>
    </>
  )
}

export default FloatingFilterButton
