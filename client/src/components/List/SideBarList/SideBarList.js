import React from "react";
import styles from "./SideBarList.module.css";
import SideBarList1 from "./SideBarList1";
import Grid from "@mui/material/Grid";
import SideBarList2 from "./SideBarList2";
const SideBarList = () => {
  return (
    <Grid item sm={12} md={4}>
      <div className={styles["product__sidebar"]}>
        <SideBarList1 title="Top views" />
        <SideBarList2 title="New comments" />
      </div>
    </Grid>
  );
};

export default SideBarList;
