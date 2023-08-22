import React from 'react'
import './Project.css'
import ShoppingApp from './Images/ShoppingApp.png'
import Digitallock from './Images/Digitallock.png'
import TaskList from './Images/TaskList.png'
import Imagegallery from './Images/Imagegallery.png'
import Portfolio from './Images/Portfolio.png'
import CssTemplate from './Images/Cssbased-template.png'
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import {Autoplay, Pagination,Navigation } from 'swiper/modules';
import "swiper/css/pagination"
const Project = () => {
    return (
        <div className='portfolio-wrapper' id='Portfolio'>
            <h1>Recent <span>Projects</span></h1>
            <Swiper 
           autoplay={{delay :2500,
            disableOnInteraction: false,}}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
          pagination={{clickable:true}}
          spaceBetween={3}
          slidesPerView={3}
          grabCursor={true}
            >
                <SwiperSlide><a href='https://bright-tapioca-df8368.netlify.app'><img src={ShoppingApp}className='slider-img' alt='error'/></a></SwiperSlide>
                <SwiperSlide><a href='http://127.0.0.1:5500/index.html'><img src={Digitallock}className='slider-img' alt='error'/></a></SwiperSlide>
                <SwiperSlide><a href='http://127.0.0.1:5500/index.html'><img src={TaskList}className='slider-img' alt='error'/></a></SwiperSlide>
                <SwiperSlide><a href='https://deft-monstera-fd3ea1.netlify.app'><img src={Imagegallery}className='slider-img' alt='error'/></a></SwiperSlide>
                <SwiperSlide><a href='http://127.0.0.1:5500/index.html'><img src={CssTemplate}className='slider-img' alt='error'/></a></SwiperSlide>
                <SwiperSlide><a href='http://127.0.0.1:5500/index.html'><img src={Digitallock}className='slider-img' alt='error'/></a></SwiperSlide>
                
            </Swiper>
        </div>
    )
}

export default Project