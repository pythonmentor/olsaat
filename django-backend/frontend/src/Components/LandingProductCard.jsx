import React from "react";

export const LandingProductCard = ({ productInfo, isMobile }) => {
  return (
    <div
      className={`rounded-3xl bg-[#FFF9EF] ${
        isMobile ? "w-[100%]" : "w-[31%]"
      } text-[#00411F] flex-shrink-0 product-card shadow-lg my-6 overflow-hidden flex flex-col flex-grow`}
    >
      <img
        className="rounded-t-3xl w-full "
        src={productInfo.image}
        alt="Product"
      />
      <div className="p-5 flex flex-col justify-between flex-grow">
        <div>
          <div className="font-bold text-3xl text-left">
            {productInfo.name} <img src="" alt="" />
          </div>
          <div className="text-xs text-left">{productInfo.description}</div>
        </div>

        <div className="text-5xl font-extrabold my-6">
          {productInfo.price} DZD
        </div>
      </div>
    </div>
  );
};
