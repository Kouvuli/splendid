import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import splendidApi from "../../apis/splendidApi"

const initialState = {
  currentUser: {},
  reactionLoading: false,
  commentReactionCount: [],
  isReacted: [],
  reactions: [],
  reactionError: false
}

export const createReaction = createAsyncThunk(
  "insert-reaction-comment",
  async (params) => {
    const { data } = await splendidApi.insertReaction(params)
    return data
  }
)

export const removeReaction = createAsyncThunk(
  "remove-reaction-comment",
  async (id) => {
    const { data } = await splendidApi.deleteReaction(id)
    return data
  }
)

export const fetchCommentReactions = createAsyncThunk(
  "get-comment-reaction",
  async (params) => {
    const { data } = await splendidApi.getReactionCount(params)
    return { data: data, id: params.comment_id }
  }
)

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.currentUser = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createReaction.pending, (state) => {
        // state.recommendationsLoading = true
        // state.recommendationsError = false
      })
      .addCase(createReaction.fulfilled, (state, action) => {
        state.commentReactionCount++
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
        state.commentReactionCount--
        state.isReacted = false
        // state.charactersLoading = false
        // state.charactersError = false
      })
      .addCase(fetchCommentReactions.pending, (state) => {
        state.reactionLoading = true
        state.reactionError = false
      })
      .addCase(removeReaction.rejected, (state, action) => {
        // state.charactersError = action.error
        // state.charactersLoading = false
      })
      .addCase(fetchCommentReactions.fulfilled, (state, action) => {
        state.reactions.push(action.payload)
        action.payload.data.forEach((element) => {
          if (element.author.id === state.currentUser.id) {
            // if (state.isReacted.length === 0) {
            state.isReacted.push(action.payload.id)
          }
        })

        state.commentReactionCount.push({
          id: action.payload.id,
          count: action.payload.data.length
        })
        state.reactionLoading = false
        state.reactionError = false
      })
      .addCase(fetchCommentReactions.rejected, (state, action) => {
        state.reactionLoading = action.error
        state.reactionError = false
      })
  }
})
export default commentSlice
