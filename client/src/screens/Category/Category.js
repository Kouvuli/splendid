import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CategoryList from "../../components/List/CategoryList";
import SideBarList from "../../components/List/SideBarList/SideBarList";
import styles from "./Category.module.css";
import MovieList from "../../components/List/MovieList";
import CustomPagination from "../../components/UI/CustomPagination";
import MovieListAll from "../../components/List/MovieListAll";
import animeApi from "../../apis/animeApi";
import useQuery from "../../hooks/useQuery";
const Category = () => {
  let query = useQuery();
  const [page, setPage] = useState(1);

  const [productList, setProductList] = useState([]);
  useEffect(() => {
    const fetchAllMovie = async () => {
      try {
        const params = {
          page: page,
          limit: 18,
        };
        const response = await animeApi.getAll(params);
        setProductList(response.data);
        setPage(query.get("page"));
        console.log(response.data);
      } catch (error) {
        throw error;
      }
    };
    fetchAllMovie();
  }, [page]);
  return (
    <>
      <Grid
        container
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
          <CustomPagination />
        </Grid>
        <Grid item sm={12} md={4}>
          <CategoryList title="Category" />
        </Grid>
      </Grid>
    </>
  );
};

export default Category;
