import React from "react";

import fullTitle from "../assets/title_mobile.png";


export const TitleMobile = () => {
  return (
    <>
      
      <div className=" flex flex-wrap relative object-contain">
        <img
          className=" mt-4 block scale-[%] z-[0] overflow-hidden object-cover"
          src={fullTitle}
          alt=""
        />
      </div>
    </>
  );
};
