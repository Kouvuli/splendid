import React from "react";
import Grid from "@mui/material/Grid";
import MovieItem from "../Item/MovieItem";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import styles from "./MovieListAll.module.css";
import CustomSelect from "../UI/CustomSelect";
const MovieListAll = (props) => {
  const { title, items, handleOrder } = props;
  return (
    <Grid container columnSpacing={5}>
      <Grid item xs={12}>
        <div className={styles["product__page__title"]}>
          <Grid container alignItems="center" justifyContent="center">
            <Grid item xs={6} sm={8}>
              <div className={styles["section-title"]}>
                <h4>{title}</h4>
              </div>
            </Grid>
            <Grid item xs={6} sm={4}>
              <div className={styles["product__page__filter"]}>
                <p>Order by:</p>
                <CustomSelect handleOrder={handleOrder} />
                {/* <select>
                  <option value="">A-Z</option>
                  <option value="">1-10</option>
                  <option value="">10-50</option>
                </select> */}
              </div>
            </Grid>
          </Grid>
        </div>
        {/* <div className={`${styles["section-title"]}`}>
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
        </div> */}
      </Grid>
      {items.map((item, index) => {
        return <MovieItem key={index} {...item} />;
      })}
    </Grid>
  );
};

export default MovieListAll;
