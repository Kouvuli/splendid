import axios from "axios"
import queryString from "query-string"

const request = (url) => {
  const axiosClient = axios.create({
    baseURL: url,
    headers: {
      "content-type": "application/json"
    },
    paramsSerializer: (params) => queryString.stringify(params)
  })

  axiosClient.interceptors.request.use(async (config) => {
    if (config.url === "/auth/signin") {
      config.method = "POST"
    }

    return config
  })
  axiosClient.interceptors.response.use(
    (response) => {
      if (response && response.data) {
        return response.data
      }
      return response
    },
    (error) => {
      throw error
    }
  )
  return axiosClient
}

export default request
