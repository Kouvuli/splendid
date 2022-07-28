import React, { useEffect, useState } from "react"
import animeApi from "../../../apis/animeApi"
import styles from "./SideBarListItem3.module.scss"
import { fetchAnimeDetail } from "../../../redux/reducers/animeDetailSlice"
import { fetchMangaDetail } from "../../../redux/reducers/mangaDetailSlice"
// import { fetchAnimeDetail } from "../../../redux/reducers/animeDetailSlice"
const SideBarListItem3 = ({ type, id }) => {
  const [data, setData] = useState(null)
  useEffect(() => {
    const fetchDetail = async () => {
      var response = null
      if (type === "anime") {
        response = await animeApi.getAnimeById(id)
      } else {
        response = await animeApi.getMangaById(id)
      }
      setData(response.data)
    }

    fetchDetail()
  }, [id, type])

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
            <a href={`/${type}/${data.mal_id}`}>{data.title}</a>
          </h5>
        </div>
      )}
    </>
  )
}

export default SideBarListItem3
