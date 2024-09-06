import { createSlice } from "@reduxjs/toolkit"
import { login, logout, refresh, register } from "./operations";

const INITIAL_STATE = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

export const authSlice = createSlice({
    name: "auth",
    initialState: INITIAL_STATE,

    extraReducers: (builder) => builder
        // .addCase(register.pending, (state) => {})
        .addCase(register.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        })
        // .addCase(register.rejected, (state, action) => {})

        // .addCase(login.pending, (state) => {})
        .addCase(login.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        })
        // .addCase(login.rejected, (state, action) => {})

        // .addCase(logout.pending, (state) => {})
        .addCase(logout.fulfilled, (state, action) => {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
        })
        // .addCase(logout.rejected, (state, action) => {})

        .addCase(refresh.pending, (state) => {
            state.isRefreshing = true;
        })
        .addCase(refresh.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isRefreshing = false;
        })
        .addCase(refresh.rejected, (state) => {
            state.isRefreshing = false;
        })
});

export const authReducer = authSlice.reducer;