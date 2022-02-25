import React from "react";
import TopCommentItem from "../Item/TopCommentItem";
import styles from "./TopCommentsList.module.css";
const TopCommentsList = () => {
  return (
    <div className={styles["product__sidebar__comment"]}>
      <div className={styles["section-title"]}>
        <h5>New Comment</h5>
      </div>
      <TopCommentItem />
    </div>
  );
};

export default TopCommentsList;
