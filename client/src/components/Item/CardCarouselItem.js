import React from "react";
import Grid from "@mui/material/Grid";
import styles from "./CardCarouselItem.module.css";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
const CardCarouselItem = (props) => {
  const { data } = props;
  console.log(data);
  return (
    <div class={styles["product__item"]}>
      <div
        class={`${styles["product__item__pic"]} ${styles["set-bg"]}`}
        style={{
          backgroundImage: `url(${data.images.jpg.large_image_url})`,
        }}
      >
        {data.airing && data.episodes && (
          <div class={styles["ep"]}>
            {data.airing ? "?" : data.episodes} / {data.episodes}
          </div>
        )}
        {data.scored_by && (
          <div class={styles["view"]}>
            <RemoveRedEyeIcon></RemoveRedEyeIcon> {data.scored_by}
          </div>
        )}
      </div>
      <div class={styles["product__item__text"]}>
        {data.genres && (
          <ul>
            {data.genres.map((genre) => {
              return <li>{genre.name}</li>;
            })}
          </ul>
        )}

        <h5>
          <a href={`/category/${data.mal_id}`}>{data.title}</a>
        </h5>
      </div>
    </div>
  );
};

export default CardCarouselItem;
