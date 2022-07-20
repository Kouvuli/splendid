import styles from "./styles.module.scss"
import Button from "../../components/UI/Button/RoundButton"

import Typewriter from "typewriter-effect"

const ComingSoon = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>COMING</h1>
      <h1 className={styles.title}>SOON</h1>
      <div className={styles.typewriterContainer}>
        <Typewriter
          options={{
            strings: [
              "We are currently working on this feature.",
              "Please comeback later :')"
            ],
            autoStart: true,
            delay: 100,
            loop: true,
            wrapperClassName: styles.typewriter
          }}
        />
      </div>
      <a href="/">
        <Button className={styles.btnGoHome}>Back To Home</Button>
      </a>
    </div>
  )
}
export default ComingSoon
