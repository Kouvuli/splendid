import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import animeApi from "../../apis/animeApi"
import splendidApi from "../../apis/splendidApi"
const initialState = {
  loading: false,
  error: false,
  data: {},
  currentUser: {},
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
  "insert-anime-list",
  async (params) => {
    const { data } = await splendidApi.insertList(params)
    return data
  }
)

export const fetchAnimeDetail = createAsyncThunk("anime-detail", async (id) => {
  const { data } = await animeApi.getAnimeById(id)
  return data
})

export const fetchtAnimeRecommendations = createAsyncThunk(
  "anime-recommendations",
  async (id) => {
    const { data } = await animeApi.getAnimeRecommendations(id)
    return data
  }
)

export const fetchCharacterById = createAsyncThunk(
  "anime-detail-characters",
  async (id) => {
    const { data } = await animeApi.getAnimeCharacters(id)
    return data
  }
)

export const fetchNewsById = createAsyncThunk(
  "anime-detail-news",
  async (id, params) => {
    const data = await animeApi.getAnimeNews(id, params)
    return data
  }
)

export const fetchReviewsById = createAsyncThunk(
  "anime-detail-reviews",
  async (id, params) => {
    const data = await animeApi.getAnimeReviews(id, params)
    return data
  }
)
export const fetchAnimeCommentsById = createAsyncThunk(
  "anime-detail-comments",
  async (params) => {
    const data = await splendidApi.getAnimeCommentByMalId(params)
    return data
  }
)

export const createComment = createAsyncThunk(
  "create-comment",
  async (param) => {
    const data = splendidApi.insertComment(param)
    return data
  }
)

export const fetchAnimeRelations = createAsyncThunk(
  "anime-detail-relations",
  async (id) => {
    const { data } = await animeApi.getAnimeRelations(id)
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
  name: "animeDetail",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.currentUser = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnimeDetail.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(fetchAnimeDetail.fulfilled, (state, action) => {
        state.data = action.payload
        state.loading = false
        state.error = false
      })
      .addCase(fetchAnimeDetail.rejected, (state, action) => {
        state.error = action.error
        state.loading = false
      })
      .addCase(fetchtAnimeRecommendations.pending, (state) => {
        state.recommendationsLoading = true
        state.recommendationsError = false
      })
      .addCase(fetchtAnimeRecommendations.fulfilled, (state, action) => {
        state.recommendations = action.payload
        state.recommendationsLoading = false
        state.recommendationsError = false
      })
      .addCase(fetchtAnimeRecommendations.rejected, (state, action) => {
        state.recommendationsError = action.error
        state.recommendationsLoading = false
      })
      .addCase(fetchCharacterById.pending, (state) => {
        state.charactersLoading = true
        state.charactersError = false
      })
      .addCase(fetchCharacterById.fulfilled, (state, action) => {
        state.characters = action.payload
        state.charactersLoading = false
        state.charactersError = false
      })
      .addCase(fetchCharacterById.rejected, (state, action) => {
        state.charactersError = action.error
        state.charactersLoading = false
      })
      .addCase(fetchNewsById.pending, (state) => {
        state.newsLoading = true
        state.newsError = false
      })
      .addCase(fetchNewsById.fulfilled, (state, action) => {
        if (state.hasMoreNews === true || state.newsPage === 1) {
          state.news.push(...action.payload.data)
          state.newsPage++
        }
        state.hasMoreNews = action.payload.pagination.has_next_page
        state.newsLoading = false
        state.newsError = false
      })
      .addCase(fetchNewsById.rejected, (state, action) => {
        state.newsError = action.error
        state.newsLoading = false
      })
      .addCase(fetchReviewsById.pending, (state) => {
        state.reviewsLoading = true
        state.reviewsError = false
      })
      .addCase(fetchReviewsById.fulfilled, (state, action) => {
        if (state.hasMoreReviews === true || state.reviewsPage === 1) {
          state.reviews.push(...action.payload.data)
          state.reviewsPage++
        }
        state.hasMoreReviews = action.payload.pagination.has_next_page

        state.reviewsLoading = false
        state.reviewsError = false
      })
      .addCase(fetchReviewsById.rejected, (state, action) => {
        state.reviewsError = action.error
        state.reviewsLoading = false
      })
      .addCase(fetchAnimeRelations.pending, (state) => {
        state.relationsLoading = true
        state.relationsError = false
      })
      .addCase(fetchAnimeRelations.fulfilled, (state, action) => {
        state.relations = action.payload
        state.relationsLoading = false
        state.relationsError = false
      })
      .addCase(fetchAnimeRelations.rejected, (state, action) => {
        state.relationsError = action.error
        state.relationsLoading = false
      })
      .addCase(fetchAnimeCommentsById.pending, (state) => {
        state.commentsLoading = true
        state.commentsError = false
      })
      .addCase(fetchAnimeCommentsById.fulfilled, (state, action) => {
        if (state.hasMoreComments === true || state.commentsPage === 1) {
          state.comments.push(...action.payload.data)
          state.commentsPage++
        }
        state.hasMoreComments = action.payload.pagination.has_next_page

        state.commentsLoading = false
        state.commentsError = false
      })
      .addCase(fetchAnimeCommentsById.rejected, (state, action) => {
        state.commentsError = action.error
        state.commentsLoading = false
      })

      .addCase(createComment.pending, (state) => {
        state.commentsLoading = true
        state.commentsError = false
      })
      .addCase(createComment.fulfilled, (state, action) => {
        // state.data.push(...action.payload)
        // ++state.page
        state.commentsLoading = false
        state.commentsError = false
      })
      .addCase(createComment.rejected, (state, action) => {
        state.commentsLoading = false
        state.commentsError = true
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
