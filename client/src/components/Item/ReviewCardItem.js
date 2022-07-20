import React, { useState } from "react"
import moment from "moment"
import ReadMore from "../UI/ReadMore"
import styles from "./ReviewCardItem.module.scss"
const ReviewCardItem = (props) => {
  const [isToggleOn, setIsToggleOn] = useState(false)
  const scoreHandler = () => {
    setIsToggleOn((prevState) => {
      return !prevState
    })
  }
  const { data } = props
  return (
    <div className={styles["review__item"]}>
      <div className={styles["spaceit"]}>
        <div
          class={styles["mb8"]}
          style={{ float: "right", textAlign: "right" }}
        >
          <div
            style={{ color: "#fff", fontSize: "14px" }}
            title={moment.utc(data.date).local().format("LT")}
          >
            {moment.utc(data.date).local().format("MMM DD, yyyy")}
          </div>
          <div
            className={`${styles["lightLink"]} ${styles["spaceit"]}`}
            style={{ fontSize: "13px" }}
          >
            {data.episodes_watched} episodes seen
          </div>
          <div
            style={{ fontSize: "14px", color: "#fff", marginBottom: "10px" }}
          >
            <a onClick={scoreHandler}>Overall Rating</a>: {data.scores.overall}
          </div>
        </div>
        <div style={{ float: "left" }}>
          <table border="0" cellpadding="0" cellspacing="0" width="100%">
            <tbody>
              <tr>
                <td style={{ verticalAlign: "top" }} width="60">
                  <div className={styles["picSurround"]}>
                    <a href={data.user.url}>
                      <img
                        alt={data.user.username}
                        src={data.user.images.jpg.image_url}
                        style={{ border: "0", width: "48px" }}
                        className=" lazyloaded"
                      />
                    </a>
                  </div>
                </td>
                <td style={{ verticalAlign: "top" }}>
                  <a
                    style={{ fontSize: "15px", fontWeight: "bold" }}
                    href={data.user.url}
                  >
                    {data.user.username}
                  </a>
                  <br />
                  <div
                    className={`${styles["lightLink"]} ${styles["spaceit"]}`}
                  >
                    <strong>
                      <span id="rhelp182712">{data.votes} </span>
                    </strong>
                    people found this review helpful
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div
        className={`${styles["spaceit"]}`}
        style={{
          clear: "both",
          borderTop: "1px solid #ebebeb",
          wordBreak: "break-word",
          wordWrap: "break-word"
        }}
      >
        <div
          style={{
            float: "left",
            margin: "5px 10px 10px 0px",
            display: isToggleOn ? "block" : "none"
          }}
        >
          <table
            border="0"
            width="105"
            cellpadding="0"
            cellspacing="0"
            className={styles["borderClass"]}
            style={{ borderWidth: "1px" }}
          >
            <tbody>
              <tr style={{ fontWeight: "700" }}>
                <td
                  className={`${styles["borderClass"]} ${styles["bgColor1"]}`}
                >
                  Overall
                </td>
                <td
                  className={`${styles["borderClass"]} ${styles["bgColor1"]}`}
                >
                  {data.scores.overall}
                </td>
              </tr>
              <tr style={{ color: "#fff" }}>
                <td className={styles["borderClass"]} align="left">
                  Story
                </td>
                <td className={styles["borderClass"]}>{data.scores.story}</td>
              </tr>
              <tr style={{ color: "#fff" }}>
                <td className={styles["borderClass"]} align="left">
                  Animation
                </td>
                <td className={styles["borderClass"]}>
                  {data.scores.animation}
                </td>
              </tr>
              <tr style={{ color: "#fff" }}>
                <td className={styles["borderClass"]} align="left">
                  Sound
                </td>
                <td className={styles["borderClass"]}>{data.scores.sound}</td>
              </tr>
              <tr style={{ color: "#fff" }}>
                <td className={styles["borderClass"]} align="left">
                  Character
                </td>
                <td className={styles["borderClass"]}>
                  {data.scores.character}
                </td>
              </tr>
              <tr style={{ color: "#fff" }}>
                <td
                  className={styles["borderClass"]}
                  style={{ borderWidth: "0" }}
                  align="left"
                >
                  Enjoyment
                </td>
                <td
                  className={styles["borderClass"]}
                  style={{ borderWidth: "0" }}
                >
                  {data.scores.enjoyment}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <ReadMore>{data.review}</ReadMore>
      </div>
    </div>
  )
}

export default ReviewCardItem
