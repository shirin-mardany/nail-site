"use client";
import HeaderHome from "@/components/layout/Header";
import QuestionBox from "@/components/layout/QuestionBox";
import SliderPortfolio from "@/components/layout/SliderPortfolio";
import React from "react";
// next component >>
// import Image from "next/image";



// __________________________________________________
export default function Home() {
  return (
    <>
      {/* header ----------------------------------------------- */}
      <HeaderHome />
      <SliderPortfolio />
      <QuestionBox />
    </>
  );
}
