import React, { useState, useEffect } from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import CharacterCardItem from "../Item/CharacterCardItem";
import animeApi from "../../apis/animeApi";
import styles from "./CharacterList.module.css";
const CharacterList = (props) => {
  const { id } = props;
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchCharacterById = async () => {
      const response = await animeApi.getCharacterById(id);
      setData(response.data);
    };
    fetchCharacterById();
  });
  return (
    <>
      {data && (
        <List className={styles["characters__list"]}>
          {data.map((item) => {
            return (
              <>
                <CharacterCardItem data={item} />
                <Divider style={{ borderColor: "#d9d9d9" }} />
              </>
            );
          })}
        </List>
      )}
    </>
  );
};

export default CharacterList;
