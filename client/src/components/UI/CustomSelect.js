import React, { useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { styled, alpha } from "@mui/material/styles";
const VerticalSelect = styled(Select)(({ theme }) => ({}));
const CustomSelect = () => {
  const [order, setOrder] = useState("Latest");

  const handleChange = (event) => {
    setOrder(event.target.value);
  };
  return (
    <Select
      value={order}
      onChange={handleChange}
      displayEmpty
      variant="outlined"
      defaultValue={"Latest"}
      inputProps={{ "aria-label": "Order by" }}
    >
      <MenuItem value="Latest">Lastest</MenuItem>
      <MenuItem value="A-Z">A-Z</MenuItem>
      <MenuItem value="1-10">1-10</MenuItem>
      <MenuItem value="1-50">1-50</MenuItem>
    </Select>
  );
};

export default CustomSelect;
