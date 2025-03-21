import React from "react";

export const OrderProductCard = ({ productInfo, modifySelected }) => {
  return (
    <div
      className={`${
        productInfo.selected ? "cardSelected" : "card"
      }   rounded-3xl bg-[#FCF9F4] flex-shrink-0 shadow-xl text-[#00411F] flex flex-col`}
      onClick={() => modifySelected(!productInfo.selected)}
    >
      <img
        src={productInfo.image}
        className="rounded-3xl w-full"
        alt="Italian Trulli"
        width="200"
      />
      <div className="flex flex-col flex-grow justify-between">
        <div className="font-bold md:text-3xl text-lg pt-5 ">
          {productInfo.name}
        </div>
        <div className="text-[#BACC36] font-bold md:text-5xl text-3xl py-5">
          {productInfo.price} DZD
        </div>
      </div>
    </div>
  );
};
