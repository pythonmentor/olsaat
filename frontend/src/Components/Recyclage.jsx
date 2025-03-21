import React from "react";
import recyclage from '../assets/bouteille_recyclage.png'

export const Recyclage = () => {
  return (
    <>
    
      <br />
      <br />
      <br />

      <div   name="section1" className="w-full flex items-center md:flex-row flex-col">
        <div className="text-[#00411F] md:text-8xl text-5xl font-bold md:w-[50%] text-left">
          <span>RECYCLAGE!</span>
          <br />
          <span>RECYCLAGE!</span>
          <br />
          <span>RECYCLAGE!</span>
          <br />
          <div className="md:text-2xl text-base font-medium mt-6 md:text-justify">
            RENDEZ VOTRE BOUTEILLE EN VERRE VIDE ET FAITES UN GESTE POUR LA
            PLANÈTE (ET POUR VOTRE PORTEFEUILLE) : 50 DA DE RÉDUCTION SUR VOTRE
            PROCHAINE COMMANDE ! RECYCLEZ, ÉCONOMISEZ, RECOMMENCEZ !
          </div>

          <div className="md:text-2xl text-xl font-bold mt-8">
          (*) 50DA pour les bouteilles de 1 litre <br /> 30DA pour les bouteilles de 250ml   </div>
        </div>
        <div className="w-[10%]"></div>
        <div className="self-center flex  justify-center md:mt">
            <img className="md:scale-75 w-[50%] md:w-[100%]" src={recyclage} alt="" />
        </div>
      </div>
    </>
  );
};
