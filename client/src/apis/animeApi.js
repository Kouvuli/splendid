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
  getAnimeById: (id) => {
    const url = "/anime/" + id;
    return axiosClient.get(url);
  },
  getGenres: (params) => {
    const url = `/genres/anime`;
    return axiosClient.get(url, { params });
  },
  getAnimeRecommendations: (id) => {
    const url = `/anime/${id}/recommendations`;
    return axiosClient.get(url);
  },
  getAnimeRelations: (id) => {
    const url = `/anime/${id}/relations`;
    return axiosClient.get(url);
  },
  getNewsById: (id, params) => {
    const url = `/anime/${id}/news`;
    return axiosClient.get(url, params);
  },
  getCharacterById: (id) => {
    const url = `/anime/${id}/characters`;
    return axiosClient.get(url);
  },
  getReviewsById: (id, params) => {
    const url = `/anime/${id}/reviews`;
    return axiosClient.get(url);
  },
};

export default animeApi;
