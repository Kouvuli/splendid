/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import styles from "./styles.module.scss"
import clsx from "clsx"
const FloatingButton = () => {
  return (
    <div>
      <div id={styles["container-floating"]}>
        <div className={clsx(styles.nd4, styles.nds)}>
          <img className={styles.reminder} />
          <p className={styles.letter}>C</p>
        </div>

        <div className={clsx(styles.nd3, styles.nds)}>
          <img
            className={styles.reminder}
            src="//ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/1x/ic_reminders_speeddial_white_24dp.png"
          />
        </div>

        <div className={clsx(styles.nd1, styles.nds)}>
          <p className={styles.letter}>E</p>
        </div>

        <div id={styles["floating-button"]}>
          <p className={styles.plus}>+</p>
          <img
            className={styles.edit}
            src="https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/1x/bt_compose2_1x.png"
          />
        </div>
      </div>
    </div>
  )
}

export default FloatingButton
