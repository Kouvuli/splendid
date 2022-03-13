import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import animeApi from "../../apis/animeApi";
import styles from "./Filter.module.css";
import { styled, alpha } from "@mui/material/styles";
const status = ["Airing", "Upcoming", "Complete"];
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  width: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));
const Filter = (props) => {
  const [genres, setGenres] = useState([]);
  const [checkedGenres, setCheckedGenres] = useState([]);
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
  const handleChangeGenres = (e) => {
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
  props.handleGenres(checkedGenres.join());
  const handleChangeStatus = (e) => {
    props.handleStatus((prevStatus) => {
      if (prevStatus !== e.target.innerHTML) {
        return e.target.innerHTML;
      }
    });
  };
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
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <div className={styles["header__right"]}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </div>
      </Box>
      <div className={`${styles["section-title"]}`}>
        <h5>Status</h5>
      </div>
      <Box sx={{ backgroundColor: "background.paper", padding: "20px" }}>
        <ul className={styles["filter-list"]}>
          {status.map((item, i) => {
            return (
              <li
                key={i}
                className={`${
                  props.status === item ? styles["active"] : styles[""]
                }`}
                onClick={handleChangeStatus}
              >
                {item}
              </li>
            );
          })}
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
                    onChange={handleChangeGenres}
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
