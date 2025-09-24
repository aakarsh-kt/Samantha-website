import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import your paintings data
import { PAINTINGS } from "../assets/data/paintings.jsx";

export default function CarouselSection() {
  return (
    <section className="py-12 " id="carousel">
      <div className="container mx-auto px-4">
        {/* Header with View Gallery button */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Featured Paintings</h2>
          {/* <a
            href="#gallery"
            className="px-4 py-2 bg-pink-500 text-white rounded shadow hover:bg-pink-600 transition"
          >
            View Full Gallery
          </a> */}
        </div>

        {/* Wrap Swiper + custom pagination */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{
              clickable: true,
              el: ".custom-pagination", // attach pagination outside
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-6"
          >
            {PAINTINGS.map((p) => (
              <SwiperSlide key={p.id}>
                <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
                  {/* Frame wrapper with fixed ratio */}
                  <div className="relative w-full aspect-[4/5] flex items-center justify-center ">
                    {/* Matte black frame + white border */}
                    <div className=" m-4 flex flex-col items-center">
                        <div className="p-1.5 bg-gradient-to-br from-gray-500 to-gray-900 shadow-[12px_12px_24px_rgba(0,0,0,0.5)] max-w-[90%] max-h-[90%]">
                          <div className="border-8 border-white h-full w-full">
                            <img
                              src={p.image}
                              alt={p.title}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        
                        </div>
                        <div className="mt-4 text-center">
                            <h3 className="font-semibold text-lg">{p.title}</h3>
                                                  <p className="text-sm text-gray-500">
                            {p.year} • {p.size}
                                                  </p>
                                                  <p className="mt-2 font-bold text-pink-600">{p.price}</p>
                        </div>
                    </div>
                    
                    {/* Sold overlay */}
                    {p.status === "sold" && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                        <span className="bg-red-600 text-white px-4 py-2 rounded-full font-bold tracking-wide">
                          SOLD
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom pagination container below the slider */}
          <div className="custom-pagination flex justify-center mt-6"></div>
        </div>
      </div>
    </section>
  );
}
