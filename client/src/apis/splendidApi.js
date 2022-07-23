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
  registerUser: ({ fullname, dob, username, password, is_admin }) => {
    const url = `/auth/signup`

    return request.post(url, {
      fullname,
      dob,
      username,
      password,
      is_admin
    })
  },
  authenticateUser: ({ username, password }) => {
    const url = `/auth/signin`
    return request.post(url, { username, password }).then((response) => {
      if (response.data.access_token) {
        localStorage.setItem("user", JSON.stringify(response.data))
      }
      console.log(response.data)
      return response.data
    })
  },
  getAllComment: (params) => {
    const url = "/comment"
    return request.get(url, { params })
  },
  getCommentById: (id) => {
    const url = `/comment/${id}`
    return request.get(url)
  },
  insertComment: (data) => {
    const url = "/comment"
    return request.post(url, data, { headers: authHeader() })
  },
  updateComment: (id, data) => {
    const url = `/comment/${id}`
    return request.post(url, data, { headers: authHeader() })
  },
  deleteComment: (id) => {
    const url = `/comment/${id}`
    return request.delete(url, { headers: authHeader() })
  },
  insertReaction: (data) => {
    const url = "/reaction"
    return request.post(url, data, { headers: authHeader() })
  },
  getReactionCount: (params) => {
    const url = `/reaction`
    return request.get(url, { params }, { headers: authHeader() })
  },
  deleteReaction: (params) => {
    const url = `/reaction`
    return request.delete(url, { params, headers: authHeader() })
  },
  getUserById: (id) => {
    const url = `/user/${id}`
    return request.get(url)
  }
}

export default splendidApi
