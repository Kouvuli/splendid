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
import Grid from "@mui/material/Grid";
import BlogItem from "../Item/BlogItem";
const DailyNewsList = (props) => {
  const { numberPerPage } = props;
  return (
    <Grid
      container
      marginRight="auto"
      marginLeft="auto"
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      <Grid item xs={12} md={6}>
        <BlogItem
          date="April 1,2022"
          commentNumber="3"
          title="Masamune-kun - ep 6"
          category="Anime"
          img="https://cdn.animenewsnetwork.com/thumbnails/max400x400/cms/news.4/171698/dressupdarling.jpg"
          author="LDT"
          content="Lorem ipsum dolor sit amet, consectetur adipi-scing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum susp-endisse ultrices gravida. Risus commodo."
        ></BlogItem>
      </Grid>
      <Grid item xs={12} md={6}>
        <BlogItem
          date="April 1,2022"
          commentNumber="3"
          title="Masamune-kun - ep 6"
          category="Anime"
          img="https://cdn.animenewsnetwork.com/thumbnails/max400x400/cms/news.4/171698/dressupdarling.jpg"
          author="LDT"
          content="Lorem ipsum dolor sit amet, consectetur adipi-scing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum susp-endisse ultrices gravida. Risus commodo."
        ></BlogItem>
      </Grid>
    </Grid>
  );
};

export default DailyNewsList;
