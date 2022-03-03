import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import { styled, alpha } from "@mui/material/styles";
import styles from "./FilterList.module.css";
import FilterItem from "../Item/FilterItem";

export default function FilterList(props) {
  const { title } = props;
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <div className={styles["product__sidebar"]}>
      <div className={styles["section-title"]}>
        <h5>{title}</h5>
      </div>
      <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <List component="nav" aria-label="main mailbox folders">
          <FilterItem
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
          />
          <FilterItem
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
          />
          <FilterItem
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)}
          />

          <FilterItem
            selected={selectedIndex === 3}
            onClick={(event) => handleListItemClick(event, 3)}
          />
        </List>
      </Box>
    </div>
  );
}
