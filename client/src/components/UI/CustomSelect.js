import React, { useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { styled, alpha } from "@mui/material/styles";
const VerticalSelect = styled(Select)(({ theme }) => ({}));
const CustomSelect = (props) => {
  const [order, setOrder] = useState("type");

  const handleChange = (event) => {
    setOrder(event.target.value);
    props.handleOrder(event.target.value);
  };
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
  );
};

export default CustomSelect;
