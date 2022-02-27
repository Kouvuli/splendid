import React from "react";
import SideBarListItem1 from "../../Item/SideBar/SideBarListItem1";
import styles from "./SideBarList3.module.css";
const SideBarList3 = (props) => {
  const { title } = props;
  return (
    <div className={styles["anime__details__sidebar"]}>
      <div className={styles["section-title"]}>
        <h5>{title}</h5>
      </div>
      <SideBarListItem1 />
    </div>
  );
};

export default SideBarList3;
