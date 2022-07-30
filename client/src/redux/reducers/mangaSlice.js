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
  rating: "",
  order: "type",
  search: "",
  minScore: 0,
  maxScore: 10
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
      state.page = 1
    },
    changeStatus: (state, action) => {
      state.status = action.payload
      state.page = 1
    },
    changeRating: (state, action) => {
      state.rating = action.payload
      state.page = 1
    },
    removeGenres: (state, action) => {
      const index = state.genres.indexOf(action.payload)
      if (index > -1) {
        // only splice array when item is found
        state.genres.splice(index, 1) // 2nd parameter means remove one item only
      }
      state.page = 1
    },
    changeOrder: (state, action) => {
      state.order = action.payload
      state.page = 1
    },
    search: (state, action) => {
      state.search = action.payload
      state.page = 1
    },
    changeMinScore: (state, action) => {
      state.minScore = action.payload
    },
    changeMaxScore: (state, action) => {
      state.maxScore = action.payload
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
