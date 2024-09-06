import { createSlice } from "@reduxjs/toolkit"

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
        .addCase(authRegister.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(authRegister.fulfilled, (state, action) => {
            state.loading = false;
            state.items = action.payload;
        })
        .addCase(authRegister.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })

        .addCase(authLogin.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(authLogin.fulfilled, (state, action) => {
            state.loading = false;
            state.items = action.payload;
        })
        .addCase(authLogin.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })

        .addCase(authLogout.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(authLogout.fulfilled, (state, action) => {
            state.loading = false;
            state.items = action.payload;
        })
        .addCase(authLogout.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })

        .addCase(authRefresh.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(authRefresh.fulfilled, (state, action) => {
            state.loading = false;
            state.items = action.payload;
        })
        .addCase(authRefresh.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
});

export const authReducer = authSlice.reducer;


// import { createSlice } from "@reduxjs/toolkit";
// import { logIn, logOut, refreshUser, register } from "./operations";

// const INITIAL_STATE = {
//   user: {
//     name: null,
//     email: null,
//   },
//   token: null,
//   isLoggedIn: false,
//   isRefreshing: false,
// };

// export const authSlice = createSlice({
//   name: "auth",
//   initialState: INITIAL_STATE,
//   extraReducers: (builder) =>
//     builder
//       .addCase(register.fulfilled, (state, { payload }) => {
//         state.token = payload.token;
//         state.user = payload.user;
//         state.isLoggedIn = true;
//       })
//       .addCase(logIn.fulfilled, (state, { payload }) => {
//         state.token = payload.token;
//         state.user = payload.user;
//         state.isLoggedIn = true;
//       })
//       .addCase(logOut.fulfilled, (state) => {
//         state.user = { name: null, email: null };
//         state.token = null;
//         state.isLoggedIn = false;
//       })
//       .addCase(refreshUser.pending, (state) => {
//         state.isRefreshing = true;
//       })
//       .addCase(refreshUser.fulfilled, (state, { payload }) => {
//         state.user = payload;
//         state.isLoggedIn = true;
//         state.isRefreshing = false;
//       })
//       .addCase(refreshUser.rejected, (state) => {
//         state.isRefreshing = false;
//       }),
// });

// export const authReducer = authSlice.reducer;