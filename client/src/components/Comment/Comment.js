import { useEffect, useState } from "react"
import styles from "./styles.module.scss"
import Typography from "@mui/material/Typography"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import Box from "@mui/material/Box"
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined"
import FavoriteIcon from "@mui/icons-material/Favorite"
import { Avatar, Button, ListItemAvatar, ListItemText } from "@mui/material"
import { timeSince } from "../../utils"
import { useDispatch, useSelector } from "react-redux"
import { commentSelector } from "../../redux/selectors"
import {
  createReaction,
  removeReaction,
  fetchCommentReactions
} from "../../redux/reducers/commentSlice"
import commentSlice from "../../redux/reducers/commentSlice"
const Comment = ({ content, create_at, author, id }) => {
  const dispatch = useDispatch()
  const { commentReactionCount, isReacted, currentUser } =
    useSelector(commentSelector)
  // const [isAlreadyReact, setIsAlreadyReact] = useState(isReacted.includes(id))
  useEffect(() => {
    dispatch(
      commentSlice.actions.addUser(JSON.parse(localStorage.getItem("user")))
    )
    dispatch(fetchCommentReactions({ comment_id: id }))
  }, [id, dispatch])

  const handleReact = () => {
    const params = {
      comment_id: id,
      author_id: currentUser?.id
    }
    const payload = {
      comment: { id: id },
      author: { id: currentUser?.id }
    }
    if (isReacted.includes(id)) {
      dispatch(removeReaction(params))
    } else {
      dispatch(createReaction(payload))
    }
  }
  return (
    <>
      <div className={styles.listItem}>
        <ListItemAvatar className={styles.listItemAvatar}>
          <Avatar
            className={styles.avatar}
            variant="rounded"
            src={author?.avatar}
          />
          <Typography className={styles.authorName}>
            {author.username}
          </Typography>
          <Typography className={styles.time}>
            {timeSince(create_at)}
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          {/* <Button
            onClick={handleReact}
            className={styles.heartBtn}
            endIcon={
              !isReacted.includes(id) ? (
                <FavoriteBorderOutlinedIcon />
              ) : (
                <FavoriteIcon />
              )
            }
            variant="contained"
          >
            {commentReactionCount.forEach((i) => {
              if (i.id === id) {
                return i.count
              }
            })}
          </Button> */}
        </ListItemAvatar>
        <ListItemText className={styles.listItemHeader} primary={content} />
      </div>
    </>
  )
}

export default Comment
