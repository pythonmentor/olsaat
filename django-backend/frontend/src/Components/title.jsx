import React from "react";

import fullTitle from "../assets/title_desktop.png";


export const Title = () => {
  return (
    <>
      
      <div className=" flex flex-wrap relative object-contain">
        <img
          className=" mt-16 mb-16 block scale-[300%] z-[0] overflow-hidden object-cover"
          src={fullTitle}
          alt=""
        />
      </div>
    </>
  );
};
