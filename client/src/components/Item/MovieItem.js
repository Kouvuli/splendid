import React from "react";
import Grid from "@mui/material/Grid";
import styles from "./MovieItem.module.css";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
const MovieItem = (props) => {
  return (
    <Grid item xs={12} sm={5} md={4}>
      <div class={styles["product__item"]}>
        <div
          class={`${styles["product__item__pic"]} ${styles["set-bg"]}`}
          style={{
            backgroundImage: `url(${props.images.jpg.large_image_url})`,
          }}
        >
          <div class={styles["ep"]}>
            {props.airing ? "?" : props.episodes} / {props.episodes}
          </div>
          <div class={styles["comment"]}>
            <ChatBubbleIcon></ChatBubbleIcon> {props.score}
          </div>
          <div class={styles["view"]}>
            <RemoveRedEyeIcon></RemoveRedEyeIcon> {props.scored_by}
          </div>
        </div>
        <div class={styles["product__item__text"]}>
          <ul>
            {props.genres.map((genre) => {
              return <li>{genre.name}</li>;
            })}
          </ul>
          <h5>
            <a href={`/category/${props.mal_id}`}>{props.title}</a>
          </h5>
        </div>
      </div>
    </Grid>
  );
};

export default MovieItem;
