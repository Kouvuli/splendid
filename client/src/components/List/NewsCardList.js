import React, { useState, useEffect } from "react"
import NewsCardItem from "../Item/NewsCardItem"
import Divider from "@mui/material/Divider"
import animeApi from "../../apis/animeApi"
import styles from "./NewsCardList.module.scss"
import List from "@mui/material/List"
import { useDispatch, useSelector } from "react-redux"
import { fetchNewsById } from "../../redux/reducers/animeDetailSlice"
import { fetchMangaNewsById } from "../../redux/reducers/mangaDetailSlice"
import { animeDetailSelector, mangaDetailSelector } from "../../redux/selectors"
import ResultNotFound from "../ResultNotFound"
import Loading from "../Loading"
import LoadingCardSkeleton from "../LoadingCardSkeleton"
import InfiniteScroll from "react-infinite-scroll-component"
import { CARD_TYPES } from "../../constants"
const NewsCardList = (props) => {
  const dispatch = useDispatch()
  const { type = "anime", id } = props
  var selector
  if (type === "anime") {
    selector = animeDetailSelector
  } else {
    selector = mangaDetailSelector
  }
  const { newsLoading, newsError, news, newsPage, hasMoreNews } =
    useSelector(selector)

  // const [data, setData] = useState(null)
  useEffect(() => {
    // const fetchNewsById = async () => {
    //   const params = {
    //     page: 1
    //   }
    //   const response = await animeApi.getAnimeNews(id, params)
    //   setData(response.data)
    // }
    // fetchNewsById()
    const params = {
      page: newsPage
    }
    if (type === "anime") {
      dispatch(fetchNewsById(id, params))
    } else {
      dispatch(fetchMangaNewsById(id, params))
    }
  }, [])

  const fetchMoreNews = () => {
    if (type === "anime") {
      dispatch(fetchNewsById(id, { page: newsPage }))
    } else {
      dispatch(fetchMangaNewsById(id, { page: newsPage }))
    }
  }
  return (
    <>
      {newsLoading && (
        <>
          <Loading />
        </>
      )}
      {news && (
        <InfiniteScroll
          dataLength={news.length}
          next={fetchMoreNews}
          hasMore={hasMoreNews}
        >
          <List className={styles["news__list"]}>
            {news.map((item) => {
              return (
                <>
                  <NewsCardItem data={item} />
                  <Divider
                    style={{ borderColor: "#d9d9d9", marginBottom: "20px" }}
                  />
                </>
              )
            })}
          </List>
        </InfiniteScroll>
      )}
      {!newsLoading && news && news.length === 0 && (
        <ResultNotFound message="No Results" />
      )}
      {newsError && <ResultNotFound message={newsError.message} />}
    </>
  )
}

export default NewsCardList
