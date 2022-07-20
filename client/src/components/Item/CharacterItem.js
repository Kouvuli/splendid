import React from "react"
import Grid from "@mui/material/Grid"
import styles from "./CharacterItem.module.scss"
import ChatBubbleIcon from "@mui/icons-material/ChatBubble"
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye"
import { CARD_TYPES } from "../../constants"
import CardSkeleton from "../UI/CardSkeleton"
import Loading from "../Loading"
import LoadingCardSkeleton from "../LoadingCardSkeleton"
const CharacterItem = ({ data }) => {
  return (
    <>
      {data && (
        <Grid item xs={12} sm={5} md={4} lg={3}>
          <div className={styles["product__item"]}>
            <div
              className={`${styles["product__item__pic"]} ${styles["set-bg"]}`}
              style={{
                backgroundImage: `url(${data.images.jpg.image_url})`
              }}
            >
              {data.favorites !== null && (
                <div className={styles["view"]}>
                  <RemoveRedEyeIcon
                    className="bx"
                    style={{ fontSize: "12px", display: "inline-block" }}
                  ></RemoveRedEyeIcon>{" "}
                  {data.favorites}
                </div>
              )}
            </div>

            <div className={styles["product__item__text"]}>
              <h5>
                {data.name} ({data.name_kanji} )
              </h5>
            </div>
          </div>
        </Grid>
      )}
    </>
  )
}

export default CharacterItem
