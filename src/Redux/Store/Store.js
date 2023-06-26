import { configureStore } from "@reduxjs/toolkit";
import movies from "../Slice/slice";
import suggMovie from '../Slice/suggestSlice'
import searchMovie from '../Slice/searchSlice'
export default configureStore({
    reducer:{
    movie : movies,
    suggest : suggMovie,
    search : searchMovie
    }
})