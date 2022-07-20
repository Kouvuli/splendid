import ChatBubbleIcon from "@mui/icons-material/ChatBubble"
import FavoriteIcon from "@mui/icons-material/Favorite"
import { Button } from "@mui/material"
import Avatar from "@mui/material/Avatar"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import List from "@mui/material/List"
import ListItemAvatar from "@mui/material/ListItemAvatar"
import ListItemText from "@mui/material/ListItemText"
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined"
import Typography from "@mui/material/Typography"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import {
  fetchPostById,
  createComment,
  createReaction,
  removeReaction,
  fetchPostComments,
  fetchPostReactions
} from "../../redux/reducers/postDetailSlice"
import { timeSince } from "../../utils"
import Comment from "../../components/Comment"
import NewCommentDialog from "../../components/NewCommentDialog"
import { postDetailSelector } from "../../redux/selectors"
import styles from "./styles.module.scss"
import postDetailSlice from "../../redux/reducers/postDetailSlice"
import Preloader from "../../components/Preloader"
const PostDetail = () => {
  const { id } = useParams()
  // const { data: currentUserData } = useSelector(selectAuth)
  const {
    post,
    currentUser,
    loading,
    error,
    comments,
    commentsPage,
    postReactionCount,
    isReacted,
    limit
  } = useSelector(postDetailSelector)

  const dispatch = useDispatch()

  const [open, setOpen] = React.useState(false)

  // const [reacted, setReacted] = useState(isReacted)

  useEffect(() => {
    dispatch(fetchPostById(id))
    dispatch(fetchPostComments({ post_id: id, page: commentsPage, limit }))
    dispatch(
      postDetailSlice.actions.addUser(JSON.parse(localStorage.getItem("user")))
    )
    dispatch(fetchPostReactions({ post_id: id }))
  }, [])
  // const [reactionCount, setReactionCount] = useState(reactions.length)
  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleReact = () => {
    const params = {
      post_id: post.id,
      author_id: currentUser.id
    }
    const payload = {
      post: { id: post.id },
      author: { id: currentUser?.id }
    }
    if (isReacted) {
      dispatch(removeReaction(params))
    } else {
      dispatch(createReaction(payload))
    }
  }

  const handleConfirm = (values) => {
    console.log(values)
    dispatch(
      createComment({
        ...values,
        post: { id: post.id },
        author: { id: currentUser?.id }
      })
    )
    window.location.reload()
    setOpen(false)
  }

  return (
    <>
      {loading && <Preloader />}
      {!loading && post && (
        <Grid
          container
          justifyContent="center"
          maxWidth="1170px"
          marginLeft="auto"
          marginRight="auto"
          paddingTop="50px"
          paddingBottom="106px"
          rowSpacing={4}
          columnSpacing={0}
        >
          <Grid item xs={12}>
            <div className={styles.postTitle}>{post?.title}</div>
            <div className={styles.post}>
              <ListItemAvatar className={styles.listItemAvatar}>
                <Avatar className={styles.avatar} variant="rounded" src="" />
                <Typography className={styles.authorName}>
                  {post?.author?.username}
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Typography className={styles.time}>
                  {timeSince(post.created_at)}
                </Typography>
              </ListItemAvatar>
              <ListItemText
                className={styles.listItemText}
                primary={post?.content}
              />
              {currentUser && (
                <div className={styles.postBtn}>
                  <Button
                    onClick={handleClickOpen}
                    className={styles.commentBtn}
                    startIcon={<ChatBubbleIcon />}
                    variant="contained"
                  >
                    Comment
                  </Button>
                  <NewCommentDialog
                    open={open}
                    handleClose={handleClose}
                    handleConfirm={handleConfirm}
                  />
                  <Button
                    onClick={handleReact}
                    className={styles.heartBtn}
                    endIcon={
                      !isReacted ? (
                        <FavoriteBorderOutlinedIcon />
                      ) : (
                        <FavoriteIcon />
                      )
                    }
                    variant="contained"
                  >
                    {postReactionCount}
                  </Button>
                </div>
              )}
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={styles.commentTitle}>
              <Typography className={styles.title}>
                {comments.length || 0} Comment
              </Typography>
            </div>
          </Grid>
          <Grid item className={styles.paddingTopNone} xs={12}>
            <List sx={{ width: "100%" }}>
              {comments?.length > 0 &&
                comments.map((comment) => {
                  return <Comment key={comment.id} {...comment} />
                })}
            </List>
          </Grid>
        </Grid>
      )}
    </>
  )
}

export default PostDetail
