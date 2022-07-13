import axiosClient from "./axiosClient"
import { SPLENDID_API } from "./apiURL"
import authHeader from "./auth-header"
const request = axiosClient(SPLENDID_API)

const splendidApi = {
  getAllPost: (params) => {
    const url = "/post"
    return request.get(url, { params })
  },
  getPostById: (id) => {
    const url = `/post/${id}`
    return request.get(url)
  },
  insertPost: (data) => {
    const url = "/post"
    return request.post(url, data, { headers: authHeader() })
  },
  updatePost: (id, data) => {
    const url = `/post/${id}`
    return request.post(url, data, { headers: authHeader() })
  },
  deletePost: (id) => {
    const url = `/post/${id}`
    return request.delete(url, { headers: authHeader() })
  },
  registerUser: (fullname, dob, username, password, isAdmin) => {
    const url = `/auth/signup`
    return request.post(url, {
      fullname,
      dob,
      username,
      password,
      isAdmin
    })
  },
  authenticateUser: (username, password) => {
    const url = `/auth/signin`
    return request.get(url, { username, password }).then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data))
      }

      return response.data
    })
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

export default splendidApi
