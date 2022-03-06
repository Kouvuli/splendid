import React from "react";
import CommentItem from "../Item/CommentItem";
import styles from "./CommentList.module.css";
const CommentList = () => {
  return (
    <>
      <div className={styles["anime__details__review"]}>
        <CommentItem />
      </div>
      <div className={styles["anime__details__form"]}>
        <div className={styles["section-title"]}>
          <h5>Your Comment</h5>
        </div>
        <form action="#">
          <textarea placeholder="Your Comment"></textarea>
          <button type="submit">
            <i class="fa fa-location-arrow"></i> Review
          </button>
        </form>
      </div>
    </>
  );
};

export default CommentList;
