import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import animeApi from "../../apis/animeApi"

const initialState = {
  loading: false,
  error: false,
  data: [],
  page: 1,
  limit: 18,
  genres: [],
  allGenres: [],
  status: "",
  order: "type"
}
export const fetchAllMangas = createAsyncThunk("manga", async (params) => {
  const data = await animeApi.getAllManga(params)
  return data
})

export const fetchAllGenresManga = createAsyncThunk("genre", async (params) => {
  const { data } = await animeApi.getGenresManga(params)
  return data
})
// export const fetchAnimeMore = createAsyncThunk("anime-more", async (params) => {
//   const data = await animeApi.getAll(params)

//   return data
// })

const animeSlice = createSlice({
  name: "manga",
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.page = action.payload
    },
    addGenres: (state, action) => {
      state.genres.push(action.payload)
    },
    changeStatus: (state, action) => {
      state.status = action.payload
    },
    removeGenres: (state, action) => {
      const index = state.genres.indexOf(action.payload)
      if (index > -1) {
        // only splice array when item is found
        state.genres.splice(index, 1) // 2nd parameter means remove one item only
      }
    },
    changeOrder: (state, action) => {
      state.order = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllMangas.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(fetchAllMangas.fulfilled, (state, action) => {
        state.data = action.payload
        state.loading = false
        state.error = false
      })
      .addCase(fetchAllMangas.rejected, (state, action) => {
        // state.data = []
        state.error = action.error
        state.loading = false
      })
      .addCase(fetchAllGenresManga.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(fetchAllGenresManga.fulfilled, (state, action) => {
        state.allGenres = action.payload
        state.loading = false
        state.error = false
      })
      .addCase(fetchAllGenresManga.rejected, (state, action) => {
        state.error = action.error
        state.loading = false
      })
  }
})

export default animeSlice
