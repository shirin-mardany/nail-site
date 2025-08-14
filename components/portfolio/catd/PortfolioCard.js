"use client";
// componenet
import Image from "next/image";
// swiper >>
import { Swiper, SwiperSlide } from "swiper/react";
import "@/styles/Swiper.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Card } from "flowbite-react";
// ________________________________________
export function PortfolioCard() {
  // arg = img - title - price -
  return (
    <div className=" bg-amber-300 size-full">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        // loop={sliders.length > 1} // اگر تعداد اسلایدها بیشتر از 1 باشد، حلقه فعال می‌شود
        centeredSlides={true} // اسلاید فعلی در وسط قرار می‌گیرد
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false, // چرخش ادامه پیدا کند حتی پس از تعامل کاربر
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="banner"
      >
        {/* {items} */}
        <SwiperSlide>
          <Card
            className="max-w-sm"
            renderImage={() => (
              <Image
                width={500}
                height={400}
                src="/img/portfolio img/portfolio (6).jpg"
                alt="image 1"
              />
            )}
          >
            <div className="h-[20%]">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </Card>
        </SwiperSlide>
        {/* ------------------------ */}
        <SwiperSlide>
          <Card
            className="max-w-sm"
            renderImage={() => (
              <Image
                width={500}
                height={500}
                src="/img/portfolio img/portfolio (1).jpg"
                alt="image 1"
              />
            )}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>
        </SwiperSlide>
        {/* ------------------------ */}
        <SwiperSlide>
          <Card
            className="max-w-sm"
            renderImage={() => (
              <Image
                width={500}
                height={500}
                src="/img/portfolio img/portfolio (3).jpg"
                alt="image 1"
              />
            )}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>
        </SwiperSlide>
        {/* ------------------------ */}
        <SwiperSlide>
          <Card
            className="max-w-sm"
            renderImage={() => (
              <Image
                width={500}
                height={500}
                src="/img/portfolio img/portfolio (7).jpg"
                alt="image 1"
              />
            )}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>
        </SwiperSlide>
        {/* ------------------------ */}

        <SwiperSlide>
          <Card
            className="max-w-sm"
            renderImage={() => (
              <Image
                width={500}
                height={500}
                src="/img/portfolio img/portfolio (8).jpg"
                alt="image 1"
              />
            )}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end"></div>
      </Swiper>
    </div>
  );
}
