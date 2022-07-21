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
    maxScore
  } = useSelector(animeListSelector)

  // const [page, setPage] = useState(null)
  // const [genres, setGenres] = useState("")
  // const [status, setStatus] = useState("")
  // const [order, setOrder] = useState("type")
  // const [lastVisiblePage, setLastVisiblePage] = useState(null)
  // const [productList, setProductList] = useState(null)
  useEffect(() => {
    // const fetchAllMovie = async () => {
    //   try {
    //     const params = {
    //       page,
    //       limit,
    //       genres,
    //       status,
    //       order_by: order
    //     }
    //     const response = await animeApi.getAll(params)
    //     setProductList(response.data)
    //     setLastVisiblePage(response.pagination.last_visible_page)
    //   } catch (error) {
    //     throw error
    //   }
    // }
    // fetchAllMovie()
    const params = {
      page,
      limit,
      genres: genres.join(),
      status,
      order_by: order,
      q: search,
      min_score: minScore,
      max_score: maxScore
    }

    dispatch(fetchAllAnimes(params))

    // setLastVisiblePage(data.pagination.last_visible_page)
    // setProductList(data.data)
    // if (data.length > 0) {
    //   setLastVisiblePage(data.pagination.last_visible_page)
    //   setProductList(data.data)
    // }
  }, [dispatch, page, limit, genres, status, order, search, minScore, maxScore])
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
          </div>
          <CustomPagination
          // handlePage={setPage}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Filter
            status={status}
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
