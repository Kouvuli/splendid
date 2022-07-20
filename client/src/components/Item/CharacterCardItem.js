import React from "react"
import styles from "./CharacterCardItem.module.scss"
const CharacterCardItem = (props) => {
  const { data } = props
  return (
    <div className={styles["character__item"]}>
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tbody>
          <tr>
            <td
              style={{ verticalAlign: "top" }}
              width="27px"
              className={`${styles["ac"]} ${styles["borderClass"]} ${styles["bgColor2"]}`}
            >
              <div className={styles["picSurround"]}>
                <a href={data.character.url} className={styles["fw-n"]}>
                  <img
                    alt={data.character.name}
                    width="42"
                    height="62"
                    className="lazyload"
                    src={data.character.images.jpg.image_url}
                  />
                </a>
              </div>
            </td>
            <td
              style={{ verticalAlign: "top" }}
              className={`${styles["borderClass"]} ${styles["bgColor2"]}`}
            >
              <div className={styles["spaceit_pad"]}>
                <a href={data.character.url}>
                  <h3 className="h3_character_name">{data.character.name}</h3>
                </a>
              </div>
              <div className={styles["spaceit_pad"]}>{data.role}&nbsp;</div>
            </td>
            <td
              align="right"
              style={{ verticalAlign: "top" }}
              className={`${styles["borderClass"]} ${styles["bgColor2"]}`}
            >
              <table
                border="0"
                cellpadding="0"
                cellspacing="0"
                className="js-anime-character-va"
              >
                <tbody>
                  {data.voice_actors &&
                    data.voice_actors.map((actor) => {
                      return (
                        <tr className="js-anime-character-va-lang">
                          <td
                            style={{
                              padding: "0 4px",
                              verticalAlign: "top",
                              textAlign: "right"
                            }}
                            nowrap=""
                            className={styles["bgColor2"]}
                          >
                            <div className={styles["spaceit_pad"]}>
                              <a href={actor.person.url}>{actor.person.name}</a>
                            </div>
                            <div
                              className={`${styles["spaceit_pad"]} ${styles["js-anime-character-language"]}`}
                            >
                              {actor.language}
                            </div>
                          </td>
                          <td
                            style={{ verticalAlign: "top" }}
                            className={styles["bgColor2"]}
                          >
                            <div className={styles["picSurround"]}>
                              <a href={actor.person.url}>
                                <img
                                  alt={actor.person.name}
                                  width="42"
                                  height="62"
                                  className=" lazyloaded"
                                  src={actor.person.images.jpg.image_url}
                                />
                              </a>
                            </div>
                          </td>
                        </tr>
                      )
                    })}
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CharacterCardItem
