import React from "react";
import trash from "../assets/trash.png";

export const YourSelection = ({
  selectedProduct,
  modifyAmount,
  modifySelected,
}) => {
  const handleAmount = (num) => modifyAmount(selectedProduct.amount + num);
  return (
    <div className="flex w-full my-3 flex-col items-center md:flex-row space-y-3">
      <div className="flex items-center md:w-[70%] w-full bg-[#FCF9F4] drop-shadow-2xl py-4 rounded-full md:text-2xl text-sm text-[#00411F] font-bold justify-between px-8">
        <span className="self-start"> {selectedProduct.name}</span>
        <span className="self-end text-right"> {selectedProduct.price}DZD</span>
      </div>
      <div className="flex md:w-[30%] w-full justify-around items-center text-2xl text-[#00411F] font-bold">
        <button
          className="bg-[#E8E7DB] rounded-full w-10 h-10 items-center"
          disabled={selectedProduct.amount == 1}
          onClick={() => handleAmount(-1)}
        >
          -
        </button>
        {selectedProduct.amount}
        <button
          className="bg-[#E8E7DB] rounded-full w-10 h-10"
          onClick={() => handleAmount(1)}
        >
          +
        </button>

        <img
          src={trash}
          alt=""
          className="cursor-pointer"
          onClick={() => {
            modifySelected(false);
            modifyAmount(1);
          }}
        />
        
      </div>
    </div>
  );
};
