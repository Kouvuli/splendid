import React from "react";
import Grid from "@mui/material/Grid";
import MovieItem from "../Item/MovieItem";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import styles from "./MovieList.module.css";
const MovieList = (props) => {
  const { title } = props;
  return (
    <Grid container columnSpacing={5}>
      <Grid item xs={12}>
        <div className={`${styles["section-title"]}`}>
          <Grid container justifyContent="center">
            <Grid item xs={7} sm={8}>
              <h4>{title}</h4>
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
      <MovieItem></MovieItem>
      <MovieItem></MovieItem>
      <MovieItem></MovieItem>
      <MovieItem></MovieItem>
      <MovieItem></MovieItem>
      <MovieItem></MovieItem>
    </Grid>
  );
};

export default MovieList;
