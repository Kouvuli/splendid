import * as React from "react"
import { Link } from "react-router-dom"

import styles from "./styles.module.scss"
import clsx from "clsx"

import RoundButton from "../UI/Button/RoundButton"
import { PATHS } from "../../routes"

import NavBar from "../NavBar"
import Drawer from "../Drawer"

import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Badge from "@mui/material/Badge"
import MenuItem from "@mui/material/MenuItem"
import Menu from "@mui/material/Menu"

import MenuIcon from "@mui/icons-material/Menu"
import Logo from "../../assets/images/logo.png"
import NotificationsIcon from "@mui/icons-material/Notifications"
import ForumIcon from "@mui/icons-material/Forum"
import SettingsIcon from "@mui/icons-material/Settings"
import AutoStoriesIcon from "@mui/icons-material/AutoStories"
import AccountBoxIcon from "@mui/icons-material/AccountBox"
import PersonIcon from "@mui/icons-material/Person"
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded"
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined"
import LogoutIcon from "@mui/icons-material/Logout"
import { Button, ButtonBase, Dialog, DialogContent } from "@mui/material"
import { authSelector } from "../../redux/selectors"
import { styled } from "@mui/material/styles"
import { useDispatch, useSelector } from "react-redux"
import authSlice from "../../redux/reducers/authSlice"
import Login from "../../screens/Login/Login"
import CustomizedSnackbars from "../UI/CustomizedSnackbars"

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  "&.MuiPaper-root": {
    backgroundColor: "unset",
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.05),rgba(255,255,255,0.07))"
  }
}))

const CustomToolBar = styled(Toolbar)(({ theme }) => ({
  transition: "min-height 0.3s ease",
  minHeight: "75px",
  "&.shrink": {
    minHeight: "64px"
  }
}))

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)
  const [open, setOpen] = React.useState(false)
  const appBarRef = React.useRef(null)
  const toolBarRef = React.useRef(null)
  const isMenuOpen = Boolean(anchorEl)
  const isMobileDrawerOpen = Boolean(mobileMoreAnchorEl)
  React.useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        appBarRef.current.classList.add(styles["shrink"])
        toolBarRef.current.classList.add("shrink")
      } else {
        appBarRef.current.classList.remove(styles["shrink"])
        toolBarRef.current.classList.remove("shrink")
      }
    }
    window.addEventListener("scroll", shrinkHeader)
    return () => {
      window.removeEventListener("scroll", shrinkHeader)
    }
  }, [])

  const dispatch = useDispatch()
  // fake user state
  const { data: user } = useSelector(authSelector)
  // const [user, setUser] = React.useState(false)
  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  const logOutHandler = () => {
    setAnchorEl(null)
    dispatch(authSlice.actions.logOut())
    setTimeout(() => {
      window.location.reload()
    }, 1000)
  }
  const browseItems = [
    {
      component: Link,
      Icon: PlayArrowRoundedIcon,
      label: "Anime",
      linkTo: PATHS.ANIME
    },
    {
      component: Link,
      Icon: AutoStoriesIcon,
      label: "Manga",
      linkTo: PATHS.MANGA
    },
    {
      component: Link,
      Icon: AccountBoxOutlinedIcon,
      label: "Characters",
      linkTo: PATHS.CHARACTERS
    },
    { component: Link, Icon: ForumIcon, label: "Forum", linkTo: PATHS.FORUM }
  ]

  const userItems = [
    {
      component: Link,
      Icon: PersonIcon,
      label: "Profile",
      linkTo: PATHS.PROFILE
    },
    {
      component: Link,
      Icon: NotificationsIcon,
      label: "Notifications",
      linkTo: PATHS.NOTIFICATIONS
    },
    {
      component: Link,
      Icon: SettingsIcon,
      label: "Settings",
      linkTo: PATHS.SETTINGS
    },
    {
      Icon: LogoutIcon,
      label: "Logout",
      linkTo: "",
      handler: logOutHandler
    }
  ]

  const buttons = [
    {
      outlined: true,
      className: styles.btnLogin,
      label: "Login",
      handler: handleClickOpen
    },
    {
      className: styles.btnSignUp,
      label: "Sign Up",

      handler: handleClickOpen
    }
  ]

  const buttonsMobile = [
    {
      outlined: true,
      className: `${styles.btnLogin} ${styles.btnMobile}`,
      label: "Login",
      onClick: handleClickOpen
    },
    {
      className: `${styles.btnSignUp} ${styles.btnMobile}`,
      label: "Sign Up",
      href: PATHS.SIGNUP,
      onClick: handleClickOpen
    }
  ]
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMobileDrawerClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    handleMobileDrawerClose()
  }

  const handleMobileDrawerOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const menuId = "primary-search-account-menu"
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right"
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {userItems.map((item) => (
        <MenuItem
          component={item.component}
          to={item.linkTo}
          key={item.label}
          onClick={item.handler}
        >
          {item.label}
        </MenuItem>
      ))}
    </Menu>
  )

  const mobileDrawerId = "mobile drawer"
  const renderMobileDrawer = (
    <Drawer
      browseItems={browseItems}
      buttons={buttonsMobile}
      user={user}
      userItems={userItems}
      open={isMobileDrawerOpen}
      onClose={handleMobileDrawerClose}
    />
  )

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Dialog maxWidth="lg" open={open} onClose={handleClose}>
        <Login isSignIn={true} handler={setOpen} />
      </Dialog>
      <CustomAppBar ref={appBarRef} position="fixed" className={styles.header}>
        <CustomToolBar ref={toolBarRef}>
          <Link to="/">
            <img style={{ width: "90px" }} src={Logo} alt="Logo" />
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexGrow: 1,
              justifyContent: "space-between"
            }}
          >
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <NavBar items={browseItems} />
            </Box>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {user ? (
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <PersonIcon />
                </IconButton>
              ) : (
                buttons.map((button) => (
                  <RoundButton
                    outlined={button.outlined}
                    handler={button.handler}
                    className={button.className}
                    key={button.label}
                  >
                    {button.label}
                  </RoundButton>
                ))
              )}
            </Box>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileDrawerId}
              aria-haspopup="true"
              onClick={handleMobileDrawerOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </CustomToolBar>
      </CustomAppBar>
      {renderMobileDrawer}
      {renderMenu}
    </Box>
  )
}
