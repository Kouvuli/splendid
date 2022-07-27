import React from "react"
import styles from "./styles.module.scss"
import _ from "lodash"
const EventCard = ({ data }) => {
  return (
    <>
      {!_.isEmpty(data) && (
        <div className={`${styles["event"]} ${styles["box"]}`}>
          <div className={styles["event-wrapper"]}>
            <img src={data.img} className={styles["event-img"]} />
            <div className={styles["event-date"]}>
              {data.month && (
                <div className={styles["event-month"]}>{data.month}</div>
              )}
              <div className={styles["event-day"]}>{data.day}</div>
            </div>
            <div className={styles["event-title"]}>{data.title}</div>
            <div className={styles["event-subtitle"]}>{data.time}</div>
          </div>
        </div>
      )}
    </>
  )
}

export default EventCard
