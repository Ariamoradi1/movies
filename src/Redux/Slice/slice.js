import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';

export const fethMovie = createAsyncThunk(
    'firstMovie/fethMovie',
    async(url)=>{
        return axios.get(url)
        .then(response=>response.data)
        .catch(error=>error.message)
    }
)



 const slice = createSlice({
    name : 'firstMovie',
    initialState: [],
    reducers: {},
    extraReducers : builder => {
        builder.addCase(fethMovie.fulfilled, (state,action) => {
            state.push(...action.payload.data)
        })
    },
})

export default slice.reducer