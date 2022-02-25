import React from "react";
import Grid from "@mui/material/Grid";
import MovieItem from "../Item/MovieItem";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import styles from "./PopularShowList.module.css";
const PopularShowList = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <div className={`${styles["section-title"]}`}>
          <Grid container justifyContent="center">
            <Grid item xs={7} sm={8}>
              <h4>Poplular shows</h4>
            </Grid>
            <Grid item xs={5} sm={4}>
              <div className={styles["btn__all"]}>
                <a href="#" className={styles["primary-btn"]}>
                  View all
                  <ArrowRightAltIcon className={styles["arrow_right"]} />
                </a>
              </div>
            </Grid>
          </Grid>
        </div>
      </Grid>

      <Grid item xs={12} sm={5} md={4}>
        <MovieItem></MovieItem>
      </Grid>
      <Grid item xs={12} sm={5} md={4}>
        <MovieItem></MovieItem>
      </Grid>
      <Grid item xs={12} sm={5} md={4}>
        <MovieItem></MovieItem>
      </Grid>
    </Grid>
  );
};

export default PopularShowList;
