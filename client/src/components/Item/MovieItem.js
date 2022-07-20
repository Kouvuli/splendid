import React from "react"
import Grid from "@mui/material/Grid"
import styles from "./MovieItem.module.scss"
import ChatBubbleIcon from "@mui/icons-material/ChatBubble"
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye"

const MovieItem = (props) => {
  return (
    <>
      {props && (
        <Grid item xs={12} sm={5} md={4}>
          <div className={styles["product__item"]}>
            <div
              className={`${styles["product__item__pic"]} ${styles["set-bg"]}`}
              style={{
                backgroundImage: `url(${props.images.jpg.large_image_url})`
              }}
            >
              {props.airing && props.episodes && (
                <div className={styles["ep"]}>
                  {props.airing ? "?" : props.episodes} / {props.episodes}
                </div>
              )}
              {props.score && (
                <div className={styles["comment"]}>
                  <i className="bx bxs-star"></i> {props.score}
                </div>
              )}
              {props.scored_by && (
                <div className={styles["view"]}>
                  <RemoveRedEyeIcon
                    className="bx"
                    style={{ fontSize: "12px", display: "inline-block" }}
                  ></RemoveRedEyeIcon>{" "}
                  {props.scored_by}
                </div>
              )}
            </div>
            <div className={styles["product__item__text"]}>
              {props.genres && (
                <ul>
                  {props.genres.map((genre, i) => {
                    return <li key={i}>{genre.name}</li>
                  })}
                </ul>
              )}

              <h5>
                <a href={`/${props.type ? "manga" : "anime"}/${props.mal_id}`}>
                  {props.title}
                </a>
              </h5>
            </div>
          </div>
        </Grid>
      )}
    </>
  )
}

export default MovieItem
