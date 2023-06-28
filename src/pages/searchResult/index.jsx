import { useSelector } from "react-redux"
import { Typography } from "@mui/material"
import { useState } from "react"
import Button from '@mui/material/Button';
import { useRouter } from "next/router";

const searchResult = () => {
    const select = useSelector((state) => state.search)
    const route = useRouter()
    const navigate = () => {
     route.push('/')
    }
    return(
        <>
        {select.length === 0 ?
         <div className="w-full h-[100vh] bg-white">
         <div className="flex flex-wrap justify-center relative top-[25%]">
         <img className="w-[300px] h-[300px]" src="oops.avif" alt="error" />
         <div className="flex flex-col justify-center">
         <Typography variant="h5">Oops...The Desired Movie Was Not Found</Typography>
         <Button onClick={navigate} variant="outlined">Go To Home Page</Button>
         </div>
        </div>
        </div>
        :
        <>
         <div className="flex justify-center mt-[50px] flex-wrap">
         {select.map((item) => (
             <div className="flex justify-evenly">
                 <img className="h-[400px] w-[350px] rounded-xl" src={item.poster} alt={item.title} />
                 <div className="p-5 flex flex-col justify-around">
                 <Typography variant="h4">{item.title}</Typography>
                 <Typography variant="h4">Country: {item.country}</Typography>
                 <Typography variant="h6">year: {item.year}</Typography>
                 <Typography variant="h6">Genres: {item.genres}</Typography>
                 <Typography variant="h6">imdb rating: {item.imdb_rating}</Typography>
                 </div>
             </div>
         ))}
     </div>
     <Typography className="text-center mt-[25px]" variant="h6">more image for this movie!</Typography>
     <div className="flex flex-wrap justify-evenly mt-[50px]">
     {select.map((img) => (
         
         <>
         <img className="w-[700px] h-[500px]" src={img.images[0]} alt={img.title} />
         <img className="w-[700px] h-[500px] mt-9" src={img.images[1]} alt={img.title} />
         <img className="w-[700px] h-[500px] mt-9" src={img.images[2]} alt={img.title} />
         </>
         ))}
        </div>
        </>
        }
        </>
    )
}

export default searchResult