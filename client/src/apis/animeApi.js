import axiosClient from "./axiosClient";

const animeApi = {
  getAll: (params) => {
    const url = "/anime";
    return axiosClient.get(url, { params });
  },
  getTop: (params) => {
    const url = "/top/anime";
    return axiosClient.get(url, { params });
  },
  getAnime: (params) => {
    const url = "/anime";
    return axiosClient.get(url, { params });
  },
  getAnimeById: (params, id) => {
    const url = `/anime/${id}`;
    return axiosClient.get(url, { params });
  },
  getGenres: (params) => {
    const url = `/genres/anime`;
    return axiosClient.get(url, { params });
  },
};

export default animeApi;
