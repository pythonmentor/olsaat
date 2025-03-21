import React from "react";
import bienfaits from "../assets/bienfaits.png"
export const Bienfaits = ({isMobile}) => {
  return (
    <>
      <div name="Bienfaits" className="w-full flex items-center mt-32 flex-col-reverse md:flex-row">
        
        <div className=""> <img className="" src={bienfaits} alt="" /></div>
        <div className="text-left text-black md:text-xl text-sm md:w-[60%]">
            <span className="font-bold md:text-3xl text-2xl text-[#7CA254]">QUEL EST L’INÉRÊT DE CONSOMMER DES 
            PRODUITS VÉGÉTAUX?</span>
            <br />
            <br />
            <span> <strong>1. Riche en Nutriments </strong> : Source de vitamines et minéraux essentiels pour une santé optimale.</span><br />
            <span> <strong>2. Soutien Digestif </strong> : Fibres naturelles pour une digestion saine.
            Santé Cardiovasculaire : Graisses saines pour un cœur en forme.</span><br />
            <span> <strong>3. Santé Cardiovasculaire </strong> : Idéal pour maintenir un poids équilibré.
            Sans Lactose : Parfait pour les intolérants au lactose.</span><br />
            <span> <strong>4. Faibles en Calories </strong> : Idéal pour maintenir un poids équilibré.</span><br />
            <span> <strong>5. Sans Lactose </strong> : Parfait pour les intolérants au lactose.</span><br />
            <span> <strong>6. Boost d'Énergie </strong> : Protéines et glucides pour une énergie durable.</span><br />
            <span> <strong>7. Sans Cholestérol </strong> : Naturellement sans cholestérol et faible en graisses saturées.</span><br />
            <span> <strong>8. Peau Éclatante </strong> : Vitamine E pour une peau douce et lumineuse.</span><br />
            <span> <strong>9. Saveurs Délicates </strong> : Goût naturel et authentique pour chaque lait.</span><br />
            <span> <strong>10. Végétalien et Sans Gluten </strong> : Convient aux régimes spécifiques sans compromis sur la qualité.</span><br />


        </div>
      </div>
      
    </>
  );
};
