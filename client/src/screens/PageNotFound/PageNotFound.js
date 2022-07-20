import styles from "./styles.module.scss"
import Button from "../../components/UI/Button/RoundButton"

const PageNotFound = () => {
  return (
    <div className={styles.container}>
      <a href="/">
        <Button className={styles.btnGoHome}>Back To Home</Button>
      </a>
    </div>
  )
}
export default PageNotFound
