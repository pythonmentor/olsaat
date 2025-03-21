import React from "react";
import footerLogo from "../assets/footer_logo.svg";
import facebook from "../assets/facebook.svg";
import tiktok from "../assets/tiktok.svg";
import instagram from "../assets/instagram.svg";
import { Link } from "react-router-dom";

import { Link as ScrollLink, Element } from 'react-scroll';

export const Footer = () => {
  const SCROLL_DURATION = 600
  return (
    <div
      className="flex footer text-white text-lg py-40 items-top space-x-[5%] justify-between text-justify md:flex-row flex-col"
      style={{
        paddingLeft: "calc(100vw * 0.12)",
        paddingRight: "calc(100vw * 0.12)",
      }}
    >
      <div className="md:w-[30%] w-[80%] self-center">
        <img className=" pt-[7vw]" src={footerLogo} alt="" />
      </div>
      <div className="md:w-[35%] pt-[7vw]">
        <span>
          Olsaat, depuis 2022, offre des produits naturels premium, pour
          enrichir votre bien-être avec une qualité authentique
        </span>
        <br />
        <br />
        <span className="font-bold">NAVIGATION</span>
        <br />
        <br />
        <ScrollLink to="Accueil" smooth={true} duration={SCROLL_DURATION} className="cursor-pointer">ACCEUIL</ScrollLink><br />
        <ScrollLink to="Produits" smooth={true} duration={SCROLL_DURATION} className="cursor-pointer">PRODUITS</ScrollLink><br />
        <ScrollLink to="Bienfaits" smooth={true} duration={SCROLL_DURATION} className="cursor-pointer">BIENFAITS</ScrollLink><br />
        <ScrollLink to="Avis Clients" smooth={true} duration={SCROLL_DURATION} className="cursor-pointer">AVIS CLIENTS</ScrollLink><br />
        <Link to={'/commander'}>COMMANDER</Link><br />

      </div>
      <div className="md:w-[35%] pt-[7vw]">
        <span className="font-bold">CONTACTEZ NOUS !</span>
        <br />
        <br />
        <span>+213 791 05 47 35</span>
        <br />
        <span>olsaat.pro@gmail.com</span>
        <br />
        <span>Saoula, Alger</span>
        <br />
        <br />
        <span className="font-bold">MENTIONS LEGALES</span>
        <br />
        <br />
        <span>CR 2024</span>
        <br />
        <br />
        <span className="font-bold">RESEAUX</span>
        <br />
        <br />
        <div className="flex justify-between w-[80%] items-center">
           <a href="https://www.facebook.com/share/SjGn1W711c3DePA8/?mibextid=qi2Omg" className="w-1/3"><img src={facebook} alt="" className="w-3/5" /></a>
           <a href="https://www.instagram.com/olsaat_?igsh=OGQyYWMzdHAyNDMx" className="w-1/3"><img src={instagram} alt="" className="w-3/5"/></a>
           <a href="https://www.tiktok.com/@olsaat?_t=8pZlkW9wVqn&_r=1" className="w-1/3"><img src={tiktok} alt="" className="w-3/5"/></a>
     
        </div>
      </div>
    </div>
  );
};
