import IconButton from "@mui/material/IconButton"
import MenuItem from "@mui/material/MenuItem"
import clsx from "clsx"
import { Link } from "react-router-dom"
import { useTheme } from "@mui/material"
import styles from "./styles.module.scss"

const Component = ({ isMobile, items }) => {
  const theme = useTheme()

  // if (isMobile) {
  //   return (
  //     <>
  //       {items.map((item) => (
  //         <MenuItem key={item.label}>
  //           <Link to={item.linkTo} className={styles.link}>
  //             <IconButton
  //               size="large"
  //               aria-label={item.label}
  //               sx={{ backgroundColor: "primary.main" }}
  //             >
  //               <item.Icon />
  //             </IconButton>
  //           </Link>
  //           <Link to={item.linkTo} className={styles.link}>
  //             <p>{item.label}</p>
  //           </Link>
  //         </MenuItem>
  //       ))}
  //     </>
  //   )
  // }

  return (
    <>
      {items.map((item) => (
        <Link to={item.linkTo} className={styles.item} key={item.label}>
          <IconButton
            size="large"
            aria-label={item.label}
            sx={{ borderRadius: "5px" }}
            color="inherit"
          >
            <item.Icon />
            <p className={styles.label}>{item.label}</p>
          </IconButton>
        </Link>
      ))}
    </>
  )
}
export default Component
