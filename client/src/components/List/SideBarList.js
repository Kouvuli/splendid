import React from "react";
import styles from "./SideBarList.module.css";
import TopViewsList from "./TopViewsList";
import TopCommentsList from "./TopCommentsList";
const SideBarList = () => {
  return (
    <div className={styles["product__sidebar"]}>
      <TopViewsList />
      <TopCommentsList />
    </div>
  );
};

export default SideBarList;
