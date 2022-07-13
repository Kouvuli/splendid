import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import SideBarList from "../../components/List/SideBarList/SideBarList";
import DailyNewsList from "../../components/List/DailyNewsList";
import Carousel from "../../components/Carousel/Carousel";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Footer from "../../components/Footer/Footer";
import Grid from "@mui/material/Grid";
import styles from "./Home.module.css";
import MovieList from "../../components/List/MovieList";
import Header from "../../components/Header/Header";
import animeApi from "../../apis/animeApi";
import CardCarousel from "../../components/Carousel/CardCarousel";
import SideNavBar from "../../components/Bar/SideNavBar";

const items = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bird",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "April Lies",
    imgPath:
      "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_topic/vertical_poster_revised-26d2c15979b6-1637052315859-STK6iU1K.jpg?v=0&maxW=320",
  },
];
const Home = () => {
  const [topList, setTopList] = useState([]);
  useEffect(() => {
    const fetTopMovies = async () => {
      const response = await animeApi.getTop();
      console.log(response.data);
      setTopList(response.data);
    };
    fetTopMovies();
  }, []);
  console.log(topList);
  return (
    <>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        maxWidth="1170px"
        paddingTop="150px"
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
          {topList.length > 0 && (
            <div className={styles["movie-section"]}>
              <CardCarousel type="2" data={topList} />
            </div>
          )}
        </Grid>
        <Grid item sm={12} md={4}></Grid>
      </Grid>
    </>
  );
};

export default Home;
