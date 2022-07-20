import React from "react"
import CommentItem from "../Item/CommentItem"
import styles from "./CommentList.module.scss"
const CommentList = () => {
  return (
    <>
      <div className={styles["anime__details__review"]}>
        <CommentItem />
      </div>
      <div className={styles["anime__details__form"]}>
        <form action="#">
          <textarea placeholder="Your Comment"></textarea>
          <button type="submit">
            <i className="fa fa-location-arrow"></i> Review
          </button>
        </form>
      </div>
    </>
  )
}

export default CommentList
