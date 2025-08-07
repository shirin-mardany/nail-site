// // app/page.js
// import Image from "next/image";
// import heroImage from "../public/images/hero.jpg"; // عکس هدر رو اینجا بذار (در پوشه public/images)
//
// export default function Home() {
//   return (
//     <main className="w-full h-screen relative">
//       {/* تصویر زمینه هدر */}
//       <Image
//         src={heroImage}
//         alt="ناخن‌کار حرفه‌ای"
//         fill
//         className="object-cover"
//         priority
//       />
//
//       {/* لایه تیره برای خوانایی متن */}
//       <div className="absolute inset-0 bg-black/40 z-10"></div>
//
//       {/* محتوا روی هدر */}
//       <div className="absolute z-20 inset-0 flex flex-col items-center justify-center text-white text-center px-4">
//         <h1 className="text-4xl md:text-6xl font-bold mb-4">
//           ناخن‌هایی زیبا برای بانویی خاص
//         </h1>
//         <p className="text-lg md:text-2xl mb-6">
//           با ما بدرخشید – رزرو وقت آنلاین با چند کلیک
//         </p>
//         <a
//           href="/login"
//           className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-full transition"
//         >
//           ثبت سفارش
//         </a>
//       </div>
//     </main>
//   );
// }
// app/page.js
"use client";

import React from "react";

export default function HomePage() {
  const imageUrl =
    "https://icqvgpldfkxzybfhygaf.supabase.co/storage/v1/object/public/images/download%20(7).jfif";
  //
  //   return (
  //     <div className="min-h-screen bg-white">
  //       <header className="w-full h-60 relative overflow-hidden">
  //         <img
  //           src={imageUrl}
  //           alt="ناخن‌کار"
  //           className="w-full h-full object-cover"
  //         />
  //         <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
  //           <h1 className="text-white text-4xl font-bold">به سالن ناخن خوش آمدید</h1>
  //         </div>
  //       </header>
  //
  //       <main className="p-8">
  //         <p className="text-lg">در اینجا می‌توانید نمونه‌کارها را ببینید و وقت رزرو کنید.</p>
  //       </main>
  //     </div>
  //   )

  // -----------
  return (
    <main className="w-full h-screen relative">
      {/* تصویر زمینه هدر */}
      <img
        src={imageUrl}
        alt="ناخن‌کار"
        className="w-full h-full object-cover"
      />

      {/* لایه تیره برای خوانایی متن */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* محتوا روی هدر */}
      <div className="absolute z-20 inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          ناخن‌هایی زیبا برای بانویی خاص
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          با ما بدرخشید – رزرو وقت آنلاین با چند کلیک
        </p>
        <a
          href="/login"
          className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-full transition"
        >
          ثبت سفارش{" "}
        </a>
      </div>
    </main>
  );
}
