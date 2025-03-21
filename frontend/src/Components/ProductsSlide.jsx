

import React, { useRef } from "react";
import { LandingProductCard } from "./LandingProductCard";
import arrow from "../assets/arrow.svg";
import PointsIndicator from "./PointsIndicator";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
export const ProductSlide = ({ productList }) => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  
   const navigate = useNavigate()
  const scrollNext = () => {
   
    const cardWidth =
    scrollRef.current.querySelector(".product-card").offsetWidth;
    scrollRef.current.scrollBy({ left: cardWidth + 24, behavior: "smooth" });
    if (activeIndex < productList.length - 3)
      setActiveIndex((prev) => prev + 1);
  };
  const scrollPrevious = () => {
    const cardWidth =
      scrollRef.current.querySelector(".product-card").offsetWidth;
    scrollRef.current.scrollBy({ left: -cardWidth - 24, behavior: "smooth" });
    if (activeIndex > 0) setActiveIndex((prev) => prev - 1);
  };
  

  return (
    <>
      <div  name="Produits" className="w-full font-bold text-4xl z-50 mt-24 py-5 text-[#003218] text-center">
        NOS PRODUITS
      </div>
      <div className="flex items-center justify-center w-[110%] space-x-4">
        <img
          className="w-[8%] rotate-180"
          src={arrow}
          alt=""
          onClick={scrollPrevious}
        />
        {/* Horizontally scrollable div */}
        <div
          ref={scrollRef}
          className="flex w-[90vw] justify-between space-x-[3%] overflow-hidden scrollbar-hide"
        >
          {productList.map((product) => (
            <LandingProductCard key={product._id} productInfo={product} />
          ))}
        </div>

        {/* Next button */}

        <img className="w-[8%]" src={arrow} alt="" onClick={scrollNext} />
      </div>
      <PointsIndicator
        activeIndex={activeIndex}
        totalPoints={productList.length}
        productPerSlide={3}
      />

      <button onClick={()=>navigate("/commander")} className="w-[90%] text-[#00411F] font-bold border-[#00411F] border-2 rounded-full mt-8"> COMMANDER </button>
    </>
  );
};
