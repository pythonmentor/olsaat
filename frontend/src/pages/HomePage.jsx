import React, { useState, useEffect } from "react";
import { Title } from "../Components/title";

import navLogo from "../assets/nav_logo.png";
import { NavBar } from "../Components/NavBar";
import { ProductSlide } from "../Components/ProductsSlide";
import { Recyclage } from "../Components/Recyclage";
import { AvisClients } from "../Components/AvisClients";
import { Conclusion } from "../Components/Conclusion";
import { Bienfaits } from "../Components/Bienfaits";
import { Footer } from "../Components/Footer";
import { TitleMobile } from "../Components/TitleMobile";
import { ProductSlideMobile } from "../Components/ProductsSlideMobile";
import { BienvenueMobile } from "../Components/BienvenueMobile";

export const HomePage = ({ products }) => {
  const [isMobile, setIsMobile] = useState(false);

  // Check the window width on component mount
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 900); // Example breakpoint for mobile
    };

    checkIsMobile(); // Check initially
    window.addEventListener("resize", checkIsMobile); // Add resize event listener

    // Cleanup on component unmount
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return (
    <div
      name="Accueil"
      className={`flex flex-col ${
        isMobile ? "background-div-mobile" : "background-div"
      } items-center overflow-hidden`}
    >
      {isMobile ? (
        <div className="flex items-center pt-5">
          <img
            src={navLogo}
            alt="Logo"
            className="h-12 w-12 rounded-full object-cover"
          />
        </div>
      ) : (
        <NavBar />
      )}



      {isMobile ? <TitleMobile /> : <Title />}
      {isMobile ? <BienvenueMobile /> : <div></div> }
      {isMobile ? (
        <ProductSlideMobile productList={products} />
      ) : (
        <ProductSlide productList={products} />
      )}

      <Bienfaits isMobile={isMobile} />
      <Recyclage />
      <AvisClients />
      <Conclusion />
      <Footer />
    </div>
  );
};
