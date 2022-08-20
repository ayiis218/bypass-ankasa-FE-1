import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// tolong hapus ini nanti
// nilai yang return dari fungsi asyncThunk ini kemudian akan masuk ke action.payload
// di extraReducer authSlice itu sudah saya lakukan destructuring dari object action sehingga bisa ...
// ... langsung akses payload
export const login = createAsyncThunk('auth/login', async (user, { rejectWithValue }) => {
  try {
    const response = await axios.post('https://bypass-ankasa-backend.herokuapp.com/auth/login', user)
    return response?.data?.token
  } catch(err) {
    return rejectWithValue(err?.response?.data?.message)
  }
})

export const register = createAsyncThunk('auth/register', async(newUser, { rejectWithValue }) => {
  try {
    const response = await axios.post('https://bypass-ankasa-backend.herokuapp.com/auth/register', newUser)
    return response?.data?.message
  } catch(err) {
    if (err?.response?.status === 400) return rejectWithValue('User with this email already exist')
    return rejectWithValue(err?.response?.data?.message)
  }
})

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    isLoading: false,
    error: null,
    isRegistered: false
  },
  reducers: {
    clearError: (state) => {
      state.error = null
    },
    logout: (state) => {
      state.token = null
      state.isLoading = false
      state.error = null
      state.isRegistered = false
    },
    setRegistered: (state, { payload }) => {
      state.isRegistered = payload
    }
  },
  extraReducers: {
    // tolong ini dihapus nanti
    // untuk tiap action yang ada di extra reducer ini punya 3 type yaitu:
    // pending, fulfilled, & rejected
    [login.pending]: (state) => {
      state.isLoading = true
      state.token = null
      state.error = null
    },
    [login.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      state.token = payload
      state.error = null
    },
    [login.rejected]: (state, { payload }) => {
      state.isLoading = false
      state.token = null
      state.error = payload
    },
    [register.pending]: (state) => {
      state.isLoading = true
      state.error = null
      state.isRegistered = false
    },
    [register.fulfilled]: (state) => {
      state.isLoading = false
      state.error = null
      state.isRegistered = true
    },
    [register.rejected]: (state, { payload })=> {
      state.error = payload
      state.isLoading = false
      state.isRegistered = false
    }
  }
})

export const { clearError, logout, setRegistered } = authSlice.actions
export default authSlice.reducer