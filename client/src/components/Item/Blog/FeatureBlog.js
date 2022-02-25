import React from "react";
import styles from "./FeatureBlog.module.css";
const FeatureBlog = (props) => {
  const { img, title, date, author, category, content, commentNumber } = props;
  return (
    <div className={`${styles["blog-post"]} ${styles["featured-post"]}`}>
      <img src={img} alt="" />
      <div className={styles["post-date"]}>{date}</div>
      <h3>{title}</h3>
      <div className={styles["post-metas"]}>
        <div className={styles["post-meta"]}>{author}</div>
        <div className={styles["post-meta"]}>in {category}</div>
        <div className={styles["post-meta"]}>{commentNumber} comments</div>
      </div>
      <p>{content}</p>
      <a href="" className={styles["site-btn"]}>
        Read more
      </a>
    </div>
  );
};

export default FeatureBlog;
