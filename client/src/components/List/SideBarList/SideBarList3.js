import React, { useState, useEffect } from "react"
import SideBarListItem3 from "../../Item/SideBar/SideBarListItem3"
import styles from "./SideBarList3.module.scss"
import { useDispatch, useSelector } from "react-redux"
import { fetchAnimeRelations } from "../../../redux/reducers/animeDetailSlice"
import { animeDetailSelector } from "../../../redux/selectors"
import ResultNotFound from "../../ResultNotFound"
import Loading from "../../Loading"
const SideBarList3 = (props) => {
  const { data, loading, error } = props
  // const [data, setData] = useState(null);

  return (
    <>
      {loading && (
        <>
          <Loading />
        </>
      )}
      {data && (
        <div className={styles["anime__details__sidebar"]}>
          {data.map((item) => {
            return item.entry.map((rel, i) => {
              return (
                <SideBarListItem3 key={i} id={rel.mal_id} type={rel.type} />
              )
            })
          })}
        </div>
      )}
      {!loading && data && data.length === 0 && (
        <ResultNotFound message="No Results" />
      )}
      {error && <ResultNotFound message={error.message} />}
    </>
  )
}

export default SideBarList3
