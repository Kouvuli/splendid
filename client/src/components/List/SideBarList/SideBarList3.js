import React, { useState, useEffect } from "react";
import SideBarListItem1 from "../../Item/SideBar/SideBarListItem1";
import animeApi from "../../../apis/animeApi";
import styles from "./SideBarList3.module.css";
const SideBarList3 = (props) => {
  const { title, id } = props;
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchAnimeRecommendationsAndRelations = async () => {
      let response;
      if (title === "Recommendation") {
        response = await animeApi.getAnimeRecommendations(id);
      } else if (title === "Related") {
        response = await animeApi.getAnimeRelations(id);
      }
      setData(response.data);
      console.log(response.data);
    };
    fetchAnimeRecommendationsAndRelations();
  }, [id, title]);

  return (
    <>
      {data && (
        <div className={styles["anime__details__sidebar"]}>
          {data.map((item) => {
            return item.entry.map((rel, i) => {
              if (rel.type === "anime") {
                return <SideBarListItem1 key={i} id={rel.mal_id} />;
              }
            });
          })}
        </div>
      )}
    </>
  );
};

export default SideBarList3;
