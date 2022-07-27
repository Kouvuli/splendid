import { useState } from "react"
import MoreHoriz from "@mui/icons-material/MoreHoriz"

import { IconButton, Menu, MenuItem } from "@mui/material"
import React from "react"
import CustomizedSnackbars from "../../UI/CustomizedSnackbars"
import styles from "./styles.module.scss"
import DefaultUser from "../../../assets/images/default-user.jpg"
import { useDispatch, useSelector } from "react-redux"
import { timeSince } from "../../../utils"
import { deleteList } from "../../../redux/reducers/profileSlice"
import { profileSelector } from "../../../redux/selectors"
const ListCard = ({ user, data }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const isMenuOpen = Boolean(anchorEl)
  const dispatch = useDispatch()
  const { deleteListSuccess, deleteListError } = useSelector(profileSelector)
  const handleDelete = () => {
    dispatch(deleteList(data.id))

    setTimeout(() => {
      window.location.reload()
    }, 1000)
  }
  const options = [
    {
      label: "Delete",
      handler: handleDelete
    }
  ]
  const handleMenuClose = () => {
    setAnchorEl(null)
  }
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
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
      {options.map((item) => (
        <MenuItem key={item.label} onClick={item.handler}>
          {item.label}
        </MenuItem>
      ))}
    </Menu>
  )

  return (
    <div className={`${styles["album"]} ${styles["box"]}`}>
      <div className={styles["status-main"]}>
        <img
          src={!user.avatar ? DefaultUser : user.avatar}
          className={styles["status-img"]}
        />
        <div className={styles["album-detail"]}>
          <div className={styles["album-title"]}>
            <a href={`/profile/${user.id}`}>{user.username}</a> add{" "}
            <a href={`/${data.mal_type}/${data.mal_id}`}>{data.mal_title}</a> to{" "}
            {data.type}
            {/* {!data.source.post && (
              <>
                <a href={`/profile/${user.id}`}>{user.username}</a> reacted on a
                comment of{" "}
                <a href={`/forum/${data.source.comment.post.id}`}>post</a>
              </>
            )} */}
          </div>
          <div className={styles["album-date"]}>
            {timeSince(data.create_at)}
          </div>
        </div>
        <IconButton onClick={handleMenuOpen} className={styles["intro-menu"]}>
          <MoreHoriz />
        </IconButton>

        {deleteListSuccess && (
          <CustomizedSnackbars title={`Delete success!`} type="success" />
        )}
        {deleteListError && (
          <CustomizedSnackbars title={`Delete failed!`} type="error" />
        )}

        {renderMenu}
      </div>
    </div>
  )
}

export default ListCard
