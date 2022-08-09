import { useEffect } from "react"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import List from "@mui/material/List"
import Typography from "@mui/material/Typography"
import * as React from "react"
import NewPostDialog from "../../components/NewPostDialog"
import Post from "../../components/Post"
import Button from "../../components/UI/Button/RoundButton"
import CardSkeleton from "../../components/UI/CardSkeleton"
import styles from "./styles.module.scss"
import Banner from "../../assets/images/normal-breadcrumb.jpg"
// import { createPost } from "../../reds/post/postSlice"
import { fetchAllPost, createPost } from "../../redux/reducers/forumSlice"
import forumSlice from "../../redux/reducers/forumSlice"
import { useDispatch, useSelector } from "react-redux"
import { authSelector, forumSelector } from "../../redux/selectors"
import InfiniteScroll from "react-infinite-scroll-component"
import { CARD_TYPES } from "../../constants"
import Loading from "../../components/Loading"
import Preloader from "../../components/Preloader"
import CustomizedSnackbars from "../../components/UI/CustomizedSnackbars"
const Forum = () => {
  const [open, setOpen] = React.useState(false)

  const dispatch = useDispatch()

  const {
    currentUserError,
    loading,
    currentUser,
    error,
    hasNext,
    data,
    page,
    limit
  } = useSelector(forumSelector)

  // const posts = data.data.documents
  useEffect(() => {
    dispatch(fetchAllPost({ page, limit }))
    dispatch(
      forumSlice.actions.addUser(JSON.parse(localStorage.getItem("user")))
    )
  }, [dispatch])
  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  const fetchMorePost = () => {
    dispatch(fetchAllPost({ page, limit }))
  }
  const handleConfirm = (values) => {
    dispatch(createPost({ ...values, author: { id: currentUser?.id } }))
    dispatch(fetchAllPost(page, limit))
    setOpen(false)
    setTimeout(() => {
      window.location.reload()
    }, 1000)
  }

  return (
    <>
      {!loading && !currentUser && (
        <CustomizedSnackbars
          title="Sign in to create post of your own!"
          type="info"
        />
      )}
      {!loading && error && currentUser && (
        <CustomizedSnackbars title="Your token has expired!" type="warning" />
      )}
      {loading && <Preloader />}
      {!loading && (
        <>
          <section
            className={`${styles["normal-breadcrumb"]} ${styles["set-bg"]}`}
            style={{
              backgroundImage: `url(${Banner})`
            }}
          >
            <Grid
              container
              justifyContent="center"
              maxWidth="1170px"
              marginLeft="auto"
              marginRight="auto"
            >
              <Grid item xs={12}>
                <div className={styles["normal__breadcrumb__text"]}>
                  <h2>Our Blog</h2>
                  <p>Welcome to the official Anime Forum.</p>
                </div>
              </Grid>
            </Grid>
          </section>
          <Grid
            container
            justifyContent="center"
            maxWidth="1170px"
            marginLeft="auto"
            marginRight="auto"
            paddingTop="50px"
            paddingBottom="106px"
            columnSpacing={0}
            rowSpacing={3}
          >
            <Grid item xs={12}>
              <div className={styles.createPostBar}>
                <Box sx={{ flexGrow: 1 }} />
                {currentUser && (
                  <>
                    <Button
                      className={styles.createPostBtn}
                      handler={handleClickOpen}
                    >
                      Create Post
                    </Button>
                    <NewPostDialog
                      open={open}
                      handleClose={handleClose}
                      handleConfirm={handleConfirm}
                    ></NewPostDialog>
                  </>
                )}
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className={styles.titleBar}>
                <Typography>Recent Active Posts</Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Typography className={styles.viewAllBtn}>View All</Typography>
              </div>
            </Grid>
            <Grid item className={styles.paddingTopNone} xs={12}>
              <InfiniteScroll
                dataLength={data.length}
                next={fetchMorePost}
                hasMore={hasNext}
                loader={
                  <>
                    <CardSkeleton type={CARD_TYPES.HORIZONTAL} />
                  </>
                }
              >
                <List sx={{ width: "100%" }}>
                  {data &&
                    data.map((post) => {
                      return <Post key={post.id} {...post} />
                    })}
                </List>
              </InfiniteScroll>
            </Grid>
          </Grid>
        </>
      )}
    </>
  )
}

export default Forum
