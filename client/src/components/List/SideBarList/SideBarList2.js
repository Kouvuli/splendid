import { useEffect } from "react"
import SideBarListItem2 from "../../Item/SideBar/SideBarListItem2"
import styles from "./SideBarList2.module.scss"
import { useSelector, useDispatch } from "react-redux"
import { fetchTopAnime, fetchTopManga } from "../../../redux/reducers/homeSlice"
import { homeSelector } from "../../../redux/selectors"
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt"
import CardSkeleton from "../../UI/CardSkeleton"
import { CARD_TYPES } from "../../../constants"
const SideBarList2 = (props) => {
  const dispatch = useDispatch()
  const { topMangaLoading, topManga, topMangaError } = useSelector(homeSelector)
  const { title } = props
  useEffect(() => {
    // const fetchAnimeById = async () => {
    //   const response = await animeApi.getAnimeById(id)
    //   setData(response.data)
    // }
    // fetchAnimeById()
    dispatch(fetchTopManga({ limit: 3 }))
  }, [dispatch])
  return (
    <div className={styles["product__sidebar__view"]}>
      <div className={styles["section-title"]}>
        <h5>{title}</h5>
      </div>
      <ul className={styles["filter__controls"]}>
        <a href="/top/manga">
          View All
          <ArrowRightAltIcon className={styles["arrow_right"]} />
        </a>
      </ul>
      {topMangaLoading && (
        <>
          <CardSkeleton type={CARD_TYPES.SMALL_HORIZONTAL} />
          <CardSkeleton type={CARD_TYPES.SMALL_HORIZONTAL} />
          <CardSkeleton type={CARD_TYPES.SMALL_HORIZONTAL} />
        </>
      )}
      {topManga &&
        !topMangaLoading &&
        topManga.map((item, index) => {
          return <SideBarListItem2 key={index} data={item} />
        })}
    </div>
  )
}

export default SideBarList2
