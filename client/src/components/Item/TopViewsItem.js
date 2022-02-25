import React from "react";
import styles from "./TopViewsItem.module.css";
const TopViewsItem = () => {
  const img =
    "https://luotphimtv.com/wp-content/uploads/2021/08/Boruto-Naruto-The-He-Tiep-Theo.jpg";
  return (
    <div
      className={`${styles["product__sidebar__view__item"]} ${styles["set-bg"]} ${styles["mix day years"]}`}
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className={styles["ep"]}>18 / ?</div>
      <div className={styles["view"]}>
        <i className="fa fa-eye"></i> 9141
      </div>
      <h5>
        <a href="#">Boruto: Naruto next generations</a>
      </h5>
    </div>
  );
};

export default TopViewsItem;
