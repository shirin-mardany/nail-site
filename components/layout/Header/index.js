// import React from "react";
//
//
// // swiper >>
// import { Swiper, SwiperSlide } from "swiper/react";
// import "@/styles/Swiper.css";
// // Import Swiper styles
// // import "swiper/css";
// // import "swiper/css/navigation";
// // import "swiper/css/pagination";
// // import required modules
// import { Pagination, Navigation, Autoplay } from "swiper/modules";
// // next componenet
// import Image from "next/image";
//
// export default function HeaderHome() {
//   return (
//     <div className="w-full h-[80vh] bg-green-400">
//       {/* header Swiper----------------------------------------------- */}
//       <Swiper
//         slidesPerView={1}
//         spaceBetween={30}
//         loop={true}
//         // loop={sliders.length > 1} // اگر تعداد اسلایدها بیشتر از 1 باشد، حلقه فعال می‌شود
//         centeredSlides={true} // اسلاید فعلی در وسط قرار می‌گیرد
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false, // چرخش ادامه پیدا کند حتی پس از تعامل کاربر
//         }}
//         modules={[Pagination, Navigation, Autoplay]}
//         className="banner"
//       >
//         {/* {items} */}
//         <SwiperSlide>
//           <Image
//             fill={true}
//             src="/img/portfolio img/portfolio (1).jpg"
//             alt="image 1"
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Image
//             fill={true}
//             src="/img/portfolio img/portfolio (8).jpg"
//             alt="image 1"
//           />
//         </SwiperSlide>{" "}
//         <SwiperSlide>
//           <Image
//             fill={true}
//             src="/img/portfolio img/portfolio (3).jpg"
//             alt="image 1"
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Image
//             fill={true}
//             src="/img/portfolio img/portfolio (7).jpg"
//             alt="image 1"
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Image
//             fill={true}
//             src="/img/portfolio img/portfolio (5).jpg"
//             alt="image 1"
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Image
//             fill={true}
//             src="/img/portfolio img/portfolio (6).jpg"
//             alt="image 1"
//           />
//         </SwiperSlide>
//         <div className="autoplay-progress" slot="container-end"></div>
//       </Swiper>
//     </div>
//   );
// }

// ــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ
"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

export default function HeaderHome() {
  const [slides, setSlides] = useState([]);
  const [isMobile, setIsMobile] = useState(true);

  // تشخیص موبایل
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // دریافت دیتا از Supabase
  useEffect(() => {
    const fetchSlides = async () => {
      const { data, error } = await supabase
        .from("header_slides")
        .select("*")
        .order("created_at", { ascending: true });
       console.log("Supabase data:", data);
       console.log("Supabase error:", error);
      if (error) console.error(error);
      else setSlides(data);
    };
    fetchSlides();
  }, []);
  // فیلتر بر اساس موبایل/دسکتاپ
  const filteredSlides = slides.filter((slide) =>
    isMobile ? slide.tag === "vertical" : slide.tag === "horizontal"
  );
  console.log("isMobile:", isMobile);
  console.log("filteredSlides:", filteredSlides);

  return (
    <div className="w-full min-w-[500px] h-[95vh]">
      {filteredSlides.length > 0 ? (
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          loop={filteredSlides.length > 1}
          centeredSlides
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          className="banner"
        >
          {filteredSlides.map((slide) => {
            const { data } = supabase.storage
              .from("header_slides")
              .getPublicUrl(slide.image_path);
            console.log("image path:", slide.image_path);
            console.log("publicUrl:", data?.publicUrl);
            
            const imageUrl = data.publicUrl;

            return (
              <SwiperSlide key={slide.id}>
                <Image
                  src={imageUrl}
                  alt={slide.title}
                  width={1920}
                  height={1080}
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <p className="text-center mt-10">Loading...</p>
      )}
    </div>
  );
}
