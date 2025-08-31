import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './Card';
import { getSliderSettings } from '../utils/sliderSettings';
import { useState,useEffect } from 'react';
import axios from 'axios';

function Public() {
  const[Book,setBook]=useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get('http://localhost:4001/book?type=free');
        setBook(res.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    getBook();
  }, []);

  return (
    <div className='mt-4 md:mt-0 '>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 space-y-2 md:space-y-4'>
            <h1 className='text-3xl font-bold text-center'>Free Courses Provided</h1>
            <p className='text-xl mt-4'>This the platform where you can explore new things effectively with your work.Innovate new things and see the changes in the Your beloved world</p>
        </div>
        <div className=" mt-5 slider-container w-full container mx-auto md:px-20 px-4">
        <Slider {...getSliderSettings(Book)} >
        {Book.map((item) => (
            <Card item={item} key={item.id} width={92}/>
        ))}
      </Slider>
        </div>
    </div>
  )
}

export default Public