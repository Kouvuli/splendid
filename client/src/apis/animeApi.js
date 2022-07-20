import axiosClient from "./axiosClient"
import { JINKAN_API } from "./apiURL"

const request = axiosClient(JINKAN_API)
const animeApi = {
  getAllAnime: (params) => {
    const url = "/anime"
    return request.get(url, { params })
  },
  getAllManga: (params) => {
    const url = "/manga"
    return request.get(url, { params })
  },
  getTopAnime: (params) => {
    const url = "/top/anime"
    return request.get(url, { params })
  },
  getTopManga: (params) => {
    const url = "/top/manga"
    return request.get(url, { params })
  },
  getSeasonNow: (params) => {
    const url = "/seasons/now"
    return request.get(url, { params })
  },
  getSeasonUpcoming: (params) => {
    const url = "/seasons/upcoming"
    return request.get(url, { params })
  },
  getRecentAnimeRec: () => {
    const url = "/recommendations/anime"
    return request.get(url)
  },
  getRecentMangaRec: () => {
    const url = "/recommendations/manga"
    return request.get(url)
  },
  getAnimeById: (id) => {
    const url = "/anime/" + id
    return request.get(url)
  },
  getMangaById: (id) => {
    const url = "/manga/" + id
    return request.get(url)
  },
  getGenresAnime: (params) => {
    const url = `/genres/anime`
    return request.get(url, { params })
  },
  getGenresManga: (params) => {
    const url = `/genres/manga`
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
  getAnimeNews: (id, params) => {
    const url = `/anime/${id}/news`
    return request.get(url, { params })
  },
  getAnimeCharacters: (id) => {
    const url = `/anime/${id}/characters`
    return request.get(url)
  },
  getAnimeReviews: (id, params) => {
    const url = `/anime/${id}/reviews`
    return request.get(url)
  },

  getMangaRecommendations: (id) => {
    const url = `/manga/${id}/recommendations`
    return request.get(url)
  },
  getMangaRelations: (id) => {
    const url = `/manga/${id}/relations`
    return request.get(url)
  },
  getMangaNews: (id, params) => {
    const url = `/manga/${id}/news`
    return request.get(url, { params })
  },
  getMangaCharacters: (id) => {
    const url = `/manga/${id}/characters`
    return request.get(url)
  },
  getMangaReviews: (id, params) => {
    const url = `/manga/${id}/reviews`
    return request.get(url)
  },
  getCharacters: (params) => {
    const url = "/characters"
    return request.get(url, { params })
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
