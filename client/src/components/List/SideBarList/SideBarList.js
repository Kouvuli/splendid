import React from "react";
import styles from "./SideBarList.module.css";
import SideBarList1 from "./SideBarList1";
import SideBarList2 from "./SideBarList2";
const SideBarList = () => {
  return (
    <div className={styles["product__sidebar"]}>
      <SideBarList1 title="Top views" />
      <SideBarList2 title="New comments" />
    </div>
  );
};

export default SideBarList;
