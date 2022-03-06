import React from "react";
import Grid from "@mui/material/Grid";
import styles from "./BreadCrumb.module.css";
const BreadCrumb = () => {
  return (
    <div className={styles["breadcrumb-option"]}>
      <Grid container>
        <Grid item xs={12}>
          <div className={styles["breadcrumb__links"]}>
            <a href="./index.html">
              <i className="bx bxs-home"></i> Home
            </a>
            <a href="./categories.html">Categories</a>
            <span>Romance</span>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default BreadCrumb;
