import React, { useState,useEffect } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import axios from 'axios'
import Card from '../Components/Card'
import {Link} from 'react-router-dom'

function Course() {
  const[Book,setBook]=useState([]);
  useEffect(()=>{
    const getBook = async () => {
    try {
      const res = await axios.get('http://localhost:4001/book?type=paid');
      setBook(res.data);
    } catch (error) {
      console.log("Error :",error)
    }};
    getBook();
  },[]);
  return (
    <>
    <Header/>
    <div className='min-h-screen mt-25 max-w-screen-2xl container mx-auto md:px-20 px-4 pt-3.5'>
      <div className='text-center'>
        <h1 className='text-3xl '>We are very Happy to <span className='text-green-400'>have you here :)</span></h1>
        <p className='font-light mt-10'>Please join our website to get more information about our courses and guide your future to right direction.We are here to help you to get your dream job.Focus on your work to get your goal</p>
        <Link to="/">
        <button className='mt-6 px-4 py-1 hover:cursor-pointer bg-green-500 rounded-md'>Back</button>
        </Link>
      </div>
      <div className='mt-6 grid grid-cols-1 md:grid-cols-4 gap-5'>
        {Book.map((item) => 
          (<Card item={item} id={item.id} width={72}/>)
        )}  
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Course