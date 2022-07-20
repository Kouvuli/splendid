import React from "react"
import Grid from "@mui/material/Grid"
import MovieItem from "../Item/MovieItem"
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt"
import styles from "./ListFilter.module.scss"
import CustomSelect from "../UI/CustomSelect"
import Loading from "../Loading"
import ResultNotFound from "../ResultNotFound"
import LoadingCardSkeleton from "../LoadingCardSkeleton"
import { CARD_TYPES } from "../../constants"
const ListFilter = (props) => {
  const { title, items, loading, error } = props
  return (
    <Grid container justifyContent="center" columnSpacing={5}>
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
                <CustomSelect type={title} />
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
      {loading && (
        <>
          <Loading />
          <LoadingCardSkeleton
            size={18}
            xs={12}
            sm={5}
            md={4}
            type={CARD_TYPES.DEFAULT}
          />
        </>
      )}
      {items &&
        items.map((item, index) => {
          return <MovieItem type={title} key={index} {...item} />
        })}
      {!loading && items && items.length === 0 && (
        <ResultNotFound message="No Results" />
      )}
      {error && <ResultNotFound message={error.message} />}
    </Grid>
  )
}

export default ListFilter
