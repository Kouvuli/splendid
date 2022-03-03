import React, { useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { styled, alpha } from "@mui/material/styles";
const VerticalSelect = styled(Select)(({ theme }) => ({}));
const CustomSelect = () => {
  const [order, setOrder] = useState("title");

  const handleChange = (event) => {
    setOrder(event.target.value);
  };
  return (
    <Select
      value={order}
      onChange={handleChange}
      displayEmpty
      variant="outlined"
      defaultValue={"title"}
      inputProps={{ "aria-label": "Order by" }}
    >
      <MenuItem value="title">Lastest</MenuItem>
      <MenuItem value="type">Type</MenuItem>
      <MenuItem value="rating">Rating</MenuItem>
      <MenuItem value="score">Score</MenuItem>
    </Select>
  );
};

export default CustomSelect;
