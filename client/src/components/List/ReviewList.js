import React, { useState, useEffect } from "react"
import Divider from "@mui/material/Divider"
import animeApi from "../../apis/animeApi"
import styles from "./ReviewList.module.scss"
import List from "@mui/material/List"
import ReviewCardItem from "../Item/ReviewCardItem"
import { useDispatch, useSelector } from "react-redux"
import { fetchReviewsById } from "../../redux/reducers/animeDetailSlice"
import { fetchMangaReviewsById } from "../../redux/reducers/mangaDetailSlice"

import { animeDetailSelector, mangaDetailSelector } from "../../redux/selectors"
import ResultNotFound from "../ResultNotFound"
import Loading from "../Loading"
const ReviewList = (props) => {
  const dispatch = useDispatch()
  const { type = "anime", id } = props
  var selector
  if (type === "anime") {
    selector = animeDetailSelector
  } else {
    selector = mangaDetailSelector
  }
  const { reviewsLoading, reviewsError, reviews, reviewsPage } =
    useSelector(selector)

  // console.log(id)
  // const [data, setData] = useState(null)
  useEffect(() => {
    // const fetchReviewsById = async () => {
    //   const params = {
    //     page: 1
    //   }
    //   const response = await animeApi.getAnimeReviews(id, params)
    //   setData(response.data)
    //   console.log(data)
    // }
    // fetchReviewsById()
    const params = {
      page: reviewsPage
    }
    if (type === "anime") {
      dispatch(fetchReviewsById(id, params))
    } else {
      dispatch(fetchMangaReviewsById(id, params))
    }
  }, [dispatch, id])
  return (
    <>
      {reviewsLoading && (
        <>
          <Loading />
        </>
      )}
      {reviews && (
        <List className={styles["reviews__list"]}>
          {reviews.map((item) => {
            return (
              <>
                <ReviewCardItem data={item} />
                <Divider
                  style={{ borderColor: "#d9d9d9", marginBottom: "20px" }}
                />
              </>
            )
          })}
        </List>
      )}
      {!reviewsLoading && reviews && reviews.length === 0 && (
        <ResultNotFound message="No Results" />
      )}
      {reviewsError && <ResultNotFound message={reviewsError.message} />}
    </>
  )
}

export default ReviewList
