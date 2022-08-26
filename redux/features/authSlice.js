import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk("auth/login", async (user, { rejectWithValue }) => {
	try {
		const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, user);
		return response?.data?.token;
	} catch (err) {
		return rejectWithValue(err?.response?.data?.message);
	}
});

export const loginAdmin = createAsyncThunk("auth/login/admin", async (user, { rejectWithValue }) => {
	try {
		const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login/admin`, user);
		return response?.data?.token;
	} catch (err) {
		return rejectWithValue(err?.response?.data?.message);
	}
});

export const register = createAsyncThunk("auth/register", async (newUser, { rejectWithValue }) => {
	try {
		const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, newUser);
		return response?.data?.message;
	} catch (err) {
		if (err?.response?.status === 400) return rejectWithValue("User with this email already exist");
		return rejectWithValue(err?.response?.data?.message);
	}
});

const authSlice = createSlice({
	name: "auth",
	initialState: {
		token: null,
		isLoading: false,
		error: null,
		isRegistered: false,
		isImportant: false,
	},
	reducers: {
		clearError: (state) => {
			state.error = null;
		},
		logout: (state) => {
			state.token = null;
			state.isLoading = false;
			state.error = null;
			state.isRegistered = false;
			state.isImportant = false;
		},
		setRegistered: (state, { payload }) => {
			state.isRegistered = payload;
		},
	},
	extraReducers: {
		[login.pending]: (state) => {
			state.isLoading = true;
			state.token = null;
			state.error = null;
		},
		[login.fulfilled]: (state, { payload }) => {
			state.isLoading = false;
			state.token = payload;
			state.error = null;
		},
		[login.rejected]: (state, { payload }) => {
			state.isLoading = false;
			state.token = null;
			state.error = payload;
		},
		[loginAdmin.pending]: (state) => {
			state.isLoading = true;
			state.token = null;
			state.error = null;
			state.isImportant = null;
		},
		[loginAdmin.fulfilled]: (state, { payload }) => {
			state.isLoading = false;
			state.token = payload;
			state.error = null;
			state.isImportant = true;
		},
		[loginAdmin.rejected]: (state, { payload }) => {
			state.isLoading = false;
			state.token = null;
			state.error = payload;
			state.isImportant = false;
		},
		[register.pending]: (state) => {
			state.isLoading = true;
			state.error = null;
			state.isRegistered = false;
		},
		[register.fulfilled]: (state) => {
			state.isLoading = false;
			state.error = null;
			state.isRegistered = true;
		},
		[register.rejected]: (state, { payload }) => {
			state.error = payload;
			state.isLoading = false;
			state.isRegistered = false;
		},
	},
});

export const { clearError, logout, setRegistered } = authSlice.actions;
export default authSlice.reducer;
