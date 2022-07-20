import * as React from "react"
import Grid from "@mui/material/Grid"
import BlogItem from "../Item/Blog/BlogItem"
import FeatureBlog from "../Item/Blog/FeatureBlog"
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt"

import styles from "./DailyNewsList.module.scss"
const DailyNewsList = (props) => {
  const { numberPerPage } = props
  return (
    <Grid
      container
      marginRight="auto"
      marginLeft="auto"
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      <Grid item xs={12}>
        <div className={`${styles["section-title"]}`}>
          <Grid container justifyContent="center">
            <Grid item xs={7} sm={8}>
              <h4>Hot news</h4>
            </Grid>
            <Grid item xs={5} sm={4}>
              <div className={styles["btn__all"]}>
                <a href="#" className={styles["primary-btn"]}>
                  View all
                  <ArrowRightAltIcon className={styles["arrow_right"]} />
                </a>
              </div>
            </Grid>
          </Grid>
        </div>
      </Grid>
      <Grid item xs={12}>
        <FeatureBlog
          date="April 1,2022"
          commentNumber="3"
          title="Masamune-kun - ep 6"
          category="Anime"
          img="https://cdn.animenewsnetwork.com/thumbnails/max400x400/cms/news.4/171698/dressupdarling.jpg"
          author="LDT"
          content="Lorem ipsum dolor sit amet, consectetur adipi-scing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum susp-endisse ultrices gravida. Risus commodo."
        />
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
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
      <Grid item xs={12} sm={6} md={6}>
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
  )
}

export default DailyNewsList
