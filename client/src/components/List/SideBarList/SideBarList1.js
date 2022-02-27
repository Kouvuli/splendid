import * as React from "react";
import styles from "./SideBarList1.module.css";
import SideBarListItem1 from "../../Item/SideBar/SideBarListItem1";
const SideBarList1 = (props) => {
  const { title } = props;
  return (
    <div className={styles["product__sidebar__view"]}>
      <div className={styles["section-title"]}>
        <h5>{title}</h5>
      </div>
      <ul className={styles["filter__controls"]}>
        <li class="active" data-filter="*">
          Day
        </li>
        <li data-filter=".week">Week</li>
        <li data-filter=".month">Month</li>
        <li data-filter=".years">Years</li>
      </ul>
      <div className={styles["filter__gallery"]}>
        <SideBarListItem1 />
      </div>
    </div>
  );
};

export default SideBarList1;
