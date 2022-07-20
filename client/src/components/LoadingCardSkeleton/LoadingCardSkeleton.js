import styles from "./styles.module.scss"
import Grid from "@mui/material/Grid"
import CardSkeleton from "../UI/CardSkeleton"
// import useCardMediaQuery from "../../hooks/useCardMediaQuery"

export default function Loading({ size, xs = "12", sm = "5", md = "4", type }) {
  const dummy = new Array(size).fill(0)
  return (
    <>
      {dummy.map((_, idx) => (
        <Grid item xs={xs} sm={sm} md={md} key={idx}>
          <CardSkeleton type={type} />
        </Grid>
      ))}
    </>
  )
}
