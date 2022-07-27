/* eslint-disable jsx-a11y/anchor-is-valid */
import { Grid, Tab, Tabs } from "@mui/material"
import { useEffect, useState } from "react"
import styles from "./styles.module.scss"
import DefaultUser from "../../assets/images/default-user.jpg"
import DefaultBackground from "../../assets/images/default-background.jpg"
import { useDispatch, useSelector } from "react-redux"
import {
  fetchUserById,
  fetchActivityByUserId,
  fetchAnimeList,
  fetchMangaList
} from "../../redux/reducers/profileSlice"
import profileSlice from "../../redux/reducers/profileSlice"
import { profileSelector } from "../../redux/selectors"
import Preloader from "../../components/Preloader"
import CustomizedSnackbars from "../../components/UI/CustomizedSnackbars"
import TabPanel from "../../components/UI/TabPanel"
import { styled, alpha } from "@mui/material/styles"
import StatusCard from "../../components/Card/StatusCard/StatusCard"
import EventCard from "../../components/Card/EventCard"
import RecentlyAddCard from "../../components/Card/PageCard/PageCard"
import CreateStatusCard from "../../components/Card/CreateStatusCard"
import IntroCard from "../../components/Card/IntroCard/IntroCard"
import InfiniteScroll from "react-infinite-scroll-component"
import CardSkeleton from "../../components/UI/CardSkeleton"
import { CARD_TYPES } from "../../constants"
import SubCard from "../../components/Card/SubCard"
import { forEach } from "lodash"
import ListCard from "../../components/Card/ListCard"
import _ from "lodash"
const CustomTabs = styled(Tabs)(({ theme }) => ({
  "& .MuiTabs-indicator": {
    backgroundColor: theme.palette.secondary.main
  },
  "& .MuiTabs-scroller": {
    zIndex: "2"
  }
}))

const CustomTab = styled(Tab)(({ theme }) => ({
  // color: theme.palette.secondary.main,
  // fontFamily: "inherit",
  textTransform: "capitalize",
  fontWeight: "600",
  fontSize: "15px",
  "&.MuiTab-textColorPrimary": {
    color: "none"
  },
  "&.Mui-selected": {
    color: "#fff"
  }
}))

const CustomTabPanel = styled(TabPanel)(({ theme }) => ({
  // color: theme.palette.secondary.main,
  // fontFamily: "inherit",

  "& .MuiBox-root": {
    padding: "0"
  }
}))
const Profile = () => {
  const dispatch = useDispatch()
  const {
    currentUser,
    data,
    loading,
    error,
    activities,
    activitiesLimit,
    activitiesPage,
    activitiesHasNext,
    activitiesError,
    animeList,
    animeListHasNext,
    animeListPage,
    animeListLimit,
    mangaList,
    mangaListHasNext,
    mangaListPage,
    mangaListLimit
  } = useSelector(profileSelector)
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))

    dispatch(profileSlice.actions.addUser(user))

    dispatch(fetchUserById(user?.id))
    dispatch(
      fetchActivityByUserId({
        author_id: user?.id,
        page: activitiesPage,
        limit: activitiesLimit
      })
    )
    dispatch(
      fetchAnimeList({
        user_id: user?.id,
        mal_type: "anime",
        page: animeListPage,
        limit: animeListLimit
      })
    )
    dispatch(
      fetchMangaList({
        user_id: user?.id,
        mal_type: "manga",
        page: mangaListPage,
        limit: mangaListLimit
      })
    )
  }, [dispatch])
  const [value, setValue] = useState(0)

  const fetchMoreActivities = () => {
    dispatch(
      fetchActivityByUserId({
        author_id: currentUser?.id,
        page: activitiesPage,
        limit: activitiesLimit
      })
    )
  }
  const fetchMoreAnimeList = () => {
    dispatch(
      fetchAnimeList({
        user: currentUser?.id,
        page: animeListPage,
        limit: animeListLimit
      })
    )
  }
  const fetchMoreMangaList = () => {
    dispatch(
      fetchMangaList({
        user_id: currentUser?.id,
        mal_type: "manga",
        page: mangaListPage,
        limit: mangaListLimit
      })
    )
  }
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Grid
      container
      justifyContent="center"
      maxWidth="1170px"
      marginLeft="auto"
      marginRight="auto"
      paddingTop="106px"
      paddingBottom="106px"
      spacing={0}
    >
      {!loading && error && !currentUser && (
        <CustomizedSnackbars title="Sign in to see your profile!" type="info" />
      )}
      {!loading && activitiesError && currentUser && (
        <CustomizedSnackbars title="Your token has expired!" type="warning" />
      )}
      {loading && <Preloader />}
      {!loading && (
        <div className={styles["main-container"]}>
          <div className={styles["profile"]}>
            <div className={styles["profile-avatar"]}>
              <img
                src={!data.avatar ? DefaultUser : data.avatar}
                alt=""
                className={styles["profile-img"]}
              />
              <div className={styles["profile-name"]}>{data?.username}</div>
            </div>
            <img
              src={DefaultBackground}
              alt=""
              className={styles["profile-cover"]}
            />
            <CustomTabs
              className={styles["profile-menu"]}
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <CustomTab
                className={`${styles["profile-menu-link"]} ${
                  value === 0 ? styles["active"] : ""
                }`}
                label="Overview"
              />
              <CustomTab
                className={`${styles["profile-menu-link"]}`}
                label="Anime List"
              />
              <CustomTab
                className={`${styles["profile-menu-link"]}`}
                label="Manga List"
              />
            </CustomTabs>
            {/* <div className={styles["profile-menu"]}>
              <a
                className={`${styles["profile-menu-link"]} ${styles["active"]}`}
              >
                Timeline
              </a>
              <a className={styles["profile-menu-link"]}>About</a>
              <a className={styles["profile-menu-link"]}>Friends</a>
              <a className={styles["profile-menu-link"]}>Photos</a>
              <a className={styles["profile-menu-link"]}>More</a>
     
              
            </div> */}
          </div>
          <CustomTabPanel value={value} index={0}>
            <div className={styles["timeline"]}>
              <div className={styles["timeline-left"]}>
                <IntroCard data={data} />
                {/* <EventCard data />
                <PageCard data /> */}
              </div>
              <div className={styles["timeline-right"]}>
                {/* <CreateStatusCard data={data} /> */}
                <InfiniteScroll
                  dataLength={activities.length}
                  next={fetchMoreActivities}
                  hasMore={activitiesHasNext}
                  loader={
                    <>
                      <CardSkeleton type={CARD_TYPES.HORIZONTAL} />
                    </>
                  }
                >
                  {activities.map((activity) => {
                    return <StatusCard user={data} data={activity}></StatusCard>
                  })}
                </InfiniteScroll>
              </div>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <div className={styles["timeline"]}>
              <div className={styles["timeline-left"]}>
                {/* <EventCard data /> */}
                <SubCard type="anime" data={animeList} />
              </div>
              <div className={styles["timeline-right"]}>
                {/* <CreateStatusCard data={data} /> */}
                <InfiniteScroll
                  dataLength={animeList.length}
                  next={fetchMoreAnimeList}
                  hasMore={animeListHasNext}
                  loader={
                    <>
                      <CardSkeleton type={CARD_TYPES.HORIZONTAL} />
                    </>
                  }
                >
                  {animeList.map((item) => {
                    return <ListCard user={data} data={item}></ListCard>
                  })}
                </InfiniteScroll>
              </div>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <div className={styles["timeline"]}>
              <div className={styles["timeline-left"]}>
                {/* <EventCard data /> */}
                <SubCard type="manga" data={mangaList} />
              </div>
              <div className={styles["timeline-right"]}>
                {/* <CreateStatusCard data={data} /> */}
                <InfiniteScroll
                  dataLength={mangaList.length}
                  next={fetchMoreMangaList}
                  hasMore={mangaListHasNext}
                  loader={
                    <>
                      <CardSkeleton type={CARD_TYPES.HORIZONTAL} />
                    </>
                  }
                >
                  {mangaList.map((item) => {
                    return <ListCard user={data} data={item}></ListCard>
                  })}
                </InfiniteScroll>
              </div>
            </div>
          </CustomTabPanel>
        </div>
      )}
    </Grid>
  )
}

export default Profile
