import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import styles from "./TopViewsList.module.css";
import TopViewsItem from "../Item/TopViewsItem";
const TopViewsList = () => {
  return (
    <div className={styles["product__sidebar__view"]}>
      <div className={styles["section-title"]}>
        <h5>Top Views</h5>
      </div>
      <ul className={styles["filter__controls"]}>
        <li class="active" data-filter="*">
          Day
        </li>
        <li data-filter=".week">Week</li>
        <li data-filter=".month">Month</li>
        <li data-filter=".years">Years</li>
      </ul>
      <div className={styles["filter__gallery"]}>
        <TopViewsItem />
      </div>
    </div>
  );
};

export default TopViewsList;
