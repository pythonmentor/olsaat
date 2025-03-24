import React from "react";
import { ClientCard } from "../Components/ClientCard";
import client1 from "../assets/user.png";
export const AvisClients = () => {
  const clients = [
    {
      avis: "“Vraiment satisfaite par votre produit, j'ai commandé plusieures fois chez vous, le goût reste le même, et je découvre à chaque fois de nouveaux goûts. Ce qui m'a impressionné chez vous aussi c'est votre sérieux et générosité !”",
      nom: "Cliente satisfaite",
      pays: "Alger",
      photo: client1,
    },
    {
      avis: "“Le goût est excellent, je voudrais déja passer ma 2ème commande de la semaine, merci pour votre service client très aimable !”",
      nom: "Client satisfait",
      pays: "Alger",
      photo: client1,
    },
  ];

  return (
    <div name="Avis Clients " className="w-full">
      <div className="text-7xl text-[#00411F] font-bold">AVIS CLIENTS</div>
      <div className="text-2xl text-[#00411F] font-medium mb-10">
        ce que nos clients disent.
      </div>
      <div className="flex md:w-full justify-between flex-col md:flex-row ">
        <ClientCard client={clients[0]} />
        <ClientCard client={clients[1]} />
      </div>
    </div>
  );
};
