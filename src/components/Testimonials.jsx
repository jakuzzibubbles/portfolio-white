import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "../utils/data";

export default function Testimonials() {
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
      <h2 className="text-3xl text-yellow-900 mb-6 ">what clients say</h2>
      <div className="flex items-center justify-center">
        <button
          onClick={prevTestimonial}
          className="p-2 rounded-full border-2 border-yellow-900 transition"
        >
          <ChevronLeft size={24} className="text-yellow-800" />
        </button>
        <div className="w-96 shadow-lg p-6 bg-white rounded-lg mx-4 min-h-[220px] max-h-[350px] flex flex-col flex-grow items-center justify-center overflow-hidden">
          <div className="flex flex-col items-center">
            <p className="text-gray-700 italic">"{testimonials[index].text}"</p>
            <p className="mt-4 font-semibold text-gray-900">
              {testimonials[index].name}
            </p>
            <p className="text-sm text-gray-500">{testimonials[index].role}</p>
          </div>
        </div>
        <button
          onClick={nextTestimonial}
          className="p-2 rounded-full border-2 border-yellow-900 transition"
        >
          <ChevronRight size={24} className="text-yellow-800" />
        </button>
      </div>
    </div>
  );
}
