import React, { useState, useEffect } from "react"
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
const statuses = ["Airing", "Upcoming", "Complete"]
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
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
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%"
  }
}))
const Filter = ({ type = "anime", status }) => {
  const dispatch = useDispatch()

  // const { allGenres, genres } = useSelector(animeGenresSelector)
  // console.log(allGenres)
  // const [genres, setGenres] = useState([])
  // const [checkedGenres, setCheckedGenres] = useState([])
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
    // const fetchGenres = async () => {
    //   try {
    //     const params = {
    //       filter: "genres"
    //     }
    //     const response = await animeApi.getGenres(params)
    //     setGenres(response.data)
    //   } catch (error) {
    //     throw error
    //   }
    // }
    const params = {
      filter: "genres"
    }
    if (type === "anime") {
      dispatch(fetchAllGenres(params))
    } else {
      dispatch(fetchAllGenresManga(params))
    }
    // setGenres(allGenres)
    // fetchGenres()
  }, [dispatch])

  const handleChangeGenres = (e) => {
    if (e.target.checked) {
      // setCheckedGenres((prevState) => {
      //   return [...prevState, e.target.attributes.id.value]
      // })
      dispatch(slice.actions.addGenres(e.target.attributes.id.value))
    } else {
      dispatch(slice.actions.removeGenres(e.target.attributes.id.value))
      // setCheckedGenres(
      //   checkedGenres.filter((i) => {
      //     return i !== e.target.attributes.id.value
      //   })
      // )
    }
  }
  // dispatch(animeSlice.actions.changeGenres(checkedGenres))
  // props.handleGenres(checkedGenres.join())
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
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <div className={styles["header__right"]}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
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
          <input type="text" />
          <span>-</span>
          <input type="text" />
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
