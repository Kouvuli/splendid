import React from "react"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import splendidApi from "../../apis/splendidApi"

const initialState = {
  loginSuccess: false,
  loginLoading: false,
  loginError: false,
  signUpSuccess: false,
  signUpLoading: false,
  signUpError: false,
  time: 0,
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
  reducers: {
    logOut: (state, action) => {
      state.success = false

      state.data = null
      localStorage.removeItem("user")
      state.loginSuccess = false
      state.loginLoading = false
      state.loginError = false
      state.signUpSuccess = false
      state.signUpLoading = false
      state.signUpError = false
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(SignUp.pending, (state) => {
        state.signUpLoading = true
        state.signUpError = false
        state.signUpSuccess = false
      })
      .addCase(SignUp.fulfilled, (state, action) => {
        state.signUpSuccess = true
        state.signUpLoading = false
        state.signUpError = false
      })
      .addCase(SignUp.rejected, (state, action) => {
        state.signUpError = true
        state.signUpLoading = false
      })
      .addCase(Login.pending, (state, action) => {
        state.loginLoading = true
        state.loginSuccess = false
        state.loginError = false
      })
      .addCase(Login.fulfilled, (state, action) => {
        state.loginSuccess = true
        state.data = action.payload
        state.loginLoading = false
      })
      .addCase(Login.rejected, (state, action) => {
        state.loginError = true
        state.loginLoading = false
      })
  }
})

export default loginSlice
