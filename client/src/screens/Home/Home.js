import React, { useState, useEffect } from "react"
import DailyNewsList from "../../components/List/DailyNewsList"
import Carousel from "../../components/Carousel/Carousel"
import Grid from "@mui/material/Grid"
import styles from "./styles.module.scss"
import animeApi from "../../apis/animeApi"
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt"
import CardCarousel from "../../components/Carousel/CardCarousel"
import SideBarList from "../../components/List/SideBarList/SideBarList"
import { useSelector, useDispatch } from "react-redux"
import {
  fetchSeasonNow,
  fetchSeasonUpcoming,
  fetchRecentAnimeRec,
  fetchRecentMangaRec
} from "../../redux/reducers/homeSlice"
import { homeSelector } from "../../redux/selectors"
import Preloader from "../../components/Preloader"

const Home = () => {
  const dispatch = useDispatch()
  const {
    topAnimeLoading,
    topMangaLoading,
    seasonUpcomingLoading,
    seasonUpcoming,
    seasonNowLoading,
    seasonNow,
    recentAnimeRecLoading,
    recentMangaRec,
    recentMangaRecLoading,
    recentAnimeRec
  } = useSelector(homeSelector)
  // const [topList, setTopList] = useState([])
  useEffect(() => {
    // const fetTopMovies = async () => {
    //   const response = await animeApi.getTopAnime()
    //   console.log(response.data)
    //   setTopList(response.data)
    // }
    // fetTopMovies()
    dispatch(fetchSeasonNow({ page: 1, limit: 10 }))
    dispatch(fetchSeasonUpcoming({ page: 1, limit: 10 }))
    dispatch(fetchRecentAnimeRec({ page: 1 }))
    dispatch(fetchRecentMangaRec({ page: 1 }))
  }, [dispatch])

  return (
    <>
      {(topAnimeLoading ||
        topMangaLoading ||
        seasonUpcomingLoading ||
        seasonNowLoading ||
        recentAnimeRecLoading ||
        recentMangaRecLoading) && <Preloader />}
      {
        <>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            maxWidth="1170px"
            paddingTop="100px"
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
            <Grid item xs={12} lg={9}>
              {/* <div className={`${styles["news-section"]}`}>
            <DailyNewsList />
          </div> */}
              <Grid item xs={12}>
                <div className={styles["movie-section"]}>
                  <div className={`${styles["section-title"]}`}>
                    <Grid container justifyContent="center">
                      <Grid item xs={12}>
                        <h4>Season 2022</h4>
                      </Grid>
                    </Grid>
                  </div>
                  {seasonNow.length > 0 && (
                    <CardCarousel
                      carouselType="2"
                      loading={seasonNowLoading}
                      data={seasonNow}
                    />
                  )}
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className={styles["movie-section"]}>
                  <div className={`${styles["section-title"]}`}>
                    <Grid container justifyContent="center">
                      <Grid item xs={12}>
                        <h4>Season Upcoming</h4>
                      </Grid>
                    </Grid>
                  </div>
                  {seasonUpcoming.length > 0 && (
                    <CardCarousel
                      carouselType="2"
                      loading={seasonUpcomingLoading}
                      data={seasonUpcoming}
                    />
                  )}
                </div>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={3}>
              <SideBarList />
            </Grid>

            <Grid item xs={12}>
              <div className={styles["movie-section"]}>
                <div className={`${styles["section-title"]}`}>
                  <Grid container justifyContent="center">
                    <Grid item xs={12}>
                      <h4>Recent Anime Recommendations</h4>
                    </Grid>
                  </Grid>
                </div>
                {recentAnimeRec.length > 0 && (
                  <CardCarousel
                    carouselType="3"
                    loading={recentAnimeRecLoading}
                    data={recentAnimeRec}
                  />
                )}
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className={styles["movie-section"]}>
                <div className={`${styles["section-title"]}`}>
                  <Grid container justifyContent="center">
                    <Grid item xs={12}>
                      <h4>Recent Manga Recommendations</h4>
                    </Grid>
                  </Grid>
                </div>
                {recentMangaRec.length > 0 && (
                  <CardCarousel
                    carouselType="3"
                    type="manga"
                    loading={recentMangaRecLoading}
                    data={recentMangaRec}
                  />
                )}
              </div>
            </Grid>
          </Grid>
        </>
      }
    </>
  )
}

export default Home
