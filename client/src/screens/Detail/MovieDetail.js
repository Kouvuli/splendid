import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import BreadCrumb from "../../components/UI/BreadCrumb";
import SideBarList3 from "../../components/List/SideBarList/SideBarList3";
import styles from "./MovieDetail.module.css";
import CommentList from "../../components/List/CommentList";
import Footer from "../../components/Footer/Footer";
const MovieDetail = () => {
  return (
    <Box sx={{ backgroundColor: "background.default" }}>
      <div className={styles["breadcrumb-section"]}>
        <BreadCrumb />
      </div>

      <section className={`${styles["anime-details"]} ${styles["spad"]}`}>
        <Grid
          container
          maxWidth="1170px"
          marginLeft="auto"
          marginRight="auto"
          paddingTop="106px"
          paddingBottom="106px"
        >
          <Grid item xs={12} md={3}>
            <div
              className={`${styles["anime__details__pic"]} ${styles["set-bg"]}`}
              data-setbg="img/anime/details-pic.jpg"
            ></div>
          </Grid>
          <Grid item xs={12} md={9} marginBottom="55px">
            <div className={styles["anime__details__text"]}>
              <div className={styles["anime__details__title"]}>
                <h3>Fate Stay Night: Unlimited Blade</h3>
                <span>フェイト／ステイナイト, Feito／sutei naito</span>
              </div>
              <div className={styles["anime__details__rating"]}>
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
                <span>1.029 Votes</span>
              </div>
              <p>
                Every human inhabiting the world of Alcia is branded by a
                “Count” or a number written on their body. For Hina’s mother,
                her total drops to 0 and she’s pulled into the Abyss, never to
                be seen again. But her mother’s last words send Hina on a quest
                to find a legendary hero from the Waste War - the fabled Ace!
              </p>
              <div className={styles["anime__details__widget"]}>
                <Grid container>
                  <Grid item xs={12} sm={6}>
                    <ul>
                      <li>
                        <span>Type:</span> TV Series
                      </li>
                      <li>
                        <span>Studios:</span> Lerche
                      </li>
                      <li>
                        <span>Date aired:</span> Oct 02, 2019 to ?
                      </li>
                      <li>
                        <span>Status:</span> Airing
                      </li>
                      <li>
                        <span>Genre:</span> Action, Adventure, Fantasy, Magic
                      </li>
                    </ul>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <ul>
                      <li>
                        <span>Scores:</span> 7.31 / 1,515
                      </li>
                      <li>
                        <span>Rating:</span> 8.5 / 161 times
                      </li>
                      <li>
                        <span>Duration:</span> 24 min/ep
                      </li>
                      <li>
                        <span>Quality:</span> HD
                      </li>
                      <li>
                        <span>Views:</span> 131,541
                      </li>
                    </ul>
                  </Grid>
                </Grid>
              </div>
              <div className={styles["anime__details__btn"]}>
                <a href="#" className={styles["follow-btn"]}>
                  <i class="fa fa-heart-o"></i> Follow
                </a>
                <a href="#" className={styles["watch-btn"]}>
                  <span>Watch Now</span> <ArrowForwardIosIcon />
                </a>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} md={8}>
            <div className={styles["comment-section"]}>
              <CommentList />
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <SideBarList3 title="You might like..." />
          </Grid>
        </Grid>
      </section>
      <Grid container>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MovieDetail;
