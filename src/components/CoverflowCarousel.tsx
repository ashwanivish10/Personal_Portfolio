import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Naye modules import karein
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

// Swiper ke styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow'; // Coverflow effect ka style

// Iske liye alag se CSS file
import './CoverflowCarousel.css';

// Aapke projects ka data
const projects = [
    
  {
    name: 'E-Commerce Dashboard',
    src: 'https://images.pexels.com/photos/2058911/pexels-photo-2058911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Social Media Platform',
    src: 'https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Weather Application',
    src: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Portfolio Website',
    src: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Task Management App',
    src: 'https://images.pexels.com/photos/7679733/pexels-photo-7679733.jpeg',
  },
 
];
const duplicatedProjects = [...projects, ...projects];
export const CoverflowCarousel = () => {
  return (
    <div className="coverflow-container">
      <Swiper
        // Yahan saari settings images jaisi hain
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
           slidesPerGroup={1}
        pagination={{ el: '.swiper-pagination', clickable: true,dynamicBullets: true, }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {duplicatedProjects.map((project, index) => (
          <SwiperSlide key={index} style={{ backgroundImage: `url(${project.src})` }}>
            <div className="slide-content">
              <h2>{project.name}</h2>
              <a href="#">Explore</a>
            </div>
          </SwiperSlide>
        ))}

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow"></div>
          <div className="swiper-button-next slider-arrow"></div>
          {/* <div className="swiper-pagination"></div> */}
        </div>
      </Swiper>
    </div>
  );
};