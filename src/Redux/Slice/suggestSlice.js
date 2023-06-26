import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const suggestMovies = createAsyncThunk (
    'sugg/suggestMovie',
    async(url) => {
        return axios.get(url)
        .then(response => response.data)
        .catch(err => err.message)
    }
)

const suggSlice = createSlice({
    name : 'sugg',
    initialState: [],
    reducers: {},
    extraReducers : builder => {
        builder.addCase(suggestMovies.fulfilled, (state,action) => {
            state.push(...action.payload.data)
        })
    },
})

export default suggSlice.reducer