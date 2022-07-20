import React, { useState } from "react"
import styles from "./ReadMore.module.scss"
const ReadMore = ({ children }) => {
  const text = children
  const [isReadMore, setIsReadMore] = useState(true)
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore)
  }
  return (
    <div className={styles["text"]}>
      {isReadMore ? text.slice(0, 1000) + "..." : text}
      <span onClick={toggleReadMore} className={styles["read-or-hide"]}>
        {isReadMore ? "read more" : " show less"}
      </span>
    </div>
  )
}

export default ReadMore
