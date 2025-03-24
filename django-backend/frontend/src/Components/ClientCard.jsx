import React from 'react';


export const ClientCard = ({client}) => {
  return (
    <div className="flex mt-8 items-center p-6 bg-[#FFF9EF] rounded-3xl shadow-2xl md:w-2/5 w-[90%] translate-x-4 max-w-lg mx-auto ">
      {/* Image Section */}
      <div className="flex-shrink-0 relative top-[-28px] scale-[200%] left-[-15%]">
        <img
          src={client.photo} // Replace with actual image source
          alt="Profile"
          className="rounded-full w-16 h-16 object-cover"
        />
      </div>
      
      {/* Text Section */}
      <div className="text-left">
        <p className="md:text-base text-sm font-semibold text-gray-700 mb-4  ">
          {client.avis}
        </p>
        
        <div className="font-bold md:text-2xl text-xl text-[#7CA254]">
          {client.nom}
        </div>
        <div className="md:text-xl text-sm text-gray-500">
          {client.pays}
        </div>
      </div>
    </div>
  );
};
