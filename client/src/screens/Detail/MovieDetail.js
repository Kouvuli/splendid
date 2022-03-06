import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import BreadCrumb from "../../components/UI/BreadCrumb";
import SideBarList3 from "../../components/List/SideBarList/SideBarList3";
import styles from "./MovieDetail.module.css";
import CommentList from "../../components/List/CommentList";
import CardCarousel from "../../components/Carousel/CardCarousel";
import { useParams } from "react-router-dom";
import animeApi from "../../apis/animeApi";
const MovieDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [rec, setRec] = useState(null);
  useEffect(() => {
    const fetchDetail = async () => {
      const response = await animeApi.getAnimeById(id, { params: {} });
      setData(response.data);
    };
    const fetchtAnimeRecommendations = async () => {
      const response = await animeApi.getAnimeRecommendations(id);
      setRec(response.data);
    };
    fetchtAnimeRecommendations();
    fetchDetail();
  }, [id]);

  return (
    <>
      {data && (
        <>
          <div
            className={styles.banner}
            style={{
              backgroundImage: `url(${data.images.webp.large_image_url})`,
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
                    backgroundImage: `url(${data.images.jpg.large_image_url})`,
                  }}
                ></div>
              </Grid>
              <Grid item xs={12} md={9}>
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
                                return studio.name;
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
                                return genre.name;
                              })
                              .join(", ")}
                          </li>
                        </ul>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <ul>
                          <li>
                            <span>Scores:</span> {data.score} / {data.scored_by}
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
              </Grid>
            </Grid>
            <Grid
              container
              maxWidth="1170px"
              marginLeft="auto"
              marginRight="auto"
              paddingBottom="106px"
            >
              {data.trailer.embed_url && (
                <Grid item xs={12}>
                  <div className={styles.video}>
                    <iframe
                      src={`${data.trailer.embed_url}`}
                      width="100%"
                      height="700px"
                      title="video"
                    ></iframe>
                  </div>
                </Grid>
              )}
              <Grid item xs={12} md={8} marginBottom="2rem">
                <div className={styles["comment-section"]}>
                  <div className={styles["section-title"]}>
                    <h5>Comments</h5>
                  </div>
                  <CommentList />
                </div>
              </Grid>
              <Grid item xs={12} md={4} marginBottom="2rem">
                <div className={styles["section-title"]}>
                  <h5>Related</h5>
                </div>
                <SideBarList3 id={id} title="Related" />
              </Grid>
              {rec && (
                <Grid item xs={12}>
                  <div className={styles["section-title"]}>
                    <h5>Recommendations</h5>
                  </div>
                  <CardCarousel data={rec} />
                </Grid>
              )}
            </Grid>
          </section>
        </>
      )}
    </>
  );
};

export default MovieDetail;
