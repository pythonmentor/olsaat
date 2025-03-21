import React from "react";

const PointsIndicator = ({ activeIndex, totalPoints , productPerSlide }) => {
  return (
    <div className="flex justify-center mt-4">
      {Array.from({ length: totalPoints }).map((_, index) => (
        <div
          key={index}
          className={`w-3 h-3 mx-1 rounded-full ${((index >= activeIndex) && (index < activeIndex+ productPerSlide)) ? 'bg-[#2C2C2C]' : 'bg-gray-300'}`}
        />
      ))}
    </div>
  );
};

export default PointsIndicator;
