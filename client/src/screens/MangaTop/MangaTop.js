import { useEffect } from "react"
import Grid from "@mui/material/Grid"
import styles from "./styles.module.scss"
import ListTop from "../../components/List/ListTop"
import { useSelector, useDispatch } from "react-redux"
import { mangaTopSelector } from "../../redux/selectors"
import { fetchTopManga } from "../../redux/reducers/mangaTopSlice"
import Preloader from "../../components/Preloader"
const MangaTop = () => {
  const dispatch = useDispatch()
  const { data, limit, loading, hasNext, error, page } =
    useSelector(mangaTopSelector)
  useEffect(() => {
    dispatch(fetchTopManga({ limit, page }))
  }, [])

  const fetchMoreTopManga = () => {
    dispatch(fetchTopManga({ limit, page }))
  }
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      maxWidth="1170px"
      marginLeft="auto"
      marginRight="auto"
      paddingTop="106px"
      paddingBottom="106px"
      spacing={0}
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
              type="manga"
              items={data}
              error={error}
              hasNext={hasNext}
              fetchMoreData={fetchMoreTopManga}
            />
          )}
        </div>
      </Grid>
    </Grid>
  )
}

export default MangaTop
