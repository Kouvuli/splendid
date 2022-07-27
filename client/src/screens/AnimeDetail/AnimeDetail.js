import React, { useState, useEffect } from "react"
import Grid from "@mui/material/Grid"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
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
  fetchAnimeDetail,
  fetchtAnimeRecommendations,
  fetchAnimeRelations,
  insertList
} from "../../redux/reducers/animeDetailSlice"
import { animeDetailSelector } from "../../redux/selectors"
import RoundButton from "../../components/UI/Button/RoundButton"
import { Menu, MenuItem } from "@mui/material"
import animeDetailSlice from "../../redux/reducers/animeDetailSlice"
import CustomizedSnackbars from "../../components/UI/CustomizedSnackbars"
const AnimeDetail = () => {
  const {
    data,
    recommendations,
    relations,
    relationsLoading,
    relationsError,
    loading,
    currentUser,
    insertListSuccess,
    insertListError,
    insertListLoading
  } = useSelector(animeDetailSelector)
  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(
      animeDetailSlice.actions.addUser(JSON.parse(localStorage.getItem("user")))
    )
    dispatch(fetchAnimeDetail(id))
    dispatch(fetchtAnimeRecommendations(id))
    dispatch(fetchAnimeRelations(id))
  }, [dispatch, id])
  const [value, setValue] = React.useState(0)
  const [anchorEl, setAnchorEl] = React.useState(null)
  const isMenuOpen = Boolean(anchorEl)

  const handleMenuClose = () => {
    setAnchorEl(null)
  }
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const setAsWatchingHandler = () => {
    dispatch(
      insertList({
        mal_id: data.mal_id,
        user: { id: currentUser.id },
        mal_type: "anime",
        mal_title: data.title,
        type: "watching"
      })
    )
  }
  const setAsPlanningHandler = () => {
    dispatch(
      insertList({
        mal_id: data.mal_id,
        user: { id: currentUser.id },
        mal_type: "anime",
        mal_title: data.title,
        type: "planning"
      })
    )
  }
  const setAsCompleteHandler = () => {
    dispatch(
      insertList({
        mal_id: data.mal_id,
        user: { id: currentUser.id },
        mal_type: "anime",
        mal_title: data.title,
        type: "finished"
      })
    )
  }
  const addListItem = [
    {
      label: "Set as Watching",
      handler: setAsWatchingHandler
    },
    {
      label: "Set as Planning",

      handler: setAsPlanningHandler
    },
    {
      label: "Set as Finished",

      handler: setAsCompleteHandler
    }
  ]
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right"
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "left"
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {addListItem.map((item) => (
        <MenuItem
          component={item.component}
          to={item.linkTo}
          key={item.label}
          onClick={item.handler}
        >
          {item.label}
        </MenuItem>
      ))}
    </Menu>
  )

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <>
      {!insertListLoading && insertListSuccess && (
        <CustomizedSnackbars
          title={`Add ${data.title} success!`}
          type="success"
        />
      )}
      {!insertListLoading && insertListError && (
        <CustomizedSnackbars title="Add failed!" type="error" />
      )}
      {!loading && !currentUser && (
        <CustomizedSnackbars title="Sign in to comment!" type="info" />
      )}
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
                                <span>Studios:</span>{" "}
                                {data.studios
                                  .map((studio) => {
                                    return studio.name
                                  })
                                  .join()}
                              </li>
                              <li>
                                <span>Date aired:</span>{" "}
                                {!data.aired.from
                                  ? "?"
                                  : data.aired.prop.from.day +
                                    "/" +
                                    data.aired.prop.from.month +
                                    "/" +
                                    data.aired.prop.from.year}{" "}
                                to{" "}
                                {!data.aired.to
                                  ? "?"
                                  : data.aired.prop.to.day +
                                    "/" +
                                    data.aired.prop.to.month +
                                    "/" +
                                    data.aired.prop.to.year}
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
                        <RoundButton className={styles["follow-btn"]}>
                          Follow
                        </RoundButton>
                        <div className={styles["watch-btn"]}>
                          <RoundButton handler={handleMenuOpen}>
                            Add to list
                          </RoundButton>{" "}
                          <KeyboardArrowDownIcon />
                        </div>
                        {renderMenu}
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    <CharacterList id={id} />
                  </TabPanel>
                  <TabPanel value={value} index={2}>
                    <NewsCardList id={id} />
                  </TabPanel>
                  <TabPanel value={value} index={3}>
                    <ReviewList id={id} />
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
              {data.trailer.embed_url && (
                <Grid item xs={12}>
                  <div className={styles.video}>
                    <iframe
                      src={`${data.trailer.embed_url}`}
                      width="100%"
                      height="600px"
                      title="video"
                    ></iframe>
                  </div>
                </Grid>
              )}
              <Grid item xs={12} md={8} marginTop="1rem" marginBottom="2rem">
                <div className={styles["comment-section"]}>
                  <div className={styles["section-title"]}>
                    <h5>Comments</h5>
                  </div>
                  <CommentList id={id} />
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
                  <CardCarousel carouselType="1" data={recommendations} />
                </Grid>
              )}
            </Grid>
          </section>
        </>
      )}
    </>
  )
}

export default AnimeDetail
