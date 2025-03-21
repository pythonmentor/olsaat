import React from "react";
import navLogo from "../assets/nav_logo.png";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { Link as ScrollLink, Element } from 'react-scroll';
import "../App.css";
export const NavBar = () => {
 const SCROLL_DURATION  = 600 
  return (
    <nav className="flex items-center pt-16 pb-36 h-10 w-full z-40">
      {/* Logo */}
      <div className="flex items-center w-1/2">
        <img
          src={navLogo}
          alt="Logo"
          className="h-12 w-12 rounded-full object-cover"
        />
      </div>

      {/* Navigation Links */}
      <ul className="flex justify-end text-xl items-center w-1/2 space-x-6">
        <ScrollLink  to="Accueil"  smooth={true} duration={SCROLL_DURATION} className="font-bold mr-3 text-black cursor-pointer">
          Accueil
        </ScrollLink >

        <ScrollLink to="Produits"  smooth={true} duration={SCROLL_DURATION} className=" text-black font-medium cursor-pointer">
          Produits
        </ScrollLink>

        <ScrollLink to="Bienfaits"  smooth={true} duration={SCROLL_DURATION} className=" text-black font-medium cursor-pointer">
          Bienfaits
        </ScrollLink>

        <ScrollLink to="Avis Clients"  smooth={true} duration={SCROLL_DURATION} className=" text-black font-medium cursor-pointer">
          Avis Clients
        </ScrollLink>
        <Link to="/commander" className="px-3 py-[2px] bg-black text-base text-white rounded-full ">
          COMMANDER
        </Link>
      </ul>

      {/* Call to Action Button */}
      <div></div>
    </nav>
  );
};
