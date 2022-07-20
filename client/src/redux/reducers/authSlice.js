import React from "react"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import splendidApi from "../../apis/splendidApi"

const initialState = {
  loading: null,
  error: null,
  data: JSON.parse(localStorage.getItem("user")) || null,
  success: false
}

export const SignUp = createAsyncThunk("signup", async (formData) => {
  console.log(formData)
  const data = await splendidApi.registerUser(formData)
  if (data.error) throw new Error(data.error.message)

  return data
})

export const Login = createAsyncThunk("login", async (formData) => {
  const data = await splendidApi.authenticateUser(formData)
  if (data.error) throw new Error(data.error.message)
  return data
})

const loginSlice = createSlice({
  name: "auth",
  initialState,
  reducers: (state) => {
    state.success = false
    localStorage.removeItem("user")
  },
  extraReducers: (builder) => {
    builder
      .addCase(SignUp.pending, (state) => {
        state.loading = true
      })
      .addCase(SignUp.fulfilled, (state, action) => {
        state.success = true
      })
      .addCase(SignUp.rejected, (state, action) => {
        state.error = true
      })
      .addCase(Login.pending, (state, action) => {
        state.loading = true
      })
      .addCase(Login.fulfilled, (state, action) => {
        state.success = true
      })
      .addCase(Login.rejected, (state, action) => {
        state.error = true
      })
  }
})

export default loginSlice
