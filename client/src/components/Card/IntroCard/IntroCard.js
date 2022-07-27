import React from "react"
import styles from "./styles.module.scss"
import _ from "lodash"
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
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import InputTextField from "../../UI/InputTextField"
import MoreHoriz from "@mui/icons-material/MoreHoriz"
import { updatedUser } from "../../../redux/reducers/profileSlice"
import { useDispatch, useSelector } from "react-redux"
import moment from "moment"
import CustomizedSnackbars from "../../UI/CustomizedSnackbars"
import { profileSelector } from "../../../redux/selectors"
const IntroCard = ({ data }) => {
  const [open, setOpen] = React.useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null)
  const isMenuOpen = Boolean(anchorEl)
  const dispatch = useDispatch()
  const [fullname, setFullname] = React.useState(data?.fullname)
  const [address, setAddress] = React.useState(data?.address)
  const [dob, setDob] = React.useState(
    moment(data?.dob, "DD/MM/YYYY").format("YYYY-MM-DD")
  )
  const { updateUserSuccess, updateUserError } = useSelector(profileSelector)
  const [job, setJob] = React.useState(data?.job)
  const handleClickOpen = () => {
    setOpen(true)
    handleMenuClose()
  }
  const handleMenuClose = () => {
    setAnchorEl(null)
  }
  const handleClose = (value) => {
    setOpen(false)
  }
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const fullnameHandler = (e) => {
    setFullname(e.target.value)
  }
  const jobHandler = (e) => {
    setJob(e.target.value)
  }
  const dobHandler = (e) => {
    setDob(e.target.value)
  }
  const addressHandler = (e) => {
    setAddress(e.target.value)
  }
  const submitHandler = (e) => {
    dispatch(
      updatedUser({
        id: data.id,
        fullname,
        job,
        dob: moment(dob, "YYYY-MM-DD").format("DD/MM/YYYY"),
        address
      })
    )
    setTimeout(() => {
      handleClose()
      window.location.reload()
    }, 1000)
  }
  const introItems = [
    {
      label: "Edit",
      handler: handleClickOpen
    },
    {
      label: "Save"
    }
  ]
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
      {introItems.map((item) => (
        <MenuItem key={item.label} onClick={item.handler}>
          {item.label}
        </MenuItem>
      ))}
    </Menu>
  )
  return (
    <>
      {!_.isEmpty(data) && (
        <div className={`${styles["intro"]} ${styles["box"]}`}>
          <div className={styles["intro-title"]}>
            Introduction
            <IconButton
              onClick={handleProfileMenuOpen}
              className={styles["intro-menu"]}
            >
              <MoreHoriz />
            </IconButton>
            {updateUserSuccess && (
              <CustomizedSnackbars
                title="Update user success!"
                type="success"
              />
            )}
            {updateUserError && (
              <CustomizedSnackbars title="Update user failed!" type="error" />
            )}
            {renderMenu}
            <Dialog onClose={handleClose} open={open}>
              <DialogTitle>Edit Info</DialogTitle>
              <DialogContent dividers>
                <form>
                  <InputTextField
                    type="text"
                    value={fullname}
                    label="Fullname"
                    onChange={fullnameHandler}
                    required
                  />
                  <InputTextField
                    type="date"
                    value={dob}
                    label="Birthday"
                    onChange={dobHandler}
                    required
                  />
                  <InputTextField
                    type="text"
                    value={job}
                    label="Job"
                    onChange={jobHandler}
                    required
                  />
                  <InputTextField
                    type="text"
                    value={address}
                    label="Address"
                    onChange={addressHandler}
                    required
                  />
                </form>
              </DialogContent>
              <DialogActions>
                <Button color="inherit" onClick={submitHandler}>
                  Save changes
                </Button>
              </DialogActions>
            </Dialog>
          </div>
          <div className={styles["info"]}>
            {data.job && (
              <div className={styles["info-item"]}>
                <i className="bx bxs-briefcase-alt-2"></i>
                Product Designer at <a href="#">{data.job}</a>
              </div>
            )}
            {data.address && (
              <div className={styles["info-item"]}>
                <i className="bx bxs-home"></i>
                Live in <a href="#">{data.address}</a>
              </div>
            )}

            {data?.fullname && (
              <div className={styles["info-item"]}>
                <i className="bx bxs-copy-alt"></i>
                Full name <a href="#">{data?.fullname}</a>
              </div>
            )}
            {data?.dob && (
              <div className={styles["info-item"]}>
                <i className="bx bxs-cake"></i>
                {data?.dob}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default IntroCard
