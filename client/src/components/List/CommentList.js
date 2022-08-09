import { useEffect, useState } from "react"
import CommentItem from "../Item/CommentItem"
import styles from "./CommentList.module.scss"
import { useSelector, useDispatch } from "react-redux"
import {
  fetchAnimeCommentsById,
  createComment
} from "../../redux/reducers/animeDetailSlice"

import { fetchMangaCommentsById } from "../../redux/reducers/mangaDetailSlice"
import { animeDetailSelector, mangaDetailSelector } from "../../redux/selectors"

import _ from "lodash"
import InfiniteScroll from "react-infinite-scroll-component"
import { List } from "@mui/material"
import RoundButton from "../UI/Button/RoundButton"
import Loading from "../Loading"
import CardSkeleton from "../UI/CardSkeleton"
import { CARD_TYPES } from "../../constants"
const CommentList = ({ type = "anime", id }) => {
  const dispatch = useDispatch()
  const [commentVal, setCommentVal] = useState("")
  var selector
  if (type === "anime") {
    selector = animeDetailSelector
  } else {
    selector = mangaDetailSelector
  }
  const {
    commentsLimit,
    currentUser,
    comments,
    hasMoreComments,
    commentsPage
  } = useSelector(selector)

  useEffect(() => {
    if (type === "anime") {
      dispatch(
        fetchAnimeCommentsById({
          mal_id: id,
          page: commentsPage,
          limit: commentsLimit
        })
      )
    } else {
      console.log(type)
      dispatch(
        fetchMangaCommentsById({
          mal_id: id,
          page: commentsPage,
          limit: commentsLimit
        })
      )
    }
  }, [dispatch, id])
  const submitHandler = (e) => {
    if (commentVal != null) {
      setCommentVal("")
      // console.log({
      //   content: commentVal,
      //   mal_id: id,
      //   type: "anime",
      //   author: { id: currentUser?.id }
      // })
      if (type === "anime") {
        dispatch(
          createComment({
            content: commentVal,
            mal_id: id,
            type: "anime",
            author: { id: currentUser?.id }
          })
        )
      } else {
        dispatch(
          createComment({
            content: commentVal,
            mal_id: id,
            type: "manga",
            author: { id: currentUser?.id }
          })
        )
      }
      setTimeout(() => {
        window.location.reload()
      }, 1000)
    }
  }
  const fetchMoreComments = () => {
    dispatch(
      fetchAnimeCommentsById({
        mal_id: id,
        page: commentsPage,
        limit: commentsLimit
      })
    )
  }
  const commentHandler = (e) => {
    setCommentVal(e.target.value)
  }

  return (
    <>
      {!_.isEmpty(comments) && (
        <InfiniteScroll
          dataLength={comments.length}
          next={fetchMoreComments}
          hasMore={hasMoreComments}
          loader={
            <div style={{ marginTop: "170px" }}>
              <CardSkeleton type={CARD_TYPES.MEDIUM_HORIZONTAL} />
            </div>
          }
        >
          <List sx={{ maxHeight: "800px" }}>
            {comments.map((comment) => {
              return (
                <div className={styles["anime__details__review"]}>
                  <CommentItem data={comment} />
                </div>
              )
            })}
          </List>
        </InfiniteScroll>
      )}

      {currentUser && (
        <div className={styles["anime__details__form"]}>
          <textarea
            placeholder="Your Comment"
            onChange={commentHandler}
            value={commentVal}
          ></textarea>
          <RoundButton handler={submitHandler}> Comment</RoundButton>
        </div>
      )}
    </>
  )
}

export default CommentList
