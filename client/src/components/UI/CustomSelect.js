import React, { useState } from "react"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import { styled, alpha } from "@mui/material/styles"
import { useDispatch } from "react-redux"
import animeSlice from "../../redux/reducers/animeSlice"
import mangaSlice from "../../redux/reducers/mangaSlice"
const animeOrder = {
  mal_id: "Id",
  title: "Title",
  type: "Type",
  rating: "Rating",
  start_date: "Start Date",
  end_date: "End Date",
  episodes: "Episodes",
  score: "Score",
  popularity: "Popularity",
  favorites: "Favorites"
}

const mangaOrder = {
  mal_id: "Id",
  title: "Title",
  start_date: "Start Date",
  end_date: "End Date",
  chapters: "Chapters",
  score: "Score",
  popularity: "Popularity",
  favorites: "Favorites"
}
const CustomSelect = ({ type = "Anime" }) => {
  const [order, setOrder] = useState("mal_id")
  const dispatch = useDispatch()
  var slice

  if (type === "Anime") {
    slice = animeSlice
  } else {
    slice = mangaSlice
  }
  const handleChange = (event) => {
    setOrder(event.target.value)
    dispatch(slice.actions.changeOrder(event.target.value))
    // props.handleOrder(event.target.value)
  }
  return (
    <Select
      value={order}
      onChange={handleChange}
      displayEmpty
      variant="outlined"
      defaultValue={"popularity"}
      inputProps={{ "aria-label": "Order by" }}
    >
      {type === "Anime" &&
        Object.keys(animeOrder).map((order, i) => {
          return (
            <MenuItem key={i} value={order} onChange={handleChange}>
              {animeOrder[order]}
            </MenuItem>
          )
        })}
      {type === "Manga" &&
        Object.keys(mangaOrder).map((order, i) => {
          return (
            <MenuItem key={i} value={order} onChange={handleChange}>
              {mangaOrder[order]}
            </MenuItem>
          )
        })}
      {/* <MenuItem value="popularity">Popularity</MenuItem>
      <MenuItem value="rating">Rating</MenuItem>
      <MenuItem value="score">Score</MenuItem>
      <MenuItem value="favorites">Favorites</MenuItem>
      <MenuItem value="rank">Rank</MenuItem>
      <MenuItem value="mal_id">Id</MenuItem>
      <MenuItem value="title">Title</MenuItem>
      <MenuItem value="start_date">Start date</MenuItem>
      <MenuItem value="end_date">End date</MenuItem> */}
    </Select>
  )
}

export default CustomSelect
