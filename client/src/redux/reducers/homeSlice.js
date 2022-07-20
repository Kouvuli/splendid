import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import animeApi from "../../apis/animeApi"

const initialState = {
  loading: false,
  error: false,
  topAnime: [],
  topAnimeLoading: false,
  topAnimeError: false,
  topManga: [],
  topMangaLoading: false,
  topMangaError: false,
  seasonUpcoming: [],
  seasonUpcomingLoading: false,
  seasonUpcomingError: false,
  seasonNow: [],
  seasonNowLoading: false,
  seasonNowError: false,
  recentAnimeRec: [],
  recentAnimeRecLoading: false,
  recentAnimeRecError: false,
  recentMangaRec: [],
  recentMangaRecLoading: false,
  recentMangaRecError: false
}

export const fetchTopAnime = createAsyncThunk(
  "home-top-anime",
  async (params) => {
    const { data } = await animeApi.getTopAnime(params)
    return data
  }
)

export const fetchTopManga = createAsyncThunk(
  "home-top-manga",
  async (params) => {
    const { data } = await animeApi.getTopManga(params)
    return data
  }
)

export const fetchSeasonNow = createAsyncThunk(
  "home-season-now",
  async (params) => {
    const { data } = await animeApi.getSeasonNow(params)
    return data
  }
)
export const fetchSeasonUpcoming = createAsyncThunk(
  "home-season-upcoming",
  async (params) => {
    const { data } = await animeApi.getSeasonUpcoming(params)
    return data
  }
)

export const fetchRecentAnimeRec = createAsyncThunk(
  "home-recent-anime-rec",
  async (params) => {
    const { data } = await animeApi.getRecentAnimeRec(params)
    return data
  }
)

export const fetchRecentMangaRec = createAsyncThunk(
  "home-recent-manga-rec",
  async (params) => {
    const { data } = await animeApi.getRecentMangaRec(params)
    return data
  }
)

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopAnime.pending, (state) => {
        state.topAnimeLoading = true
        state.topAnimeError = false
      })
      .addCase(fetchTopAnime.fulfilled, (state, action) => {
        state.topAnime = action.payload
        state.topAnimeLoading = false
        state.topAnimeError = false
      })
      .addCase(fetchTopAnime.rejected, (state, action) => {
        state.topAnimeError = action.error
        state.topAnimeLoading = false
      })
      .addCase(fetchTopManga.pending, (state) => {
        state.topMangaLoading = true
        state.topMangaError = false
      })
      .addCase(fetchTopManga.fulfilled, (state, action) => {
        state.topManga = action.payload
        state.topMangaLoading = false
        state.topMangaError = false
      })
      .addCase(fetchTopManga.rejected, (state, action) => {
        state.topMangaError = action.error
        state.topMangaLoading = false
      })
      .addCase(fetchSeasonNow.pending, (state) => {
        state.seasonNowLoading = true
        state.seasonNowError = false
      })
      .addCase(fetchSeasonNow.fulfilled, (state, action) => {
        state.seasonNowLoading = false
        state.seasonNowError = false
        state.seasonNow = action.payload
      })
      .addCase(fetchSeasonNow.rejected, (state, action) => {
        state.seasonNowLoading = false
        state.seasonNowError = action.error
      })
      .addCase(fetchSeasonUpcoming.pending, (state) => {
        state.seasonUpcomingLoading = true
        state.seasonUpcomingError = false
      })
      .addCase(fetchSeasonUpcoming.fulfilled, (state, action) => {
        state.seasonUpcomingLoading = false
        state.seasonUpcomingError = false
        state.seasonUpcoming = action.payload
      })
      .addCase(fetchSeasonUpcoming.rejected, (state, action) => {
        state.seasonUpcomingLoading = false
        state.seasonUpcomingError = action.error
      })
      .addCase(fetchRecentAnimeRec.pending, (state) => {
        state.recentAnimeRecLoading = true
        state.recentAnimeRecError = false
      })
      .addCase(fetchRecentAnimeRec.fulfilled, (state, action) => {
        state.recentAnimeRec = action.payload
        state.recentAnimeRecLoading = false
        state.recentAnimeRecError = false
      })
      .addCase(fetchRecentAnimeRec.rejected, (state, action) => {
        state.recentAnimeRecLoading = false
        state.recentAnimeRecError = action.error
      })
      .addCase(fetchRecentMangaRec.pending, (state) => {
        state.recentMangaRecLoading = true
        state.recentMangaRecError = false
      })
      .addCase(fetchRecentMangaRec.fulfilled, (state, action) => {
        state.recentMangaRec = action.payload
        state.recentMangaRecLoading = false
        state.recentMangaRecError = false
      })
      .addCase(fetchRecentMangaRec.rejected, (state, action) => {
        state.recentMangaRecLoading = false
        state.recentMangaRecError = action.error
      })
  }
})

export default homeSlice
