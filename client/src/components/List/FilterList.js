import * as React from "react"
import Box from "@mui/material/Box"
import List from "@mui/material/List"
import styles from "./FilterList.module.scss"
import FilterItem from "../Item/FilterItem"

export default function FilterList(props) {
  const { title } = props
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index)
  }

  return (
    <div className={styles["product__sidebar"]}>
      <div className={styles["section-title"]}>
        <h5>{title}</h5>
      </div>
      <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <List component="nav" aria-label="main mailbox folders">
          <FilterItem
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
          />
          <FilterItem
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
          />
          <FilterItem
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)}
          />

          <FilterItem
            selected={selectedIndex === 3}
            onClick={(event) => handleListItemClick(event, 3)}
          />
        </List>
      </Box>
    </div>
  )
}
