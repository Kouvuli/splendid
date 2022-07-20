import React from "react"
import styles from "./SideBarList.module.scss"
import SideBarList1 from "./SideBarList1"
import SideBarList2 from "./SideBarList2"
const SideBarList = () => {
  return (
    <div className={styles["product__sidebar"]}>
      <SideBarList1 title="Top Anime" />
      <SideBarList2 title="Top Manga" />
    </div>
  )
}

export default SideBarList
