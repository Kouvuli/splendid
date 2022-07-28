import React from "react"
import Grid from "@mui/material/Grid"
import styles from "./CardCarouselItem.module.scss"
import ChatBubbleIcon from "@mui/icons-material/ChatBubble"
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye"
const CardCarouselItem = (props) => {
  const { type, data } = props
  return (
    <div className={styles["product__item"]}>
      <a href={`/${type}/${data.mal_id}`}>
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
          {data.scored_by && (
            <div className={styles["view"]}>
              <RemoveRedEyeIcon sx={{ fontSize: "0.75rem" }}></RemoveRedEyeIcon>{" "}
              {data.scored_by}
            </div>
          )}
        </div>
      </a>

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
  )
}

export default CardCarouselItem
