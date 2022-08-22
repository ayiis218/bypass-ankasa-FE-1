import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getUser = createAsyncThunk('loggedInUser/getUser', async (userId, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/${userId}`)
    return response?.data
  } catch(err) {
    return rejectWithValue(err?.response?.data?.message)
  }
})

export const updateUser = createAsyncThunk('loggedInUser/updateUser', async (user, { rejectWithValue }) => {
  try {
    await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/users/${user.userId}`, user)
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/${user.userId}`)
    return response?.data
  } catch(err) {
    return rejectWithValue(err?.response?.data?.message)
  }
})

const loggedInUserSlice = createSlice({
  name: 'loggedInUser',
  initialState: {
    user: null,
    error: null,
    isLoading: false,
    updated: false
  },
  reducers: {
    removeUser: (state) => {
      state.user = null
      state.error = null
      state.isLoading = false
    }
  },
  extraReducers: {
    [getUser.pending]: (state) => {
      state.user = null
      state.error = null
      state.isLoading = true
    },
    [getUser.fulfilled]: (state, { payload }) => {
      state.user = payload
      state.error = null
      state.isLoading = false
    },
    [getUser.rejected]: (state, { payload }) => {
      state.user = null
      state.error = payload
      state.isLoading = false
    },
    [updateUser.pending]: (state) => {
      state.error = null
      state.isLoading = true
    },
    [updateUser.fulfilled]: (state, { payload }) => {
      state.user = payload
      state.error = null
      state.isLoading = false
    },
    [updateUser.rejected]: (state, { payload }) => {
      state.error = payload
      state.isLoading = false
    },
  }
})

export const { removeUser } = loggedInUserSlice.actions
export default loggedInUserSlice.reducer