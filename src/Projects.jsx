import React, { useRef } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import { projects } from "./utils/data";

const Projects = () => {

  const swiperRef = useRef(null);

  return (
    <div className="container mx-auto px-6 py-12 mt-24 bg-transparent">
      <h1 className="text-3xl text-black text-center mb-12 flex items-center justify-center gap-2 flex-wrap">
        my personal collection of digital experiences made with 🩷
      </h1>

      <Swiper
        ref={swiperRef}
        slidesPerView={1.2}
        spaceBetween={40}
        breakpoints={{
          640: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3.2 },
        }}
        freeMode={true}
        grabCursor={true}
        modules={[Navigation, FreeMode]}
        className="w-full"
      >
        {projects.map((project, index) => (
          <SwiperSlide
            key={index}
            className="border-2 shadow-lg bg-gradient-to-br from-yellow-400 to-yellow-700 flex flex-col items-center rounded-2xl"
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center transform transition-transform hover:scale-105"
            >
              <h2 className="text-xl text-white mt-4">{project.title}</h2>
              <img
                src={project.image}
                alt={project.title}
                className="w-64 h-44 mb-4 rounded-lg object-cover mt-6"
              />

              <p className="text-sm text-white mb-6">{project.description}</p>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center items-center gap-8 mt-6">
        <button
          onClick={() => swiperRef.current.swiper.slidePrev()}
          className="bg-transparent text-slate-600/80 text-2xl p-3 rounded-full shadow-lg transform transition-transform hover:scale-150 border-2"
        >
          ❮
        </button>
        <button
          onClick={() => swiperRef.current.swiper.slideNext()}
          className="bg-transparent text-slate-600/80 text-2xl p-3 rounded-full shadow-lg transform transition-transform hover:scale-150 border-2"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Projects;
