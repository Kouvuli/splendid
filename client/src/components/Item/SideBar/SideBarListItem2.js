import React from "react"
import styles from "./SideBarListItem2.module.scss"
const SideBarListItem2 = ({ data }) => {
  return (
    <div className={styles["product__sidebar__comment__item"]}>
      <a href={`/manga/${data.mal_id}`}>
        <div className={styles["product__sidebar__comment__item__pic"]}>
          <img src={data.images.jpg.large_image_url} alt="" />
        </div>
      </a>

      <div className={styles["product__sidebar__comment__item__text"]}>
        {data.genres && (
          <ul>
            {data.genres.map((genre, i) => {
              return <li key={i}>{genre.name}</li>
            })}
          </ul>
        )}
        <h5>
          <a href={`/manga/${data.mal_id}`}>{data.title}</a>
        </h5>
        <span>
          <i className="fa fa-eye"></i> Score: {data.score}
        </span>
      </div>
    </div>
  )
}

export default SideBarListItem2
