import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import splendidApi from "../../apis/splendidApi"

const initialState = {
  loading: false,
  error: false,
  data: {},
  currentUser: {}
}
export const fetchUserById = createAsyncThunk("get-user", async (id) => {
  console.log("ads")
  const { data } = await splendidApi.getUserById(id)
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
  }
})
export default profileSlice
