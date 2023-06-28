'use client';

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fethMovie } from "../../../Redux/Slice/slice";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const TenMovie = () => {

  const movies = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fethMovie('https://moviesapi.ir/api/v1/movies?page=1'));
  },[]);
  
  const uniqueData = movies.filter((item, index, self) => {
    return index === self.findIndex((i) => i.id === item.id);
  });
  return (
    <>
    <Typography className="text-center relative top-4" variant="h5">Nostalgic Movies!</Typography>
      <div className="mt-10">
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      autoplay={{delay: 4000}}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      draggable={{draggable:true}}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
          {uniqueData.map((item) => (
             <SwiperSlide  className='overflow-hidden'>
              <div className="flex justify-center">
             <Card className="h-fit w-[400px] mb-8">
             <CardMedia
               sx={{ height: 350 }}
               className="object-contain"
               image={item.poster}
               title={item.genres}
             />
             <CardContent>
               <Typography gutterBottom variant="h6" component="div">
                 {item.title}
               </Typography>
               <div className="flex justify-evenly">
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
             </CardContent>
           </Card>
           </div>
           </SwiperSlide>
          ))}
        </Swiper>
        
      </div>
    </>
  );
};

export default TenMovie





