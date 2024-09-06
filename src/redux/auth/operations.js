import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.goit.global';

// add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
// remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

// POST @ /users/signup
// body: { name, email, password }

export const register = createAsyncThunk(
    "auth/register",
    async (credentials, thunkApi) => {
        try {
            const { data } = await axios.post('/users/signup', credentials);
            // add the token to the HTTP header after successful registration 
            setAuthHeader(data.token);
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)

// POST @ /users/login
// body: { email, password }

export const login = createAsyncThunk(
    "auth/login",
    async (credentials, thunkApi) => {
        try {
            const {data} = await axios.post('/users/login', credentials);
            // add the token to the HTTP header after successful login
            setAuthHeader(data.token);
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)

// POST @ /users/logout
// headers: Authorization: Bearer token

export const logout = createAsyncThunk(
    "auth/logout",
    async (_, thunkApi) => {
        try {
            await axios.post('/users/logout');
            // add the token to the HTTP header after successful logout 
            clearAuthHeader()
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)

// GET @ /users/me
// headers: Authorization: Bearer token

export const refresh = createAsyncThunk(
    "auth/refresh",
    async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      // If there is a token, add it to the HTTP header and perform the request
      setAuthHeader(persistedToken);
      const {data} = await axios.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)