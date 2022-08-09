import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import splendidApi from "../../apis/splendidApi"

const initialState = {
  loading: false,
  error: false,
  data: {},
  avatar: "",
  background: "",

  activitiesLimit: 18,
  activitiesHasNext: false,
  activitiesPage: 1,
  activities: [],
  activitiesLoading: false,
  activitiesError: false,
  updateUserSuccess: false,
  updateUserError: false,
  updatePostSuccess: false,
  updatePostError: false,
  updateCommentSuccess: false,
  updateCommentError: false,
  deletePostSuccess: false,
  deletePostError: false,
  deleteCommentError: false,
  deleteCommentSuccess: false,
  deleteReactionSuccess: false,
  deleteReactionError: false,

  animeListLimit: 18,
  animeListHasNext: false,
  animeListPage: 1,
  animeList: [],
  animeListLoading: false,
  animeListError: false,

  mangaListLimit: 18,
  mangaListHasNext: false,
  mangaListPage: 1,
  mangaList: [],
  mangaListLoading: false,
  mangaListError: false,

  deleteListSuccess: false,
  deleteListError: false,

  currentUser: {}
}
export const fetchUserById = createAsyncThunk("get-user", async (id) => {
  const { data } = await splendidApi.getUserById(id)
  return data
})

export const fetchActivityByUserId = createAsyncThunk(
  "get-activity",
  async (params) => {
    const data = await splendidApi.getActivityByUserId(params)

    return data
  }
)
export const updatedUser = createAsyncThunk("update-user", async (params) => {
  const { data } = await splendidApi.updateUser(params.id, {
    fullname: params.fullname,
    job: params.job,
    dob: params.dob,
    address: params.address,
    avatar: params.avatar,
    background: params.background
  })
  return data
})

export const updatePost = createAsyncThunk("update-post", async (params) => {
  const { data } = await splendidApi.updatePost(params.id, {
    content: params.content,
    title: params.title
  })
  return data
})

export const updateComment = createAsyncThunk(
  "update-comment",
  async (params) => {
    const { data } = await splendidApi.updateComment(params.id, {
      content: params.content
    })
    return data
  }
)
export const deletePost = createAsyncThunk("delete-post", async (id) => {
  const { data } = await splendidApi.deletePost(id)
  return data
})

export const deleteComment = createAsyncThunk("delete-comment", async (id) => {
  const { data } = await splendidApi.deleteComment(id)
  return data
})

export const deleteReaction = createAsyncThunk(
  "delete-reaction",
  async (id) => {
    const { data } = await splendidApi.deleteReactionById(id)
    return data
  }
)

export const fetchAnimeList = createAsyncThunk(
  "get-anime-list",
  async (params) => {
    const data = await splendidApi.getList(params)
    return data
  }
)

export const fetchMangaList = createAsyncThunk(
  "get-manga-list",
  async (params) => {
    const data = await splendidApi.getList(params)
    return data
  }
)

export const deleteList = createAsyncThunk("delete-list", async (id) => {
  const { data } = await splendidApi.deleteList(id)
  return data
})

export const uploadImage = createAsyncThunk("upload-image", async (params) => {
  const { data } = await splendidApi.uploadImage(params)
  return data
})
const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.currentUser = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserById.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.data = action.payload
        state.loading = false
        state.error = false
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.error = true

        state.loading = false
      })
      .addCase(fetchActivityByUserId.pending, (state) => {
        if (state.page === 1) {
          state.activitiesLoading = true
        } else {
          state.activitiesLoading = false
        }
        state.activitiesError = false
      })
      .addCase(fetchActivityByUserId.fulfilled, (state, action) => {
        state.activities.push(...action.payload.data)
        state.activitiesHasNext = action.payload.pagination.has_next_page
        ++state.activitiesPage
        state.activitiesLoading = false
        state.activitiesError = false
      })
      .addCase(fetchActivityByUserId.rejected, (state, action) => {
        state.activitiesLoading = false
        state.activitiesError = true
      })
      .addCase(updatedUser.pending, (state) => {
        state.updateUserSuccess = false
        state.updateUserError = false
      })
      .addCase(updatedUser.fulfilled, (state, action) => {
        state.data = action.payload
        state.updateUserSuccess = true
        state.updateUserError = false
      })
      .addCase(updatedUser.rejected, (state, action) => {
        state.updateUserSuccess = false
        state.updateUserError = true
      })
      .addCase(updatePost.pending, (state) => {
        state.updatePostError = false
        state.updatePostSuccess = false
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        state.updatePostError = false
        state.updatePostSuccess = true
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.updatePostError = true
        state.updatePostSuccess = false
      })
      .addCase(updateComment.pending, (state) => {
        state.updateCommentError = false
        state.updateCommentSuccess = false
      })
      .addCase(updateComment.fulfilled, (state, action) => {
        state.updateCommentError = false
        state.updateCommentSuccess = true
      })
      .addCase(updateComment.rejected, (state, action) => {
        state.updateCommentError = true
        state.updateCommentSuccess = false
      })
      .addCase(deletePost.pending, (state) => {
        state.deletePostError = false
        state.deletePostSuccess = false
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.deletePostError = false
        state.deletePostSuccess = true
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.deletePostError = true
        state.deletePostSuccess = false
      })
      .addCase(deleteComment.pending, (state) => {
        state.deleteCommentError = false
        state.deleteCommentSuccess = false
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        state.deleteCommentError = false
        state.deleteCommentSuccess = true
      })
      .addCase(deleteComment.rejected, (state, action) => {
        state.deleteCommentError = true
        state.deleteCommentSuccess = false
      })
      .addCase(deleteReaction.pending, (state) => {
        state.deleteReactionError = false
        state.deleteReactionSuccess = false
      })
      .addCase(deleteReaction.fulfilled, (state, action) => {
        state.deleteReactionError = false
        state.deleteReactionSuccess = true
      })
      .addCase(deleteReaction.rejected, (state, action) => {
        state.deleteReactionError = true
        state.deleteReactionSuccess = false
      })

      .addCase(fetchAnimeList.pending, (state) => {
        if (state.animeListPage === 1) {
          state.animeListLoading = true
        } else {
          state.animeListLoading = false
        }
        state.animeListLoading = false
      })
      .addCase(fetchAnimeList.fulfilled, (state, action) => {
        state.animeList.push(...action.payload.data)
        state.animeListHasNext = action.payload.pagination.has_next_page
        ++state.animeListPage
        state.animeListLoading = false
        state.animeListError = false
      })
      .addCase(fetchAnimeList.rejected, (state, action) => {
        state.animeListLoading = false
        state.animeListError = true
      })

      .addCase(fetchMangaList.pending, (state) => {
        if (state.mangaListPage === 1) {
          state.mangaListLoading = true
        } else {
          state.mangaListLoading = false
        }
        state.mangaListLoading = false
      })
      .addCase(fetchMangaList.fulfilled, (state, action) => {
        state.mangaList.push(...action.payload.data)
        state.mangaListHasNext = action.payload.pagination.has_next_page
        ++state.mangaListPage
        state.mangaListLoading = false
        state.mangaListError = false
      })
      .addCase(fetchMangaList.rejected, (state, action) => {
        state.mangaListLoading = false
        state.mangaListError = true
      })
      .addCase(deleteList.pending, (state) => {
        state.deleteListError = false
        state.deleteListSuccess = false
      })
      .addCase(deleteList.fulfilled, (state, action) => {
        state.deleteListError = false
        state.deleteListSuccess = true
      })
      .addCase(deleteList.rejected, (state, action) => {
        state.deleteListError = true
        state.deleteListSuccess = false
      })
      .addCase(uploadImage.pending, (state) => {})
      .addCase(uploadImage.fulfilled, (state, action) => {
        state.avatar = action.payload
      })
      .addCase(uploadImage.rejected, (state, action) => {})
  }
})
export default profileSlice
