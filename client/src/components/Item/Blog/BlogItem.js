import React from "react"
import styles from "./BlogItem.module.css"
const BlogItem = (props) => {
  const { img, title, date, author, category, content, commentNumber } = props
  return (
    <div className={styles["blog-post"]}>
      <img src={img} alt="" />
      <div className={styles["post-date"]}>{date}</div>
      <h4>{title}</h4>
      <div className={styles["post-metas"]}>
        <div className={styles["post-meta"]}>{author}</div>
        <div className={styles["post-meta"]}>in {category}</div>
        <div className={styles["post-meta"]}>{commentNumber} comments</div>
      </div>
      <p>{content}</p>
      <a href="" className={styles["read-more"]}>
        Read more
      </a>
    </div>
  )
}

export default BlogItem
