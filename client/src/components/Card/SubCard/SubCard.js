import { useState, useEffect } from "react"

import { Button, DialogActions } from "@mui/material"

import InputTextField from "../../UI/InputTextField"
import styles from "./styles.module.scss"
import _, { forEach } from "lodash"
const SubCard = ({ data }) => {
  const [watching, setWatching] = useState(0)
  const [planning, setPlanning] = useState(0)
  const [finished, setFinished] = useState(0)

  useEffect(() => {
    const countAnimeList = () => {
      forEach(data, (item) => {
        if (item.type === "watching") {
          setWatching((prev) => ++prev)
        }
        if (item.type === "planning") {
          setPlanning((prev) => ++prev)
        }
        if (item.type === "finished") {
          setFinished((prev) => ++prev)
        }
      })
    }
    countAnimeList()
  }, [])
  return (
    <>
      {!_.isEmpty(data) && (
        <div className={`${styles["intro"]} ${styles["box"]}`}>
          <div className={styles["intro-title"]}>Statistic</div>
          <div className={styles["info"]}>
            <div className={styles["info-item"]}>
              <i class="bx bxs-notepad"></i>
              Planning <a href="#">{planning}</a>
            </div>

            <div className={styles["info-item"]}>
              <i class="bx bxs-tv"></i>
              Watching <a href="#">{watching}</a>
            </div>

            <div className={styles["info-item"]}>
              <i class="bx bxs-check-square"></i>
              Finished <a href="#">{finished}</a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default SubCard
