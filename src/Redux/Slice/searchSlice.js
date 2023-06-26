import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';

export const search = createAsyncThunk(
    'searchMovie/search',
    async(value)=>{
        return axios.get(`https://moviesapi.ir/api/v1/movies?q=${value}`)
        .then(response=>response.data)
        .catch(error=>error.message)
    }
)

const searchSlice = createSlice({
    name : 'searchMovie',
    initialState: [],
    reducers: {},
    extraReducers : builder => {
        builder.addCase(search.fulfilled, (state,action) => {
          state.push(...action.payload.data)
        })
    },
})

export default searchSlice.reducer