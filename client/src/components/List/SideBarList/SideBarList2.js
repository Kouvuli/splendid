import React from "react";
import SideBarListItem2 from "../../Item/SideBar/SideBarListItem2";
import styles from "./SideBarList2.module.css";
const SideBarList2 = (props) => {
  const { title } = props;
  return (
    <div className={styles["product__sidebar__comment"]}>
      <div className={styles["section-title"]}>
        <h5>New Comment</h5>
      </div>
      <SideBarListItem2 />
    </div>
  );
};

export default SideBarList2;
