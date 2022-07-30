import React, { useState, useEffect, useRef } from "react"
import Box from "@mui/material/Box"
import SearchIcon from "@mui/icons-material/Search"
import InputBase from "@mui/material/InputBase"
import animeApi from "../../apis/animeApi"
import RoundButton from "../UI/Button/RoundButton"
import styles from "./Filter.module.scss"
import { styled, alpha } from "@mui/material/styles"
import { useDispatch, useSelector } from "react-redux"
import animeSlice from "../../redux/reducers/animeSlice"
import mangaSlice from "../../redux/reducers/mangaSlice"
import { fetchAllGenres as fetchAllGenresAnime } from "../../redux/reducers/animeSlice"
import { fetchAllGenresManga } from "../../redux/reducers/mangaSlice"
import { animeListSelector, mangaListSelector } from "../../redux/selectors"
import { Button, IconButton } from "@mui/material"
import FloatingFilterButton from "../FloatingFilterButton"
const animeStatuses = ["Airing", "Upcoming", "Complete"]
const mangaStatuses = [
  "Publishing",
  "Complete",
  "Hiatus",
  "Discontinued",
  "Upcoming"
]
const ratings = {
  g: "All Ages",
  pg: "Children",
  pg13: "Teens 13 or older",
  r17: "17+ (violence & profanity)",
  r: "Mild Nudity",
  rx: "Hentai"
}
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.75),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 1)
  },
  width: "100%"
}))

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}))
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: "1em",
    transition: theme.transitions.create("width"),
    width: "100%"
  }
}))
const Filter = ({ type = "anime", status, rating }) => {
  const dispatch = useDispatch()
  const [inputSearch, setInputSearch] = useState(null)
  const [minScore, setMinScore] = useState(0)
  const [maxScore, setMaxScore] = useState(10)
  const [isFilter, setIsFilter] = useState(false)
  var slice
  var selector
  if (type === "anime") {
    selector = animeListSelector
    slice = animeSlice
  } else {
    selector = mangaListSelector
    slice = mangaSlice
  }
  const { allGenres } = useSelector(selector)
  useEffect(() => {
    const params = {
      filter: "genres"
    }
    if (type === "anime") {
      dispatch(fetchAllGenresAnime(params))
    } else {
      dispatch(fetchAllGenresManga(params))
    }
  }, [dispatch])
  const handleSearch = (e) => {
    dispatch(slice.actions.search(inputSearch))
    dispatch(slice.actions.changeMinScore(minScore))
    dispatch(slice.actions.changeMaxScore(maxScore))
  }
  const changeInput = (e) => {
    setInputSearch(e.target.value)
  }
  const changeMinScore = (e) => {
    setMinScore(e.target.value)
  }
  const changeMaxScore = (e) => {
    setMaxScore(e.target.value)
  }
  const handleChangeGenres = (e) => {
    if (e.target.checked) {
      dispatch(slice.actions.addGenres(e.target.attributes.id.value))
    } else {
      dispatch(slice.actions.removeGenres(e.target.attributes.id.value))
    }
  }

  const handleChangeStatus = (e) => {
    dispatch(slice.actions.changeStatus(e.target.innerHTML))
  }
  const handleChangeRating = (key) => {
    dispatch(slice.actions.changeRating(key))
  }
  return (
    <>
      <div className={`${styles["box"]} ${styles["filter-toggle-box"]}`}>
        <FloatingFilterButton
          handler={() => {
            setIsFilter(true)
          }}
        />
      </div>
      <Box
        className={
          !isFilter
            ? styles["filter-col"]
            : `${styles["filter-col"]} ${styles["active"]}`
        }
      >
        <div className={`${styles["box"]} ${styles["filter-toggle-box"]}`}>
          <RoundButton
            handler={() => {
              setIsFilter(false)
            }}
          >
            close
          </RoundButton>
        </div>
        <Box>
          <div className={styles["header__right"]}>
            <Search>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                value={inputSearch}
                onChange={changeInput}
              />
            </Search>
            <IconButton sx={{ marginLeft: "10px" }} onClick={handleSearch}>
              <SearchIcon></SearchIcon>
            </IconButton>
          </div>
        </Box>
        <div className={`${styles["section-title"]}`}>
          <h5>Status</h5>
        </div>
        <Box sx={{ backgroundColor: "background.paper", padding: "20px" }}>
          <ul className={styles["filter-list"]}>
            {type === "anime" &&
              animeStatuses.map((item, i) => {
                return (
                  <li
                    key={i}
                    className={`${
                      status === item ? styles["active"] : styles[""]
                    }`}
                    onClick={handleChangeStatus}
                  >
                    {item}
                  </li>
                )
              })}
            {type === "manga" &&
              mangaStatuses.map((item, i) => {
                return (
                  <li
                    key={i}
                    className={`${
                      status === item ? styles["active"] : styles[""]
                    }`}
                    onClick={handleChangeStatus}
                  >
                    {item}
                  </li>
                )
              })}
          </ul>
        </Box>
        {type === "anime" && (
          <>
            <div className={`${styles["section-title"]}`}>
              <h5>Rating</h5>
            </div>
            <Box sx={{ backgroundColor: "background.paper", padding: "20px" }}>
              <ul className={styles["filter-list"]}>
                {Object.keys(ratings).map((item) => {
                  return (
                    <li
                      key={item}
                      className={`${
                        rating === item ? styles["active"] : styles[""]
                      }`}
                      onClick={handleChangeRating.bind(this, item)}
                    >
                      {ratings[item]}
                    </li>
                  )
                })}
              </ul>
            </Box>
          </>
        )}

        <div className={`${styles["section-title"]}`}>
          <h5>Score</h5>
        </div>
        <Box sx={{ backgroundColor: "background.paper", padding: "20px" }}>
          <div className={styles["price-range"]}>
            <input type="text" value={minScore} onChange={changeMinScore} />
            <span>-</span>
            <input type="text" value={maxScore} onChange={changeMaxScore} />
          </div>
        </Box>
        <div className={`${styles["section-title"]}`}>
          <h5>Genres</h5>
        </div>
        <Box sx={{ backgroundColor: "background.paper", padding: "20px" }}>
          <ul className={styles["filter-list"]}>
            {allGenres &&
              allGenres.map((genre, i) => {
                return (
                  <li key={i}>
                    <div className={styles["group-checkbox"]}>
                      <input
                        type="checkbox"
                        id={genre.mal_id}
                        onChange={handleChangeGenres}
                      />
                      <label htmlFor={genre.mal_id}>
                        {genre.name}
                        <span>({genre.count})</span>{" "}
                        <i className="bx bx-check"></i>
                      </label>
                    </div>
                  </li>
                )
              })}
          </ul>
        </Box>
      </Box>
    </>
  )
}

export default Filter
