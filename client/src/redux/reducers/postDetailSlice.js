import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import splendidApi from "../../apis/splendidApi"

const initialState = {
  loading: false,
  error: false,
  post: {},
  limit: 10,
  currentUser: {},
  commentsPage: 1,
  commentsLoading: false,
  commentsError: false,
  hasMoreComments: false,
  comments: [],
  reactionLoading: false,
  postReactionCount: 0,
  isReacted: false,
  reactions: [],
  reactionError: false
}

export const fetchPostById = createAsyncThunk("get-post", async (id) => {
  const { data } = await splendidApi.getPostById(id)
  return data
})

export const createComment = createAsyncThunk(
  "create-comment",
  async (params) => {
    const { data } = await splendidApi.insertComment(params)
    return data
  }
)

export const createReaction = createAsyncThunk(
  "insert-reaction-post",
  async (params) => {
    const { data } = await splendidApi.insertReaction(params)
    return data
  }
)

export const removeReaction = createAsyncThunk(
  "remove-reaction-post",
  async (id) => {
    const { data } = await splendidApi.deleteReaction(id)
    return data
  }
)

export const fetchPostComments = createAsyncThunk(
  "get-post-comments",
  async (params) => {
    const data = await splendidApi.getAllComment(params)
    return data
  }
)

export const fetchPostReactions = createAsyncThunk(
  "get-post-reaction",
  async (params) => {
    const { data } = await splendidApi.getReactionCount(params)
    return data
  }
)

const postDetailSlice = createSlice({
  name: "postDetail",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.currentUser = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostById.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(fetchPostById.fulfilled, (state, action) => {
        state.post = action.payload
        state.loading = false
        state.error = false
      })
      .addCase(fetchPostById.rejected, (state, action) => {
        state.error = action.error
        state.loading = false
      })
      .addCase(createComment.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(createComment.fulfilled, (state, action) => {
        state.comments.push(...action.payload.data)
        state.commentsPage++
        state.hasMoreComments = action.payload.pagination.has_next_page
        state.loading = false
        state.error = false
      })
      .addCase(createComment.rejected, (state, action) => {
        state.error = action.error
        state.loading = false
      })
      .addCase(createReaction.pending, (state) => {
        // state.recommendationsLoading = true
        // state.recommendationsError = false
      })
      .addCase(createReaction.fulfilled, (state, action) => {
        state.postReactionCount++
        state.isReacted = true
        // state.recommendationsLoading = false
        // state.recommendationsError = false
      })
      .addCase(createReaction.rejected, (state, action) => {
        // state.recommendationsError = action.error
        // state.recommendationsLoading = false
      })
      .addCase(removeReaction.pending, (state) => {
        // state.charactersLoading = true
        // state.charactersError = false
      })
      .addCase(removeReaction.fulfilled, (state, action) => {
        state.postReactionCount--
        state.isReacted = false
        // state.charactersLoading = false
        // state.charactersError = false
      })
      .addCase(removeReaction.rejected, (state, action) => {
        // state.charactersError = action.error
        // state.charactersLoading = false
      })
      .addCase(fetchPostComments.pending, (state) => {
        state.commentsLoading = true
        state.commentsError = false
      })
      .addCase(fetchPostComments.fulfilled, (state, action) => {
        if (state.hasMoreComments === true || state.commentsPage === 1) {
          state.comments.push(...action.payload.data)
          state.commentsPage++
        }
        state.hasMoreComments = action.payload.pagination.has_next_page
        state.commentsLoading = false
        state.commentsError = false
      })
      .addCase(fetchPostComments.rejected, (state, action) => {
        state.commentsError = action.error
        state.commentsLoading = false
      })
      .addCase(fetchPostReactions.pending, (state) => {
        state.reactionLoading = true
        state.reactionError = false
      })
      .addCase(fetchPostReactions.fulfilled, (state, action) => {
        state.reactions = action.payload
        state.reactions.forEach((element) => {
          if (element.author.id === state.currentUser.id) {
            state.isReacted = true
          }
        })
        state.postReactionCount = state.reactions.length
        state.reactionLoading = false
        state.reactionError = false
      })
      .addCase(fetchPostReactions.rejected, (state, action) => {
        state.reactionLoading = action.error
        state.reactionError = false
      })
  }
})
export default postDetailSlice
