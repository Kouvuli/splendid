import React from "react";
import Grid from "@mui/material/Grid";
import styles from "./CardCarouselItem.module.css";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
const CardCarouselItem = (props) => {
  return (
    <div class={styles["product__item"]}>
      <div
        class={`${styles["product__item__pic"]} ${styles["set-bg"]}`}
        style={{
          backgroundImage: `url(${props.images.jpg.large_image_url})`,
        }}
      ></div>
      <div class={styles["product__item__text"]}>
        <h5>
          <a href={`/category/${props.mal_id}`}>{props.title}</a>
        </h5>
      </div>
    </div>
  );
};

export default CardCarouselItem;
