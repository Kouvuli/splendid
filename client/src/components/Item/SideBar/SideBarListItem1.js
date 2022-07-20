import React, { useEffect, useState } from "react"
import animeApi from "../../../apis/animeApi"
import styles from "./SideBarListItem1.module.scss"
import { fetchAnimeDetail } from "../../../redux/reducers/animeDetailSlice"
const SideBarListItem1 = ({ id, data }) => {
  useEffect(() => {
    const getAnimeById = async () => {
      const value = await animeApi.getAnimeById(id)
    }
    if (id !== null) {
      getAnimeById(id)
    }
  }, [])

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
            {data.rank === 1 && (
              <>
                <i className="bx bxs-crown" style={{ color: "#ffe500" }}></i>
              </>
            )}
            {data.rank === 2 && (
              <>
                <i className="bx bxs-crown" style={{ color: "#ccccc5" }}></i>
              </>
            )}
            {data.rank === 3 && (
              <>
                <i className="bx bxs-crown" style={{ color: "#fba661" }}></i>
              </>
            )}
          </div>
          <h5>
            <a href={`/anime/${data.mal_id}`}>{data.title}</a>
          </h5>
        </div>
      )}
    </>
  )
}

export default SideBarListItem1
