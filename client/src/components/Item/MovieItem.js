import React from "react";
import styles from "./MovieItem.module.css";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
const MovieItem = () => {
  return (
    <div class="product__item">
      <div
        class={`${styles["product__item__pic"]} ${styles["set-bg"]}`}
        style={{
          backgroundImage: `url(https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_topic/vertical_poster_revised-26d2c15979b6-1637052315859-STK6iU1K.jpg?v=0&maxW=320)`,
        }}
      >
        <div class={styles["ep"]}>18 / 18</div>
        <div class={styles["comment"]}>
          <ChatBubbleIcon></ChatBubbleIcon> 11
        </div>
        <div class={styles["view"]}>
          <RemoveRedEyeIcon></RemoveRedEyeIcon> 9141
        </div>
      </div>
      <div class={styles["product__item__text"]}>
        <ul>
          <li>Active</li>
          <li>Movie</li>
        </ul>
        <h5>
          <a href="#">The Seven Deadly Sins: Wrath of the Gods</a>
        </h5>
      </div>
    </div>
  );
};

export default MovieItem;
