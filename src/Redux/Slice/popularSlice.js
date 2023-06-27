import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const populartMovies = createAsyncThunk (
    'popular/popularMovies',
    async(url) => {
        return axios.get(url)
        .then(response => response.data)
        .catch(err => err.message)
    }
)

const popularSlice = createSlice({
    name : 'popular',
    initialState: [],
    reducers: {},
    extraReducers : builder => {
        builder.addCase(populartMovies.fulfilled, (state,action) => {
            state.push(...action.payload.data)
        })
    },
})

export default popularSlice.reducer