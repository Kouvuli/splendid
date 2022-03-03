import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import animeApi from "../../apis/animeApi";
import styles from "./Filter.module.css";
const Filter = (props) => {
  const [genres, setGenres] = useState([]);
  const [checkedGenres, setCheckedGenres] = useState([]);
  props.handleGenres(checkedGenres.join());
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const params = {
          filter: "genres",
        };
        const response = await animeApi.getGenres(params);
        setGenres(response.data);
      } catch (error) {
        throw error;
      }
    };
    fetchGenres();
  }, []);
  const handleChange = (e) => {
    if (e.target.checked) {
      setCheckedGenres((prevState) => {
        return [...prevState, e.target.attributes.id.value];
      });
    } else {
      setCheckedGenres(
        checkedGenres.filter((i) => {
          return i !== e.target.attributes.id.value;
        })
      );
    }
  };
  console.log(checkedGenres);
  return (
    <>
      <div className={`${styles["box"]} ${styles["filter-toggle-box"]}`}>
        <button
          className={`${styles["btn-flat"]} ${styles["btn-hover"]}`}
          id="filter-close"
        >
          close
        </button>
      </div>
      <div className={`${styles["section-title"]}`}>
        <h5>Danh mục</h5>
      </div>
      <Box sx={{ backgroundColor: "background.paper", padding: "20px" }}>
        <ul className={styles["filter-list"]}>
          <li>
            <a href="tai-nghe.html">Tai nghe</a>
          </li>
          <li>
            <a href="may-nghe-nhac.html">Máy nghe nhạc</a>
          </li>
          <li>
            <a href="loa.html">Loa</a>
          </li>
          <li>
            <a href="microphone.html">Microphone</a>
          </li>
        </ul>
      </Box>
      <div className={`${styles["section-title"]}`}>
        <h5>Score</h5>
      </div>
      <Box sx={{ backgroundColor: "background.paper", padding: "20px" }}>
        <div className={styles["price-range"]}>
          <input type="text" />
          <span>-</span>
          <input type="text" />
        </div>
      </Box>
      <div className={`${styles["section-title"]}`}>
        <h5>Genres</h5>
      </div>
      <Box sx={{ backgroundColor: "background.paper", padding: "20px" }}>
        <ul className={styles["filter-list"]}>
          {genres.map((genre) => {
            return (
              <li>
                <div className={styles["group-checkbox"]}>
                  <input
                    type="checkbox"
                    id={genre.mal_id}
                    onChange={handleChange}
                  />
                  <label for={genre.mal_id}>
                    {genre.name}
                    <span>({genre.count})</span> <i className="bx bx-check"></i>
                  </label>
                </div>
              </li>
            );
          })}
        </ul>
      </Box>
    </>
  );
};

export default Filter;
