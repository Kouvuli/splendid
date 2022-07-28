import React, { useState } from "react"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import { styled, alpha } from "@mui/material/styles"
import { useDispatch } from "react-redux"
import animeSlice from "../../redux/reducers/animeSlice"
import mangaSlice from "../../redux/reducers/mangaSlice"

const CustomSelect = ({ type = "Anime" }) => {
  const [order, setOrder] = useState("type")
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
      <MenuItem value="type">Type</MenuItem>
      <MenuItem value="popularity">Popularity</MenuItem>
      <MenuItem value="rating">Rating</MenuItem>
      <MenuItem value="score">Score</MenuItem>
      <MenuItem value="favorites">Favorites</MenuItem>
      <MenuItem value="rank">Rank</MenuItem>
    </Select>
  )
}

export default CustomSelect
