import ScrollToTop from "react-scroll-to-top"
import { useTheme } from "@mui/material"
import styles from "./styles.module.scss"

const Image = () => {
  return (
    <i
      alt="scroll to top"
      className="bx bxs-up-arrow bx-sm"
      style={{ color: "#ffffff" }}
    ></i>
  )
}

const Component = () => {
  const theme = useTheme()
  return (
    <ScrollToTop
      style={{
        backgroundColor: theme.palette.primary.main,
        borderRadius: "5px",
        width: "50px",
        height: "50px"
      }}
      smooth
      component={<Image />}
    ></ScrollToTop>
  )
}

export default Component
