import React from "react"
import styles from "./NewsCardItem.module.scss"
import moment from "moment"

const NewsCardItem = (props) => {
  const { data } = props
  return (
    <div className={styles["product__sidebar__comment__item"]}>
      <div className={styles["product__sidebar__comment__item__pic"]}>
        <img src={data.images.jpg.image_url} alt="" />
      </div>
      <div className={styles["product__sidebar__comment__item__text"]}>
        <h5>
          <a href={data.url}>{data.title}</a>
        </h5>
        <p>
          {data.excerpt}
          <a href={data.url}>read more</a>
        </p>

        <div className={`${styles["lightLink"]} ${styles["spaceit"]}`}>
          {moment.utc(data.date).local().format("MMM DD, yyyy LT")}{" "}
          <a href={data.author_url}>{data.author_username}</a> |{" "}
          <a href={data.forum_url}>Discuss ({data.comments} comments)</a>
        </div>
      </div>
    </div>
  )
}

export default NewsCardItem
