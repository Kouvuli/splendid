import React, { useState, useEffect } from "react";
import Divider from "@mui/material/Divider";
import animeApi from "../../apis/animeApi";
import styles from "./ReviewList.module.css";
import List from "@mui/material/List";
import ReviewCardItem from "../Item/ReviewCardItem";
const ReviewList = (props) => {
  const { id } = props;
  console.log(id);
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchReviewsById = async () => {
      const params = {
        page: 1,
      };
      const response = await animeApi.getReviewsById(id, params);
      setData(response.data);
      console.log(data);
    };
    fetchReviewsById();
  }, [id]);
  return (
    <>
      {data && (
        <List className={styles["reviews__list"]}>
          {data.map((item) => {
            return (
              <>
                {console.log(item)}
                <ReviewCardItem data={item} />
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

export default ReviewList;
