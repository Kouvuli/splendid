import axiosClient from "./axiosClient"
import { JINKAN_API } from "./apiURL"

const request = axiosClient(JINKAN_API)
const animeApi = {
  getAll: (params) => {
    const url = "/anime"
    return request.get(url, { params })
  },
  getTop: () => {
    const url = "/top/anime"
    return request.get(url)
  },
  getAnimeById: (id) => {
    const url = "/anime/" + id
    return request.get(url)
  },
  getGenres: (params) => {
    const url = `/genres/anime`
    return request.get(url, { params })
  },
  getAnimeRecommendations: (id) => {
    const url = `/anime/${id}/recommendations`
    return request.get(url)
  },
  getAnimeRelations: (id) => {
    const url = `/anime/${id}/relations`
    return request.get(url)
  },
  getNewsById: (id, params) => {
    const url = `/anime/${id}/news`
    return request.get(url, params)
  },
  getCharacterById: (id) => {
    const url = `/anime/${id}/characters`
    return request.get(url)
  },
  getReviewsById: (id, params) => {
    const url = `/anime/${id}/reviews`
    return request.get(url)
  }
}

export default animeApi
