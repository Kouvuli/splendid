import React, { useEffect } from "react"
import Grid from "@mui/material/Grid"
import styles from "./styles.module.scss"
import CustomPagination from "../../components/UI/CustomPagination"
import Filter from "../../components/List/Filter"
import ListFilter from "../../components/List/ListFilter"
import { useSelector, useDispatch } from "react-redux"
import { animeListSelector } from "../../redux/selectors"
import { fetchAllAnimes } from "../../redux/reducers/animeSlice"
const Anime = () => {
  const dispatch = useDispatch()

  const {
    loading,
    data,
    error,
    page,
    limit,
    genres,
    status,
    order,
    search,
    minScore,
    maxScore,
    rating
  } = useSelector(animeListSelector)

  useEffect(() => {
    const params = {
      page,
      limit,
      genres: genres.join(),
      status,
      order_by: order,
      q: search,
      min_score: minScore,
      max_score: maxScore,
      rating
    }

    dispatch(fetchAllAnimes(params))
  }, [
    dispatch,
    page,
    limit,
    genres,
    status,
    order,
    search,
    minScore,
    maxScore,
    rating
  ])
  return (
    <>
      <Grid
        container
        justifyContent="center"
        maxWidth="1170px"
        marginLeft="auto"
        marginRight="auto"
        paddingTop="106px"
        paddingBottom="106px"
        spacing={0}
      >
        <Grid item xs={12} md={8}>
          <div className={styles["movie-section"]}>
            <ListFilter
              // handleOrder={setOrder}
              items={data.data}
              error={error}
              title="Anime"
              loading={loading}
            />
            <div className={styles["pagination"]}>
              <CustomPagination
              // handlePage={setPage}
              />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <Filter
            status={status}
            rating={rating}
            // handleStatus={setStatus}
            // handleGenres={setGenres}
            title="Genres"
          />
        </Grid>
      </Grid>
    </>
  )
}

export default Anime
