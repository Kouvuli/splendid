import React from "react";
import { styled, alpha } from "@mui/material/styles";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const CustomListItemButton = styled(ListItemButton)(({ theme }) => ({
  color: "#fff",
  "&:hover": {
    backgroundColor: "unset",
  },
  "&.Mui-selected .MuiListItemText-root": {
    color: "#e53637",
    backgroundColor: "unset",
  },
  "&.Mui-selected": {
    backgroundColor: "unset",
  },
  "&.Mui-selected:hover ": {
    backgroundColor: "unset",
  },
}));

const CategoryText = styled(ListItemText)(({ theme }) => ({
  color: "#fff",
  "&:hover": {
    color: "#e53637",
  },
  "&.Mui-selected ": {
    color: "#e53637",
  },
}));

const FilterItem = (props) => {
  return (
    <CustomListItemButton {...props}>
      <CategoryText primary="Inbox" />
    </CustomListItemButton>
  );
};

export default FilterItem;
