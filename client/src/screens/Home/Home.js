import React from "react";
import TopNavBar from "../../components/Bar/TopNavBar";
import SideNavBar from "../../components/Bar/SideNavBar";
import Box from "@mui/material/Box";
import SideBarList from "../../components/List/SideBarList/SideBarList";
import DailyNewsList from "../../components/List/DailyNewsList";
import Carousel from "../../components/Carousel/Carousel";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Footer from "../../components/Footer/Footer";
import { Container, Grid } from "@mui/material";
import styles from "./Home.module.css";
import MovieList from "../../components/List/MovieList";
const Home = () => {
  return (
    <Box sx={{ backgroundColor: "background.default" }}>
      <SideNavBar />
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
        maxWidth="1170px"
        marginLeft="auto"
        marginRight="auto"
        paddingTop="106px"
        paddingBottom="106px"
      >
        <Grid item xs={12} md={8}>
          <div className={`${styles["news-section"]}`}>
            <DailyNewsList />
          </div>
          <div className={styles["popular-show-section"]}>
            <MovieList title="Popular shows" />
          </div>
        </Grid>
        <SideBarList />
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
