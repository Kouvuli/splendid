import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FolderIcon from "@mui/icons-material/Folder";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import styles from "./SideNavBar.module.css";
const CustomBottomNavigation = styled(BottomNavigation)(({ theme }) => ({
  display: "flex",
  position: "absolute",
  right: 15,
  flexDirection: "column",
  width: 50,
  marginTop: "25vh",
  marginBottom: "auto",
  height: "auto",
  boxShadow: "0 0 5px rgba(0,0,0,0.1), 0 0 3px rgba(0,0,0,0.22)",
  borderRadius: "20px",
  backgroundColor: theme.palette.background.default,
}));

const CustomBottomNavigationAction = styled(BottomNavigationAction)(
  ({ theme }) => ({
    minWidth: 50,
    width: 50,
    borderRadius: "20px",
    "&.Mui-selected": {},
  })
);
const SideNavBar = () => {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <CustomBottomNavigation value={value} onChange={handleChange}>
      <CustomBottomNavigationAction
        label="Recents"
        value="recents"
        icon={<RestoreIcon />}
      />
      <CustomBottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<FavoriteIcon />}
      />
      <CustomBottomNavigationAction
        label="Nearby"
        value="nearby"
        icon={<LocationOnIcon />}
      />
      <CustomBottomNavigationAction
        label="Folder"
        value="folder"
        icon={<FolderIcon />}
      />
    </CustomBottomNavigation>
  );
};

export default SideNavBar;
