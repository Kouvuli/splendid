import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import splendidApi from "../../apis/splendidApi"

const initialState = {
  loading: false,
  error: false,
  currentUser: {},
  data: [],
  hasNext: false,
  page: 1,
  limit: 10
}

export const createPost = createAsyncThunk("create-post", async (param) => {
  console.log(param)
  const data = splendidApi.insertPost(param)
  return data
})

export const fetchAllPost = createAsyncThunk("all-post", async (param) => {
  const data = splendidApi.getAllPost(param)
  return data
})

// export
export const forumSlice = createSlice({
  name: "forum",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.currentUser = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createPost.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(createPost.fulfilled, (state, action) => {
        // state.data.push(...action.payload)
        // ++state.page
        state.loading = false
        state.error = false
      })
      .addCase(createPost.rejected, (state, action) => {
        state.loading = false
        state.error = action.error
      })
      .addCase(fetchAllPost.pending, (state) => {
        if (state.page === 1) {
          state.loading = true
        } else {
          state.loading = false
        }
        state.error = false
      })
      .addCase(fetchAllPost.fulfilled, (state, action) => {
        state.data.push(...action.payload.data)
        state.hasNext = action.payload.pagination.has_next_page
        ++state.page
        state.loading = false
        state.error = false
      })
      .addCase(fetchAllPost.rejected, (state, action) => {
        state.loading = false
        state.error = action.error
      })
  }
})

export default forumSlice
