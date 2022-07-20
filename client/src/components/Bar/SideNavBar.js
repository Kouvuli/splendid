import React, { useState } from "react"
import HomeIcon from "@mui/icons-material/Home"
import MenuBookIcon from "@mui/icons-material/MenuBook"
import MovieIcon from "@mui/icons-material/Movie"
import styles from "./styles.module.scss"
import Tooltip from "@mui/material/Tooltip"
const SideNavBar = () => {
  const [isHome, setIsHome] = useState(true)
  const [isManga, setIsManga] = useState(false)
  const [isAnime, setIsAnime] = useState(false)
  const homeHandler = () => {
    setIsHome(true)
    setIsManga(false)
    setIsAnime(false)
  }
  const mangaHandler = () => {
    setIsManga(true)
    setIsHome(false)
    setIsAnime(false)
  }
  const animeHandler = () => {
    setIsAnime(true)
    setIsHome(false)
    setIsManga(false)
  }
  return (
    <nav className={styles["sidebar-navigation"]}>
      <ul>
        <Tooltip title="Home" placement="right">
          <li
            className={`${isHome ? styles["active"] : ""}`}
            onClick={homeHandler}
          >
            <HomeIcon></HomeIcon>
          </li>
        </Tooltip>
        <Tooltip title="Manga" placement="right">
          <li
            className={`${isManga ? styles["active"] : ""}`}
            onClick={mangaHandler}
          >
            <MenuBookIcon />
          </li>
        </Tooltip>
        <Tooltip title="Anime" placement="right">
          <li
            className={`${isAnime ? styles["active"] : ""}`}
            onClick={animeHandler}
          >
            <MovieIcon></MovieIcon>
          </li>
        </Tooltip>
      </ul>
    </nav>
  )
}

export default SideNavBar
