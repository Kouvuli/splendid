import { useEffect } from "react"
import Grid from "@mui/material/Grid"
import styles from "./styles.module.scss"
import ListTop from "../../components/List/ListTop"
import { useSelector, useDispatch } from "react-redux"
import { animeTopSelector } from "../../redux/selectors"
import { fetchTopAnime } from "../../redux/reducers/animeTopSlice"
import Preloader from "../../components/Preloader"
const AnimeTop = () => {
  const dispatch = useDispatch()
  const { data, limit, loading, hasNext, error, page } =
    useSelector(animeTopSelector)
  useEffect(() => {
    dispatch(fetchTopAnime({ limit, page }))
  }, [])

  const fetchMoreTopAnime = () => {
    dispatch(fetchTopAnime({ limit, page }))
  }
  return (
    <Grid
      container
      justifyContent="center"
      maxWidth="1170px"
      marginLeft="auto"
      marginRight="auto"
      paddingTop="106px"
      paddingBottom="106px"
    >
      <Grid item xs={12}>
        <div className={styles["movie-section"]}>
          {loading && (
            <>
              <Preloader />
            </>
          )}
          {data && (
            <ListTop
              // handleOrder={setOrder}
              type="anime"
              items={data}
              error={error}
              hasNext={hasNext}
              fetchMoreData={fetchMoreTopAnime}
            />
          )}
        </div>
      </Grid>
    </Grid>
  )
}

export default AnimeTop
