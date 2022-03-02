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
};

export default animeApi;
