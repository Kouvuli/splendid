import { useEffect, useState } from "react"
import styles from "./SideBarList1.module.scss"
import SideBarListItem1 from "../../Item/SideBar/SideBarListItem1"
import { useSelector, useDispatch } from "react-redux"
import { fetchTopAnime, fetchTopManga } from "../../../redux/reducers/homeSlice"
import { homeSelector } from "../../../redux/selectors"
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt"
import CardSkeleton from "../../UI/CardSkeleton"
import { CARD_TYPES } from "../../../constants"
const SideBarList1 = (props) => {
  const dispatch = useDispatch()
  const { topAnimeLoading, topAnime, topAnimeError } = useSelector(homeSelector)
  const { title } = props

  useEffect(() => {
    // const fetchAnimeById = async () => {
    //   const response = await animeApi.getAnimeById(id)
    //   setData(response.data)
    // }
    // fetchAnimeById()
    dispatch(fetchTopAnime({ limit: 3 }))
  }, [dispatch])
  return (
    <div className={styles["product__sidebar__view"]}>
      <div className={styles["section-title"]}>
        <h5>{title}</h5>
      </div>
      <ul className={styles["filter__controls"]}>
        <a href="/top/anime">
          View All
          <ArrowRightAltIcon className={styles["arrow_right"]} />
        </a>
      </ul>
      {topAnimeLoading && (
        <>
          <CardSkeleton type={CARD_TYPES.BOX} />
          <CardSkeleton type={CARD_TYPES.BOX} />
          <CardSkeleton type={CARD_TYPES.BOX} />
        </>
      )}
      {topAnime &&
        !topAnimeLoading &&
        topAnime.map((item, index) => {
          return <SideBarListItem1 key={index} data={item} />
        })}
    </div>
  )
}

export default SideBarList1
