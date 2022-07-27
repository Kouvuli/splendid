import React from "react"
import styles from "./CommentItem.module.scss"
import { timeSince } from "../../utils"
import DefaultImage from "../../assets/images/default-user.jpg"
const CommentItem = ({ data }) => {
  return (
    <div className={styles["anime__review__item"]}>
      <div className={styles["anime__review__item__pic"]}>
        <img
          src={!data.image ? DefaultImage : "img/anime/review-1.jpg"}
          alt=""
        />
      </div>
      <div className={styles["anime__review__item__text"]}>
        <h6>
          {data.author.username} - <span>{timeSince(data.create_at)}</span>
        </h6>
        <p>{data.content}</p>
      </div>
    </div>
  )
}

export default CommentItem
