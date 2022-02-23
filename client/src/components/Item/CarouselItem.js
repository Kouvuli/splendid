import { Grid } from "@mui/material";
import React from "react";
import styles from "./CarouselItem.module.css";
const CarouselItem = (props) => {
  const { img, title, label, content } = props;
  return (
    <div
      className={`${styles["hero__items"]} ${styles["set-bg"]}`}
      style={{ backgroundImage: `url(${img})` }}
    >
      <Grid container>
        <Grid item md={6}>
          <div className={styles["hero__text"]}>
            <div className={styles["label"]}>{title}</div>
            <h2>{label}</h2>
            <p>{content}...</p>
            <a href="#">
              <span>Watch Now</span> <i className="fa fa-angle-right"></i>
            </a>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default CarouselItem;
