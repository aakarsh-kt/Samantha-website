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
             
                  <div className="relative w-full aspect-[4/5] flex items-center justify-center ">
              
                    <div className=" m-4 flex flex-col items-center">
                        <div class="max-w-lg mx-auto bg-gray-600 p-1
             border-gray-700 border-[6px]
            shadow-[2px_4px_12px_rgba(0,0,0,0.5),0_1px_3px_rgba(0,0,0,0.15)]
            ">

  <div
  className="bg-white p-6 
             shadow-[-6px_-6px_24px_rgba(0,0,0,0.6),inset_6px_6px_10px_rgba(0,0,0,0.3)]"
>

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
                        <p className="mt-2 font-bold text-pink-600">
                          {p.price}
                        </p>
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
