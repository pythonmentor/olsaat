import React from "react";
import oats from "../assets/oats.png";
import { useNavigate } from "react-router-dom";
export const Conclusion = () => {
  const navigate = useNavigate()
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="flex mb- items-center w-full md:flex-row flex-col">
        <div className="flex flex-col text-[#00411F] md:text-7xl text-4xl  font-bold md:w-[60%] text-left justify-center ">
          COMMANDEZ MAINTENANT!
          <div className="md:text-2xl text-xl font-medium mt-6 text-justify">
            Besoin de remplir votre frigo avec du naturel et du délicieux ?
            Commandez sur notre site, votre bien-être vous dira merci (et votre
            frigo aussi) !
          </div>
          <button onClick={()=>navigate("/commander")} className=" w-[60%] py-6 text-white md:text-3xl text-lg px-6 font-bold bg-[#FF7548] rounded-full mt-16 self-center text-center"> COMMANDER </button>
          <div className="md:text-2xl text-xl font-bold mt-10 self-center text-center">Vous voulez en savoir plus? appelez-nous !</div>
          <div className="md:text-5xl text-3xl font-bold mt-6 self-center text-[#FF7548]">+213 791 05 47 35</div>
        </div>
        <div className="w-[10%]"></div>
        <div className="md:w-2/5">
          <img className="w-full" src={oats} alt="" />
        </div>
      </div>
    </>
  );
};
