import React, { useState, useEffect } from "react";
import NewsCardItem from "../Item/NewsCardItem";
import Divider from "@mui/material/Divider";
import animeApi from "../../apis/animeApi";
import styles from "./NewsCardList.module.css";
import List from "@mui/material/List";
const NewsCardList = (props) => {
  const { id } = props;
  console.log(id);
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchNewsById = async () => {
      const params = {
        page: 1,
      };
      const response = await animeApi.getNewsById(id, params);
      setData(response.data);
    };
    fetchNewsById();
  }, [id]);
  return (
    <>
      {data && (
        <List className={styles["news__list"]}>
          {data.map((item) => {
            return (
              <>
                <NewsCardItem data={item} />
                <Divider
                  style={{ borderColor: "#d9d9d9", marginBottom: "20px" }}
                />
              </>
            );
          })}
        </List>
      )}
    </>
  );
};

export default NewsCardList;
