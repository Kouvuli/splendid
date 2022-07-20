import React, { useState, useEffect } from "react"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import CharacterCardItem from "../Item/CharacterCardItem"
import animeApi from "../../apis/animeApi"
import styles from "./CharacterList.module.scss"
import { useDispatch, useSelector } from "react-redux"
import { fetchCharacterById } from "../../redux/reducers/animeDetailSlice"
import { fetchMangaCharacterById } from "../../redux/reducers/mangaDetailSlice"

import { animeDetailSelector, mangaDetailSelector } from "../../redux/selectors"
import Loading from "../Loading"
import LoadingCardSkeleton from "../LoadingCardSkeleton"
import { CARD_TYPES } from "../../constants"
import ResultNotFound from "../ResultNotFound"
const CharacterList = (props) => {
  const dispatch = useDispatch()
  const { id, type = "anime" } = props

  var selector
  if (type === "anime") {
    selector = animeDetailSelector
  } else {
    selector = mangaDetailSelector
  }
  const { charactersLoading, charactersError, characters } =
    useSelector(selector)

  // const [data, setData] = useState(null)
  useEffect(() => {
    // const fetchCharacterById = async () => {
    //   const response = await animeApi.getAnimeCharacters(id)
    //   setData(response.data)
    // }
    // fetchCharacterById()
    if (type === "anime") {
      dispatch(fetchCharacterById(id))
    } else {
      dispatch(fetchMangaCharacterById(id))
    }
  }, [dispatch, id])
  return (
    <>
      {charactersLoading && (
        <>
          <Loading />
        </>
      )}
      {characters && (
        <List className={styles["characters__list"]}>
          {characters.map((item, i) => {
            return (
              <div key={i}>
                <CharacterCardItem data={item} />
                <Divider style={{ borderColor: "#d9d9d9" }} />
              </div>
            )
          })}
        </List>
      )}
      {!charactersLoading && characters && characters.length === 0 && (
        <ResultNotFound message="No Results" />
      )}
      {charactersError && <ResultNotFound message={charactersError.message} />}
    </>
  )
}

export default CharacterList
