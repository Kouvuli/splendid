import React from "react";
import TopNavBar from "../../components/Bar/TopNavBar";
import SideNavBar from "../../components/Bar/SideNavBar";
import Box from "@mui/material/Box";
import LastestNewsList from "../../components/List/LatestNewsList";
import DailyNewsList from "../../components/List/DailyNewsList";
import Carousel from "../../components/Carousel/Carousel";
import { Container, Grid } from "@mui/material";
import styles from "./Home.module.css";
const Home = () => {
  return (
    <Box sx={{ backgroundColor: "background.default" }}>
      {/* Header */}
      <Grid container>
        <Grid item xs={12} md={12}>
          <TopNavBar />
        </Grid>
      </Grid>
      {/* Content */}
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        maxWidth="1170px"
        marginTop="50px"
        marginLeft="auto"
        marginRight="auto"
      >
        <Grid item xs={12} md={12}>
          <div className={styles["carousel-section"]}>
            <Carousel />
          </div>
        </Grid>
      </Grid>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        maxWidth="1170px"
        marginLeft="auto"
        marginRight="auto"
      >
        <Grid item xs={12} md={9}>
          <div className={`${styles["blog-section"]} ${styles["spad"]}`}>
            <DailyNewsList />
          </div>
        </Grid>
        <Grid item md={3}>
          <LastestNewsList />
        </Grid>
      </Grid>
      <Container>{/* Footer */}</Container>
      <SideNavBar />
    </Box>
  );
};

export default Home;
