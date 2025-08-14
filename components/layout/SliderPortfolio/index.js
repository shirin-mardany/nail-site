// import { PortfolioCard } from '@/components/PortfolioCard';
// import React from 'react'
//
// export default function SliderPortfolio() {
//   return (
//     <div className="w-full h-[600px] p-3  bg-amber-500">
//           <PortfolioCard />
//
//     </div>
//   );
// }

// ـــــــــــــــــــــــــــــــــــــــــــ-
"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

export default function SliderPortfolio() {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const fetchSlides = async () => {
      const { data, error } = await supabase
        .from("portfolio_slides")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) console.error(error);
      else setSlides(data);
    };
    fetchSlides();
  }, []);

  return (
    <div className="w-[80%] min-w-[500px] h-[550px] bg-green-200 p-5 m-12 rounded-3xl border border-gray-400 mx-auto">
      <h2 className="text-center text-3xl mb-5 text-gray-900 font-bold">
        Last Products
      </h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop={slides.length > 3}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        breakpoints={{
          0: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          900: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        }}
        spaceBetween={30}
        className="w-full h-[85%]"
      >
        {slides.map((slide) => {
          const { data } = supabase.storage
            .from("portfolio_slides")
            .getPublicUrl(slide.image_path);
          const imageUrl = data.publicUrl;
          return (
            <SwiperSlide key={slide.id}>
              <div className="w-full h-full min-h-[300px] bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col">
                {/* عکس */}
                <div className="w-full h-[55%] border-b border-gray-200">
                  <Image
                    src={imageUrl}
                    alt={slide.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* متن */}
                <div className="w-full h-[45%] flex flex-col justify-evenly items-center p-3">
                  <h3 className="text-lg font-semibold">{slide.title}</h3>
                  <p className="text-sm text-gray-600 text-center">
                    {slide.description?.split(" ").slice(0, 10).join(" ")}
                  </p>
                  <button className="bg-gray-800 text-white text-xs py-2 px-4 rounded-lg">
                    More information
                  </button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
