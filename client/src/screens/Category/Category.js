import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FilterList from "../../components/List/FilterList";
import SideBarList from "../../components/List/SideBarList/SideBarList";
import styles from "./Category.module.css";
import MovieList from "../../components/List/MovieList";
import CustomPagination from "../../components/UI/CustomPagination";
import Filter from "../../components/List/Filter";
import MovieListAll from "../../components/List/MovieListAll";
import animeApi from "../../apis/animeApi";
import useQuery from "../../hooks/useQuery";
const Category = () => {
  let query = useQuery();
  const [page, setPage] = useState(1);
  const [genres, setGenres] = useState("");
  const [lastVisiblePage, setLastVisiblePage] = useState(0);
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    const fetchAllMovie = async () => {
      try {
        const params = {
          page: page,
          limit: 18,
          genres,
        };
        const response = await animeApi.getAll(params);
        setProductList(response.data);
        setLastVisiblePage(response.pagination.last_visible_page);
      } catch (error) {
        throw error;
      }
    };
    fetchAllMovie();
  }, [page, genres]);
  return (
    <>
      <Grid
        container
        justifyContent="center"
        maxWidth="1170px"
        marginLeft="auto"
        marginRight="auto"
        paddingTop="106px"
        paddingBottom="106px"
      >
        <Grid item xs={12} md={8}>
          <div className={styles["movie-section"]}>
            <MovieListAll items={productList} title="Movies" />
          </div>
          <CustomPagination page={lastVisiblePage} handlePage={setPage} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Filter handleGenres={setGenres} title="Genres" />
          <FilterList title="Genres" />
          <FilterList title="Category" />
        </Grid>
      </Grid>
    </>
  );
};

export default Category;
