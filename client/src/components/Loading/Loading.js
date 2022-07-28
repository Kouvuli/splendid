import Box from "@mui/material/Box"
import LinearProgress from "@mui/material/LinearProgress"
import { useTheme } from "@mui/material/styles"
import styles from "./styles.module.scss"

export default function Loading(props) {
  const theme = useTheme()

  return (
    <Box
      sx={{ color: theme.palette.primary.main, width: "100%" }}
      className={styles.loading}
    >
      <LinearProgress color="inherit" />
    </Box>
  )
}
