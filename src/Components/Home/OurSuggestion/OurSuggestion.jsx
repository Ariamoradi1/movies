'use client'

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {suggestMovies}  from "../../../Redux/Slice/suggestSlice"
import { Typography } from "@mui/material"

const OurSuggestion = () => {
    const selector = useSelector((state) => state.suggest)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(suggestMovies('https://moviesapi.ir/api/v1/movies?page=4'))
    },[])
    const uniqueData = selector.filter((item, index, self) => {
        return index === self.findIndex((i) => i.id === item.id);
      });
    return(
        <>
         <div className="flex justify-evenly p-8 flex-wrap">
         
        {uniqueData.map((item) => (
            <>
            <div className="mt-9">
           <img className="h-96 w-60 shadow-2xl transition-transform duration-5500 ease-in-out transform hover:scale-95'" src={item.poster} alt={item.title} />
           <Typography className="mt-3" variant="h5">{item.title}</Typography>
           <div className="flex justify-evenly mt-4">
           <Typography variant="body2" color="text.secondary">
                year: {item.year},
               </Typography>
               <Typography variant="body2" color="text.secondary">
                country: {item.country},
               </Typography>
               <Typography variant="body2" color="text.secondary">
                rating: {item.imdb_rating} /10
            </Typography>
            </div>
            </div>
           </>
        ))}
        </div>
        </>
    )
}

export default OurSuggestion