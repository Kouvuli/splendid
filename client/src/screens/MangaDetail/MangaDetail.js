import React, { useEffect } from "react"
import Grid from "@mui/material/Grid"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import SideBarList3 from "../../components/List/SideBarList/SideBarList3"
import styles from "./styles.module.scss"
import Tabs from "@mui/material/Tabs"
import TabPanel from "../../components/UI/TabPanel"
import Tab from "@mui/material/Tab"
import Box from "@mui/material/Box"
import CommentList from "../../components/List/CommentList"
import CardCarousel from "../../components/Carousel/CardCarousel"
import NewsCardList from "../../components/List/NewsCardList"
import CharacterList from "../../components/List/CharacterList"
import ReviewList from "../../components/List/ReviewList"
import { useParams } from "react-router-dom"
import Preloader from "../../components/Preloader"
import { useDispatch, useSelector } from "react-redux"
import {
  fetchMangaDetail,
  fetchtMangaRecommendations,
  fetchMangaRelations
} from "../../redux/reducers/mangaDetailSlice"
import { mangaDetailSelector } from "../../redux/selectors"
const MangaDetail = () => {
  const {
    data,
    recommendationsLoading,
    recommendationsError,
    recommendations,
    relations,
    relationsLoading,
    relationsError,
    loading,
    error
  } = useSelector(mangaDetailSelector)
  const dispatch = useDispatch()
  const { id } = useParams()
  // const [data, setData] = useState(null)
  // const [rec, setRec] = useState(null)
  useEffect(() => {
    // const fetchDetail = async () => {
    //   const response = await animeApi.getAnimeById(id)
    //   setData(response.data)
    // }
    // const fetchtAnimeRecommendations = async () => {
    //   const response = await animeApi.getAnimeRecommendations(id)
    //   setRec(response.data)
    // }
    // fetchtAnimeRecommendations()
    // fetchDetail()
    dispatch(fetchMangaDetail(id))
    dispatch(fetchtMangaRecommendations(id))
    dispatch(fetchMangaRelations(id))
  }, [dispatch, id])
  const [value, setValue] = React.useState(0)
  //   console.log("ANIME_DETAIL")
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  console.log(data)
  return (
    <>
      {loading && <Preloader />}
      {!loading && Object.keys(data).length !== 0 && (
        <>
          <div
            className={styles.banner}
            style={{
              backgroundImage: `url(${data.images.webp.large_image_url})`
            }}
          ></div>

          <section className={`${styles["anime-details"]} ${styles["spad"]}`}>
            <Grid
              container
              maxWidth="1170px"
              marginLeft="auto"
              marginRight="auto"
            >
              <Grid item xs={12} md={3}>
                <div
                  className={`${styles["anime__details__pic"]} ${styles["set-bg"]}`}
                  style={{
                    backgroundImage: `url(${data.images.jpg.large_image_url})`
                  }}
                ></div>
              </Grid>
              <Grid item xs={12} md={9}>
                <Box sx={{ width: "100%" }}>
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs
                      value={value}
                      onChange={handleChange}
                      aria-label="basic tabs example"
                    >
                      <Tab label="Detail" style={{ fontWeight: "700" }} />
                      <Tab
                        label="Character & Staff"
                        style={{ fontWeight: "700" }}
                      />
                      <Tab label="News" style={{ fontWeight: "700" }} />
                      <Tab label="Reviews" style={{ fontWeight: "700" }} />
                    </Tabs>
                  </Box>
                  <TabPanel value={value} index={0}>
                    <div className={styles["anime__details__text"]}>
                      <div className={styles["anime__details__title"]}>
                        <h3>{data.title}</h3>
                        <div>{data.scored_by}</div>
                      </div>
                      {/* <div className={styles["anime__details__rating"]}>
                    <div className={styles["rating"]}>
                      <a href="#">
                        <i class="fa fa-star"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-star"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-star"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-star"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-star-half-o"></i>
                      </a>
                    </div>

                    <span>{data.scored_by}</span>
                  </div> */}
                      <h4 className={styles["title__japanese"]}>
                        {data.title_japanese}
                      </h4>
                      <p>{data.synopsis}</p>
                      <div className={styles["anime__details__widget"]}>
                        <Grid container>
                          <Grid item xs={12} sm={6}>
                            <ul>
                              <li>
                                <span>Type:</span> {data.type}
                              </li>
                              <li>
                                <span>Author:</span>{" "}
                                {data.authors
                                  .map((author) => {
                                    return author.name
                                  })
                                  .join()}
                              </li>
                              <li>
                                <span>Date published:</span>{" "}
                                {!data.published.from
                                  ? "?"
                                  : data.published.prop.from.day +
                                    "/" +
                                    data.published.prop.from.month +
                                    "/" +
                                    data.published.prop.from.year}{" "}
                                to{" "}
                                {!data.published.to
                                  ? "?"
                                  : data.published.prop.to.day +
                                    "/" +
                                    data.published.prop.to.month +
                                    "/" +
                                    data.published.prop.to.year}
                              </li>
                              <li>
                                <span>Status:</span> {data.status}
                              </li>
                              <li>
                                <span>Genre:</span>{" "}
                                {data.genres
                                  .map((genre) => {
                                    return genre.name
                                  })
                                  .join(", ")}
                              </li>
                            </ul>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <ul>
                              <li>
                                <span>Scores:</span> {data.score} /{" "}
                                {data.scored_by}
                              </li>
                              <li>
                                <span>Rating:</span> {data.rating}
                              </li>
                              <li>
                                <span>Duration:</span> {data.duration}
                              </li>
                              <li>
                                <span>Season:</span> {data.season}-{data.year}
                              </li>
                              <li>
                                <span>Favorites:</span> {data.favorites}
                              </li>
                            </ul>
                          </Grid>
                        </Grid>
                      </div>
                      <div className={styles["anime__details__btn"]}>
                        <a href="#" className={styles["watch-btn"]}>
                          <span>Watch Now</span> <ArrowForwardIosIcon />
                        </a>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    <CharacterList id={id} type="manga" />
                  </TabPanel>
                  <TabPanel value={value} index={2}>
                    <NewsCardList id={id} type="manga" />
                  </TabPanel>
                  <TabPanel value={value} index={3}>
                    <ReviewList id={id} type="manga" />
                  </TabPanel>
                </Box>
              </Grid>
            </Grid>
            <Grid
              container
              maxWidth="1170px"
              marginLeft="auto"
              marginRight="auto"
              paddingTop="20px"
              paddingBottom="106px"
            >
              <Grid item xs={12} md={8} marginTop="1rem" marginBottom="2rem">
                <div className={styles["comment-section"]}>
                  <div className={styles["section-title"]}>
                    <h5>Comments</h5>
                  </div>
                  <CommentList />
                </div>
              </Grid>
              <Grid item xs={12} md={4} marginTop="1rem" marginBottom="2rem">
                <div className={styles["section-title"]}>
                  <h5>Related</h5>
                </div>
                <SideBarList3
                  title="Related"
                  data={relations}
                  loading={relationsLoading}
                  error={relationsError}
                />
              </Grid>
              {recommendations && (
                <Grid item xs={12}>
                  <div className={styles["section-title"]}>
                    <h5>Recommendations</h5>
                  </div>
                  <CardCarousel
                    carouselType="1"
                    type="manga"
                    data={recommendations}
                  />
                </Grid>
              )}
            </Grid>
          </section>
        </>
      )}
    </>
  )
}

export default MangaDetail
