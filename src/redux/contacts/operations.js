import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkApi) => {
        try {
            const { data } = await axios.get("/contacts");
            // const {data} = await axios.get("https://66d043d2181d059277dde2fc.mockapi.io/api/s1/Contact")
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId, thunkApi) => {
        try {
            const {data} = await axios.delete(`/contacts/${contactId}`)
            // const {data} = await axios.delete(`https://66d043d2181d059277dde2fc.mockapi.io/api/s1/Contact/${contactId}`)
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (contact, thunkApi) => {
        try {
            const {data} = await axios.post("/contacts", contact)
            // const {data} = await axios.post("https://66d043d2181d059277dde2fc.mockapi.io/api/s1/Contact", contact)
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)