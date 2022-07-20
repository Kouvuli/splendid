import React from "react"
import Grid from "@mui/material/Grid"
import MovieTopItem from "../Item/MovieTopItem"
import InfiniteScroll from "react-infinite-scroll-component"
import { CARD_TYPES } from "../../constants"
import LoadingCardSkeleton from "../LoadingCardSkeleton"
import CharacterItem from "../Item/CharacterItem"
import Loading from "../Loading"
import styles from "./ListTop.module.scss"
const ListTop = (props) => {
  const { type, items, hasNext, fetchMoreData } = props

  return (
    <InfiniteScroll
      dataLength={items.length}
      next={fetchMoreData}
      hasMore={hasNext}
      loader={
        <>
          {/* <Loading /> */}
          <Grid container justifyContent="center" spacing={5}>
            <LoadingCardSkeleton size={4} md={3} type={CARD_TYPES.SQUARE} />
          </Grid>
        </>
      }
    >
      <Grid container justifyContent="center" spacing={5}>
        {type === "character" &&
          items.map((item, index) => {
            return <CharacterItem data={item} />
          })}
        {type !== "character" &&
          items.map((item, index) => {
            return <MovieTopItem type={type} key={index} data={item} />
          })}
      </Grid>
    </InfiniteScroll>
  )
}

export default ListTop
