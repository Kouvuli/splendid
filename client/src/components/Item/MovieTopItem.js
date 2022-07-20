import React from "react"
import Grid from "@mui/material/Grid"
import styles from "./MovieTopItem.module.scss"
import ChatBubbleIcon from "@mui/icons-material/ChatBubble"
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye"
import { CARD_TYPES } from "../../constants"
import CardSkeleton from "../UI/CardSkeleton"
import Loading from "../Loading"
import LoadingCardSkeleton from "../LoadingCardSkeleton"
const MovieTopItem = ({ type = "anime", data }) => {
  return (
    <>
      {data && (
        <Grid item xs={12} sm={5} md={4} lg={3}>
          <div className={styles["product__item"]}>
            <div
              className={`${styles["product__item__pic"]} ${styles["set-bg"]}`}
              style={{
                backgroundImage: `url(${data.images.jpg.large_image_url})`
              }}
            >
              {data.airing && data.episodes && (
                <div className={styles["ep"]}>
                  {data.airing ? "?" : data.episodes} / {data.episodes}
                </div>
              )}
              {data.score && (
                <div className={styles["comment"]}>
                  <i className="bx bxs-star"></i> {data.score}
                </div>
              )}
              {data.scored_by && (
                <div className={styles["view"]}>
                  <RemoveRedEyeIcon
                    className="bx"
                    style={{ fontSize: "12px", display: "inline-block" }}
                  ></RemoveRedEyeIcon>{" "}
                  {data.scored_by}
                </div>
              )}
              <div className={styles["rank"]}>
                {data.rank === 1 && (
                  <>
                    <i
                      className="bx bxs-crown"
                      style={{ color: "#ffe500" }}
                    ></i>
                  </>
                )}
                {data.rank === 2 && (
                  <>
                    <i
                      className="bx bxs-crown"
                      style={{ color: "#ccccc5" }}
                    ></i>
                  </>
                )}
                {data.rank === 3 && (
                  <>
                    <i
                      className="bx bxs-crown"
                      style={{ color: "#fba661" }}
                    ></i>
                  </>
                )}
                {data.rank !== 1 &&
                  data.rank !== 2 &&
                  data.rank !== 3 &&
                  data.rank}
              </div>
            </div>

            <div className={styles["product__item__text"]}>
              {data.genres && (
                <ul>
                  {data.genres.map((genre, i) => {
                    return <li key={i}>{genre.name}</li>
                  })}
                </ul>
              )}

              <h5>
                <a href={`/${type}/${data.mal_id}`}>{data.title}</a>
              </h5>
            </div>
          </div>
        </Grid>
      )}
    </>
  )
}

export default MovieTopItem
