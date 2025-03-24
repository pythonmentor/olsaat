import React, { useRef } from "react";
import { LandingProductCard } from "./LandingProductCard";
import arrow from "../assets/arrow.svg";
import PointsIndicator from "./PointsIndicator";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

export const ProductSlideMobile = ({ productList }) => {
  const navigate = useNavigate()
  return (
    <>
      <div name="Produits" className="w-full font-bold text-4xl z-50 mt-10 py-5 text-[#003218] text-center">
        NOS PRODUITS
      </div>
      <div className="flex items-center justify-center md:w-[100%] w-[80%]  space-x-4">
        {/* Horizontally scrollable div */}
        <div className="flex w-[90vw] justify-between md:space-x-[3%] space-x-[10%] overflow-x-scroll ">
          {productList.map((product) => (
            <LandingProductCard
              key={product._id}
              productInfo={product}
              isMobile={true}
            />
          ))}
        </div>
      </div>

      <button onClick={()=>{navigate("/commander")}} className="w-[90%] text-[#00411F] font-bold border-[#00411F] border-2 rounded-full mt-8">
        {" "}
        COMMANDER{" "}
      </button>
    </>
  );
};
