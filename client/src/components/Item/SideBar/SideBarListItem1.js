import React, { useEffect, useState } from "react";
import animeApi from "../../../apis/animeApi";
import styles from "./SideBarListItem1.module.css";
const TopViewsItem = (props) => {
  const { id } = props;
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchAnimeById = async () => {
      const response = await animeApi.getAnimeById(id);
      setData(response.data);
    };
    fetchAnimeById();
  });
  return (
    <>
      {data && (
        <div
          className={`${styles["product__sidebar__view__item"]} ${styles["set-bg"]} ${styles["mix day years"]}`}
          style={{ backgroundImage: `url(${data.images.jpg.large_image_url})` }}
        >
          <div className={styles["ep"]}>
            {data.airing ? "?" : data.episodes}/{data.episodes}
          </div>
          <div className={styles["view"]}>
            <i className="fa fa-eye"></i> {data.scored_by}
          </div>
          <h5>
            <a href={`/category/${data.mal_id}`}>{data.title}</a>
          </h5>
        </div>
      )}
    </>
  );
};

export default TopViewsItem;
