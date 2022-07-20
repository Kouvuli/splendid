import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import animeApi from "../../apis/animeApi"
const initialState = {
  loading: false,
  error: false,
  data: [],
  hasNext: false,
  page: 1,
  limit: 16
}
export const fetchTopManga = createAsyncThunk(
  "top-manga-more",
  async (params) => {
    const data = await animeApi.getTopManga(params)
    return data
  }
)

const mangaTopSlice = createSlice({
  name: "mangaTop",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopManga.pending, (state) => {
        if (state.page !== 1) {
          state.loading = false
        } else {
          state.loading = true
        }
        state.error = false
      })
      .addCase(fetchTopManga.fulfilled, (state, action) => {
        state.data.push(...action.payload.data)
        ++state.page
        state.hasNext = action.payload.pagination.has_next_page
        state.loading = false
        state.error = false
      })
      .addCase(fetchTopManga.rejected, (state, action) => {
        state.error = action.error
        state.loading = false
      })
  }
})

export default mangaTopSlice
