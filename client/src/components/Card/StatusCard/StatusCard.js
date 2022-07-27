/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react"
import styles from "./styles.module.scss"
import { timeSince } from "../../../utils"
import DefaultUser from "../../../assets/images/default-user.jpg"
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Menu,
  MenuItem
} from "@mui/material"
import { profileSelector } from "../../../redux/selectors"
import MoreHoriz from "@mui/icons-material/MoreHoriz"
import InputTextField from "../../UI/InputTextField"
import { useDispatch, useSelector } from "react-redux"
import {
  updateComment,
  updatePost,
  deletePost,
  deleteComment,
  deleteReaction
} from "../../../redux/reducers/profileSlice"
import CustomizedSnackbars from "../../UI/CustomizedSnackbars"
const StatusCard = ({ user, data }) => {
  const [open, setOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const isMenuOpen = Boolean(anchorEl)
  const [content, setContent] = useState(data.source.content)
  const [title, setTitle] = useState(data.source.title)
  const dispatch = useDispatch()

  const {
    updatePostSuccess,
    updatePostError,
    updateCommentSuccess,
    updateCommentError,
    deletePostSuccess,
    deletePostError,
    deleteCommentError,
    deleteCommentSuccess,
    deleteReactionSuccess,
    deleteReactionError
  } = useSelector(profileSelector)
  const titleHandler = (e) => {
    setTitle(e.target.value)
  }
  const contentHandler = (e) => {
    setContent(e.target.value)
  }
  const handleMenuClose = () => {
    setAnchorEl(null)
  }
  const handleClickOpen = () => {
    setOpen(true)
    handleMenuClose()
  }
  const handleClose = (value) => {
    setOpen(false)
  }
  const handleDelete = () => {
    if (data.type === "post") {
      dispatch(deletePost(data.source.id))
    } else if (data.type === "comment") {
      dispatch(deleteComment(data.source.id))
    } else if (data.type === "reaction") {
      dispatch(deleteReaction(data.source.id))
    }
    setTimeout(() => {
      handleClose()
      window.location.reload()
    }, 1000)
  }
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const options = [
    {
      label: "Edit",
      handler: handleClickOpen
    },
    {
      label: "Delete",
      handler: handleDelete
    }
  ]

  const submitHandler = (e) => {
    if (data.type === "post") {
      dispatch(updatePost({ id: data.source.id, content, title }))
    }
    if (data.type === "comment") {
      dispatch(updateComment({ id: data.source.id, content }))
    }
    setTimeout(() => {
      handleClose()
      window.location.reload()
    }, 1000)
  }
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left"
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "left"
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {data.type !== "reaction" &&
        options.map((item) => (
          <MenuItem key={item.label} onClick={item.handler}>
            {item.label}
          </MenuItem>
        ))}
      {data.type === "reaction" && (
        <MenuItem key={options[1].label} onClick={options[1].handler}>
          {options[1].label}
        </MenuItem>
      )}
    </Menu>
  )
  if (data.type === "post") {
    return (
      <div className={`${styles["album"]} ${styles["box"]}`}>
        <div className={styles["status-main"]}>
          <img
            src={!user.avatar ? DefaultUser : user.avatar}
            className={styles["status-img"]}
          />
          <div className={styles["album-detail"]}>
            <div className={styles["album-title"]}>
              <a href={`/profile/${user.id}`}>{user.username}</a> create new{" "}
              <a href={`forum/${data.source.id}`}>{data.type}</a>
            </div>
            <div className={styles["album-date"]}>
              {timeSince(data.create_at)}
            </div>
          </div>
          <IconButton onClick={handleMenuOpen} className={styles["intro-menu"]}>
            <MoreHoriz />
          </IconButton>
          {updatePostSuccess && (
            <CustomizedSnackbars title="Update post success!" type="success" />
          )}
          {updatePostError && (
            <CustomizedSnackbars title="Update post failed!" type="error" />
          )}
          {deletePostSuccess && (
            <CustomizedSnackbars title="Delete post success!" type="success" />
          )}
          {deletePostError && (
            <CustomizedSnackbars title="Delete post failed!" type="error" />
          )}
          <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Edit Post</DialogTitle>
            <DialogContent dividers>
              <form>
                <InputTextField
                  type="text"
                  value={title}
                  label="Title"
                  onChange={titleHandler}
                />
                <InputTextField
                  type="text"
                  value={content}
                  label="Content"
                  onChange={contentHandler}
                />
              </form>
            </DialogContent>
            <DialogActions>
              <Button color="inherit" onClick={submitHandler}>
                Save changes
              </Button>
            </DialogActions>
          </Dialog>
          {renderMenu}
        </div>
        <div className={styles["album-content"]}>{data.source.title}</div>
        <div className={styles["album-sub-content"]}>{data.source.content}</div>
      </div>
    )
  }
  if (data.type === "comment") {
    return (
      <div className={`${styles["album"]} ${styles["box"]}`}>
        <div className={styles["status-main"]}>
          <img
            src={!user.avatar ? DefaultUser : user.avatar}
            className={styles["status-img"]}
          />
          <div className={styles["album-detail"]}>
            <div className={styles["album-title"]}>
              {data.source.post && (
                <>
                  <a href={`/profile/${user.id}`}>{user.username}</a> commented
                  in a{" "}
                  <a
                    className={styles.orange}
                    href={`/forum/${data.source.post.id}`}
                  >
                    post
                  </a>
                </>
              )}
              {!data.source.post && (
                <>
                  <a href={`/profile/${user.id}`}>{user.username}</a> commented
                  in a{" "}
                  <a
                    className={data.source.type === "anime" ? styles.red : ""}
                    href={`/anime/${data.source.mal_id}`}
                  >
                    {data.source.type}
                  </a>
                </>
              )}
            </div>
            <div className={styles["album-date"]}>
              {timeSince(data.create_at)}
            </div>
          </div>
          <IconButton onClick={handleMenuOpen} className={styles["intro-menu"]}>
            <MoreHoriz />
          </IconButton>
          {updateCommentSuccess && (
            <CustomizedSnackbars
              title="Update comment success!"
              type="success"
            />
          )}
          {updateCommentError && (
            <CustomizedSnackbars title="Update comment failed!" type="error" />
          )}
          {deleteCommentSuccess && (
            <CustomizedSnackbars
              title="Delete comment success!"
              type="success"
            />
          )}
          {deleteCommentError && (
            <CustomizedSnackbars title="Delete comment failed!" type="error" />
          )}
          <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Edit Comment</DialogTitle>
            <DialogContent dividers>
              <form>
                <InputTextField
                  type="text"
                  value={content}
                  label="Content"
                  onChange={contentHandler}
                />
              </form>
            </DialogContent>
            <DialogActions>
              <Button color="inherit" onClick={submitHandler}>
                Save changes
              </Button>
            </DialogActions>
          </Dialog>
          {renderMenu}
        </div>
        <div className={styles["album-content"]}>{data.source.content}</div>
      </div>
    )
  }
  if (data.type === "reaction") {
    return (
      <div className={`${styles["album"]} ${styles["box"]}`}>
        <div className={styles["status-main"]}>
          <img
            src={!user.avatar ? DefaultUser : user.avatar}
            className={styles["status-img"]}
          />
          <div className={styles["album-detail"]}>
            <div className={styles["album-title"]}>
              {data.source.post && (
                <>
                  <a href={`/profile/${user.id}`}>{user.username}</a> reacted on
                  a <a href={`/forum/${data.source.post.id}`}>post</a>
                </>
              )}
              {!data.source.post && (
                <>
                  <a href={`/profile/${user.id}`}>{user.username}</a> reacted on
                  a comment of{" "}
                  <a href={`/forum/${data.source.comment.post.id}`}>post</a>
                </>
              )}
            </div>
            <div className={styles["album-date"]}>
              {timeSince(data.create_at)}
            </div>
          </div>
          <IconButton onClick={handleMenuOpen} className={styles["intro-menu"]}>
            <MoreHoriz />
          </IconButton>

          {deleteReactionSuccess && (
            <CustomizedSnackbars
              title="Delete reaction success!"
              type="success"
            />
          )}
          {deleteReactionError && (
            <CustomizedSnackbars title="Delete reaction failed!" type="error" />
          )}

          {renderMenu}
        </div>
        {data.source.content && (
          <div className={styles["album-content"]}>{data.source.content}</div>
        )}
      </div>
    )
  }
  return null
}

export default StatusCard
