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
import styles from "./CategoryList.module.css";
const CategoryItem = styled(ListItemButton)(({ theme }) => ({
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

export default function SelectedListItem(props) {
  const { title } = props;
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <div className={styles["section-title"]}>
        <h5>{title}</h5>
      </div>
      <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <List component="nav" aria-label="main mailbox folders">
          <CategoryItem
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
          >
            <CategoryText primary="Inbox" />
          </CategoryItem>
          <CategoryItem
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
          >
            <CategoryText primary="Drafts" />
          </CategoryItem>

          <CategoryItem
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)}
          >
            <CategoryText primary="Trash" />
          </CategoryItem>
          <CategoryItem
            selected={selectedIndex === 3}
            onClick={(event) => handleListItemClick(event, 3)}
          >
            <CategoryText primary="Spam" />
          </CategoryItem>
        </List>
      </Box>
    </>
  );
}
