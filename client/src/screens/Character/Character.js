import { useEffect } from "react"
import Grid from "@mui/material/Grid"
import styles from "./styles.module.scss"
import ListTop from "../../components/List/ListTop"
import { useSelector, useDispatch } from "react-redux"
import { characterSelector } from "../../redux/selectors"
import { fetchCharacter } from "../../redux/reducers/characterSlice"
import Preloader from "../../components/Preloader"
const Character = () => {
  const dispatch = useDispatch()
  const { data, limit, loading, hasNext, error, page, sort, order_by } =
    useSelector(characterSelector)
  useEffect(() => {
    dispatch(fetchCharacter({ limit, page, sort, order_by }))
  }, [])

  const fetchMoreData = () => {
    dispatch(fetchCharacter({ limit, page, sort, order_by }))
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
              type="character"
              items={data}
              error={error}
              hasNext={hasNext}
              fetchMoreData={fetchMoreData}
            />
          )}
        </div>
      </Grid>
    </Grid>
  )
}

export default Character
