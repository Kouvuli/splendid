import React from "react"
import styles from "./styles.module.scss"
import _ from "lodash"
import { useDispatch, useSelector } from "react-redux"

const RecentlyAddCard = ({ data }) => {
  return (
    <>
      {!_.isEmpty(data) && (
        <div className={`${styles["pages"]} ${styles["box"]}`}>
          <div className={styles["intro-title"]}>
            Your pages
            <button className={styles["intro-menu"]}></button>
          </div>
          <div className={styles["user"]}>
            <img
              src="https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0f"
              alt=""
              className={styles["user-img"]}
            />
            <div className={styles["username"]}>Chandelio</div>
          </div>
          <div className={styles["user"]}>
            <img
              src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=d5849d81af587a09dbcf3f11f6fa122f"
              alt=""
              className={styles["user-img"]}
            />
            <div className={styles["username"]}>Janet Jolie</div>
          </div>
          <div className={styles["user"]}>
            <img
              src="https://images.unsplash.com/photo-1546539782-6fc531453083?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
              alt=""
              className={styles["user-img"]}
            />
            <div className={styles["username"]}>Patrick Watsons</div>
          </div>
        </div>
      )}
    </>
  )
}

export default RecentlyAddCard
