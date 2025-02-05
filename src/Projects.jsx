import React, { useRef } from "react";
import { Navigation } from "swiper/modules";
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import mushroomsImage from "./assets/mushrooms.png";
import valentineImage from "./assets/valentine.png";
import paralaxImage from "./assets/paralax.png";
import portfolio1Image from "./assets/portfolio1.png";
import memoryImage from "./assets/memory-card.png";
import taskImage from "./assets/task.png";

const projects = [
  {
    title: "five shrooms",
    image: mushroomsImage,
    link: "https://shrooms.vercel.app/",
    description: "tic-tac-toe with a twist",
  },
  {
    title: "food coma",
    image: memoryImage,
    link: "https://the-odin-project-mu.vercel.app/",
    description: "learning react",
  },
  {
    title: "be my valentine",
    image: valentineImage,
    link: "https://jakuzzibubbles.github.io/be-my-valentine/",
    description: "a message for your date",
  },
  {
    title: "collecting ideas",
    image: taskImage,
    link: "https://jakuzzibubbles.github.io/taskmanager/",
    description: "just another to-do list",
  },
  {
    title: "portfolio paralax",
    image: paralaxImage,
    link: "https://portfolio-linh.vercel.app/",
    description: "experimenting with threejs",
  },
  {
    title: "portfolio react",
    image: portfolio1Image,
    link: "https://jakuzzibubbles-portfolio.vercel.app/",
    description: "built using react and tailwindcss",
  },
];

const Projects = () => {

  const swiperRef = useRef(null);

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl text-black text-center mb-12 flex items-center justify-center gap-2 flex-wrap">
        my personal collection of digital experiences made with 🩷 &
        <FaReact size={30} className="text-blue-950 sm:size-24" />
        <FaHtml5 size={30} className="text-orange-600 sm:size-24" />
        <FaCss3Alt size={30} className="text-blue-500 sm:size-24" />
        <FaJsSquare size={30} className="text-yellow-500 sm:size-24" />
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
            className="border-2 border-slate-400 shadow-lg bg-slate-200/50 flex flex-col items-center rounded-2xl"
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center transform transition-transform hover:scale-105"
            >
              <h2 className="text-xl text-black mt-4">{project.title}</h2>
              <img
                src={project.image}
                alt={project.title}
                className="w-64 h-44 mb-4 rounded-lg object-cover mt-6"
              />

              <p className="text-sm text-black mb-6">{project.description}</p>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center items-center gap-8 mt-6">
        <button
          onClick={() => swiperRef.current.swiper.slidePrev()}
          className="bg-transparent text-slate-600/80 text-2xl p-3 rounded-full shadow-lg transform transition-transform hover:scale-150"
        >
          ❮
        </button>
        <button
          onClick={() => swiperRef.current.swiper.slideNext()}
          className="bg-transparent text-slate-600/80 text-2xl p-3 rounded-full shadow-lg transform transition-transform hover:scale-150"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Projects;
