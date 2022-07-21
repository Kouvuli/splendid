import React, { useState, useEffect, useRef } from "react"
import Box from "@mui/material/Box"
import SearchIcon from "@mui/icons-material/Search"
import InputBase from "@mui/material/InputBase"
import animeApi from "../../apis/animeApi"
import styles from "./Filter.module.scss"
import { styled, alpha } from "@mui/material/styles"
import { useDispatch, useSelector } from "react-redux"
import animeSlice from "../../redux/reducers/animeSlice"
import mangaSlice from "../../redux/reducers/mangaSlice"
import { fetchAllGenres } from "../../redux/reducers/animeSlice"
import { fetchAllGenresManga } from "../../redux/reducers/mangaSlice"
import { animeGenresSelector, mangaGenresSelector } from "../../redux/selectors"
import { Button, IconButton } from "@mui/material"
const statuses = ["Airing", "Upcoming", "Complete"]
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
const Filter = ({ type = "anime", status }) => {
  const dispatch = useDispatch()
  const [inputSearch, setInputSearch] = useState(null)
  const [minScore, setMinScore] = useState(0)
  const [maxScore, setMaxScore] = useState(10)
  var slice
  var selector
  if (type === "anime") {
    selector = animeGenresSelector
    slice = animeSlice
  } else {
    selector = mangaGenresSelector
    slice = mangaSlice
  }
  const allGenres = useSelector(selector)
  useEffect(() => {
    const params = {
      filter: "genres"
    }
    if (type === "anime") {
      dispatch(fetchAllGenres(params))
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
  return (
    <>
      <div className={`${styles["box"]} ${styles["filter-toggle-box"]}`}>
        <button
          className={`${styles["btn-flat"]} ${styles["btn-hover"]}`}
          id="filter-close"
        >
          close
        </button>
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
          {statuses.map((item, i) => {
            return (
              <li
                key={i}
                className={`${status === item ? styles["active"] : styles[""]}`}
                onClick={handleChangeStatus}
              >
                {item}
              </li>
            )
          })}
        </ul>
      </Box>
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
    </>
  )
}

export default Filter
