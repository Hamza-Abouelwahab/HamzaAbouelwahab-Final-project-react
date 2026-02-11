import { useState } from "react";
import  CarouselJson  from "../constant/json/carousel.json";


// const images = [
//   "https://picsum.photos/id/1018/1000/500",
//   "https://picsum.photos/id/1015/1000/500",
//   "https://picsum.photos/id/1019/1000/500",
// ];

export const Carousel = () => {

    
  const [current, setCurrent] = useState(0);
  const data = CarouselJson[0]; 
  const images = data.image;
  const length = images.length;

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <div className="relative w-full h-125 overflow-hidden">
      
      {/* Slides Wrapper */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
     {images.map((imgName, index) => {
  const imageUrl = new URL(imgName, import.meta.url).href;

  return (
    <div key={index} className="min-w-full h-125 relative">
      <div className="absolute z-10 top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col gap-2 items-center left-1/2 p-2 text-white">
        <p className="text-white text-3xl font-extralight">{data.paragraphe}</p>
        <h1 className="text-8xl text-white ">{data.title}</h1>
        <div className="flex justify-center">
          <button className="mt-4 bg-white rounded-4xl cursor-pointer text-xl text-black px-6 py-2">
            {data.btn}
          </button>
        </div>
      </div>
      
      <img
        src={imageUrl} 
        alt="slide"
        className="w-full h-125 object-cover"
      />
    </div>
  );
})}
      </div>
      <button onClick={prevSlide} className="absolute top-1/2 text-white bg-black/50 hover:bg-red-400 flex justify-center items-center cursor-pointer h-8 w-8 rounded-2xl left-15 ..."> ❮ </button>
      <button onClick={nextSlide} className="absolute top-1/2 text-white bg-black/50 hover:bg-red-400 flex justify-center items-center cursor-pointer h-8 w-8 rounded-2xl right-15 ..."> ❯ </button>
    </div>
  );
};
