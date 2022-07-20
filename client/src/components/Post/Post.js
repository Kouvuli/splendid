import styles from "./styles.module.scss"
import Typography from "@mui/material/Typography"
import { Link } from "react-router-dom"
import { Avatar, ListItemAvatar, ListItemText } from "@mui/material"
import { PATHS } from "../../routes"
const Post = ({ author, title, content, id }) => {
  return (
    <>
      <div className={styles.listItem}>
        <Link className={styles.listItemLink} to={`${PATHS.FORUM}/${id}`}>
          <ListItemText
            className={styles.listItemHeader}
            primary={title}
            secondary={content}
          />
        </Link>
        <ListItemAvatar className={styles.listItemAvatar}>
          <Avatar
            className={styles.avatar}
            variant="rounded"
            sx={{ width: 24, height: 24 }}
            src=""
          />
          <Typography className={styles.authorName}>
            {author.username}
          </Typography>
        </ListItemAvatar>
      </div>
    </>
  )
}

export default Post
