import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import animeApi from "../../apis/animeApi"
import splendidApi from "../../apis/splendidApi"
const initialState = {
  loading: false,
  error: false,
  data: {},
  newsPage: 1,
  newsLoading: false,
  newsError: false,
  hasMoreNews: false,
  news: [],
  charactersLoading: false,
  characters: [],
  charactersError: false,
  recommendationsLoading: false,
  recommendations: [],
  recommendationsError: false,
  relationsLoading: false,
  relations: [],
  relationsError: false,

  commentsLimit: 12,
  comments: [],
  commentsPage: 1,
  hasMoreComments: false,
  commentsLoading: false,
  commentsError: false,

  reviews: [],
  reviewsPage: 1,
  hasMoreReviews: false,
  reviewsLoading: false,
  reviewsError: false,

  insertListLoading: null,
  insertListSuccess: false,
  insertListError: false
}

export const insertList = createAsyncThunk(
  "insert-manga-list",
  async (params) => {
    const { data } = await splendidApi.insertList(params)
    return data
  }
)
export const fetchMangaDetail = createAsyncThunk("manga-detail", async (id) => {
  const { data } = await animeApi.getMangaById(id)
  return data
})

export const fetchtMangaRecommendations = createAsyncThunk(
  "manga-recommendations",
  async (id) => {
    const { data } = await animeApi.getMangaRecommendations(id)
    return data
  }
)
export const fetchMangaCommentsById = createAsyncThunk(
  "manga-detail-comments",
  async (params) => {
    const data = await splendidApi.getMangaCommentByMalId(params)
    return data
  }
)
export const fetchMangaCharacterById = createAsyncThunk(
  "manga-detail-characters",
  async (id) => {
    const { data } = await animeApi.getMangaCharacters(id)
    return data
  }
)

export const fetchMangaNewsById = createAsyncThunk(
  "manga-detail-news",
  async (id, params) => {
    const data = await animeApi.getMangaNews(id, params)
    return data
  }
)

export const fetchMangaReviewsById = createAsyncThunk(
  "manga-detail-reviews",
  async (id, params) => {
    const data = await animeApi.getMangaReviews(id, params)
    return data
  }
)

export const fetchMangaRelations = createAsyncThunk(
  "manga-detail-relations",
  async (id) => {
    const { data } = await animeApi.getMangaRelations(id)
    // data.forEach(item=>{
    //   item.forEach(rel=>{
    //     if (rel.type === "anime") {
    //       const returnVal=await animeApi.getAnimeById(rel.mal_id)

    //     }
    //   })
    // })

    return data
  }
)
const animeDetailSlice = createSlice({
  name: "mangaDetail",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.currentUser = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMangaDetail.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(fetchMangaDetail.fulfilled, (state, action) => {
        state.data = action.payload
        state.loading = false
        state.error = false
      })
      .addCase(fetchMangaDetail.rejected, (state, action) => {
        state.error = action.error
        state.loading = false
      })
      .addCase(fetchtMangaRecommendations.pending, (state) => {
        state.recommendationsLoading = true
        state.recommendationsError = false
      })
      .addCase(fetchtMangaRecommendations.fulfilled, (state, action) => {
        state.recommendations = action.payload
        state.recommendationsLoading = false
        state.recommendationsError = false
      })
      .addCase(fetchtMangaRecommendations.rejected, (state, action) => {
        state.recommendationsError = action.error
        state.recommendationsLoading = false
      })
      .addCase(fetchMangaCharacterById.pending, (state) => {
        state.charactersLoading = true
        state.charactersError = false
      })
      .addCase(fetchMangaCharacterById.fulfilled, (state, action) => {
        state.characters = action.payload
        state.charactersLoading = false
        state.charactersError = false
      })
      .addCase(fetchMangaCharacterById.rejected, (state, action) => {
        state.charactersError = action.error
        state.charactersLoading = false
      })
      .addCase(fetchMangaNewsById.pending, (state) => {
        state.newsLoading = true
        state.newsError = false
      })
      .addCase(fetchMangaNewsById.fulfilled, (state, action) => {
        if (state.hasMoreNews === true || state.newsPage === 1) {
          state.news.push(...action.payload.data)
          state.newsPage++
        }
        state.hasMoreNews = action.payload.pagination.has_next_page
        state.newsLoading = false
        state.newsError = false
      })
      .addCase(fetchMangaNewsById.rejected, (state, action) => {
        state.newsError = action.error
        state.newsLoading = false
      })
      .addCase(fetchMangaReviewsById.pending, (state) => {
        state.reviewsLoading = true
        state.reviewsError = false
      })
      .addCase(fetchMangaReviewsById.fulfilled, (state, action) => {
        if (state.hasMoreReviews === true || state.reviewsPage === 1) {
          state.reviews.push(...action.payload.data)
          state.reviewsPage++
        }
        state.hasMoreReviews = action.payload.pagination.has_next_page

        state.reviewsLoading = false
        state.reviewsError = false
      })
      .addCase(fetchMangaReviewsById.rejected, (state, action) => {
        state.reviewsError = action.error
        state.reviewsLoading = false
      })
      .addCase(fetchMangaRelations.pending, (state) => {
        state.relationsLoading = true
        state.relationsError = false
      })
      .addCase(fetchMangaRelations.fulfilled, (state, action) => {
        state.relations = action.payload
        state.relationsLoading = false
        state.relationsError = false
      })
      .addCase(fetchMangaRelations.rejected, (state, action) => {
        state.relationsError = action.error
        state.relationsLoading = false
      })
      .addCase(fetchMangaCommentsById.pending, (state) => {
        state.commentsLoading = true
        state.commentsError = false
      })
      .addCase(fetchMangaCommentsById.fulfilled, (state, action) => {
        if (state.hasMoreComments === true || state.commentsPage === 1) {
          state.comments.push(...action.payload.data)
          state.commentsPage++
        }
        state.hasMoreComments = action.payload.pagination.has_next_page

        state.commentsLoading = false
        state.commentsError = false
      })
      .addCase(fetchMangaCommentsById.rejected, (state, action) => {
        state.commentsError = action.error
        state.commentsLoading = false
      })
      .addCase(insertList.pending, (state) => {
        state.insertListSuccess = false
        state.insertListError = false
        state.insertListLoading = true
      })
      .addCase(insertList.fulfilled, (state) => {
        state.insertListSuccess = true
        state.insertListError = false
        state.insertListLoading = false
      })
      .addCase(insertList.rejected, (state) => {
        state.insertListSuccess = false
        state.insertListError = true
        state.insertListLoading = false
      })
  }
})
export default animeDetailSlice
