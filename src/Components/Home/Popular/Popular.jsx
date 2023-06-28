"use client";

import { useDispatch, useSelector } from "react-redux"
import { populartMovies } from "../../../Redux/Slice/popularSlice"
import { useEffect } from "react"
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
const Popular = () => {
    const popular = useSelector((state) => state.popular)
    const dispatch = useDispatch()
    const theme = useTheme()

    useEffect(() => {
        dispatch(populartMovies('https://moviesapi.ir/api/v1/movies?page=7'))
    },[])

    const uniqueData = popular.filter((item, index, self) => {
        return index === self.findIndex((i) => i.id === item.id);
      });

    return(
        <>
        <div className="flex flex-wrap justify-evenly p-2">
            {uniqueData.map((item) => (
             <Card className="w-[400px] mt-6" sx={{ display: 'flex' }}>
             <Box sx={{ display: 'flex', flexDirection: 'column' }}>
               <CardContent className="flex flex-col justify-around" sx={{ flex: '1 0 auto' }}>
                 <Typography component="div" variant="h5">
                   {item.title}
                 </Typography>
                 <Typography variant="subtitle1" color="text.secondary" component="div">
                  country: {item.country}
                 </Typography>
                 <Typography variant="subtitle1" color="text.secondary" component="div">
                  Year: {item.year}
                 </Typography>
               </CardContent>
               <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                 <Typography variant="body2">Genres: {item.genres[1]}</Typography>
               </Box>
             </Box>
             <CardMedia
               component="img"
               sx={{ width: 151 }}
               image={item.poster}
               className="order-2 ml-auto"
               alt="Live from space album cover"
             />
           </Card>
            ))}
    </div>
        </>
    )
}

export default Popular