import React from "react";
import styles from "./SideBarList.module.css";
import TopViewsList from "./TopViewsList";
import Grid from "@mui/material/Grid";
import TopCommentsList from "./TopCommentsList";
const SideBarList = () => {
  return (
    <Grid item sm={12} md={4}>
      <div className={styles["product__sidebar"]}>
        <TopViewsList />
        <TopCommentsList />
      </div>
    </Grid>
  );
};

export default SideBarList;
