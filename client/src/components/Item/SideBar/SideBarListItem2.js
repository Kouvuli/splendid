import React from "react";
import styles from "./SideBarListItem2.module.css";
const SideBarListItem2 = () => {
  return (
    <div className={styles["product__sidebar__comment__item"]}>
      <div className={styles["product__sidebar__comment__item__pic"]}>
        <img
          src="https://gamek.mediacdn.vn/133514250583805952/2021/1/21/boruto-3-1-1611215925344947017523.jpg"
          alt=""
        />
      </div>
      <div className={styles["product__sidebar__comment__item__text"]}>
        <ul>
          <li>Active</li>
          <li>Movie</li>
        </ul>
        <h5>
          <a href="#">The Seven Deadly Sins: Wrath of the Gods</a>
        </h5>
        <span>
          <i className="fa fa-eye"></i> 19.141 Viewes
        </span>
      </div>
    </div>
  );
};

export default SideBarListItem2;
