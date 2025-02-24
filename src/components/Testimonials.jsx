import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "../utils/data";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

function Testimonials() {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="py-12 bg-transparent text-center">
      <div className="flex justify-center mb-6">
        {index === 2 ? (
          <>
            <FaStar className="text-3xl text-yellow-600" />
            <FaStar className="text-3xl text-yellow-600" />
            <FaStar className="text-3xl text-yellow-600" />
            <FaStar className="text-3xl text-yellow-600" />
            <FaStarHalfAlt className="text-3xl text-yellow-600" />
          </>
        ) : (
          <>
            <FaStar className="text-3xl text-yellow-600" />
            <FaStar className="text-3xl text-yellow-600" />
            <FaStar className="text-3xl text-yellow-600" />
            <FaStar className="text-3xl text-yellow-600" />
            <FaStar className="text-3xl text-yellow-600" />
          </>
        )}
      </div>
      <div className="flex items-center justify-center flex-wrap gap-4 sm:gap-6">
        <button
          onClick={prevTestimonial}
          className="p-2 rounded-full transition"
        >
          <ChevronLeft size={37} className="text-yellow-800" />
        </button>
        <div className="w-full sm:w-96 shadow-lg shadow-yellow-800 p-6 bg-white rounded-lg mx-4 min-h-[220px] max-h-[350px] flex flex-col flex-grow items-center justify-center overflow-hidden">
          <div className="flex flex-col items-center">
            <p className="text-gray-800 italic text-sm sm:text-base text-center">
              "{testimonials[index].text}"
            </p>
            <p className="mt-4 text-gray-600 text-sm sm:text-lg">
              {testimonials[index].name}
            </p>
            <p className="text-xs sm:text-sm text-gray-800">
              {testimonials[index].role}
            </p>
          </div>
        </div>
        <button
          onClick={nextTestimonial}
          className="p-2 rounded-full transition"
        >
          <ChevronRight size={37} className="text-yellow-800" />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
