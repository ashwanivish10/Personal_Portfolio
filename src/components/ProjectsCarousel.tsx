import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
// import CarouselCard from './ui/CarouselCard'; // Aapka naya CarouselCard
import { CarouselCard } from './ui/CarouselCard'; 
import './ui/CarouselCard.css';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Yeh component projects ki list lega aur unhe carousel mein dikhayega
const ProjectsCarousel = ({ projects }: { projects: any[] }) => {
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      spaceBetween={30}
      slidesPerView={3}
      loop={true}
      navigation={true}
      pagination={{ clickable: true }}
    >
      {projects.map((project, index) => (
        <SwiperSlide key={index}>
          <CarouselCard
            index={index}
            title={project.title}
            image={project.image}
            technologies={project.technologies}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectsCarousel;