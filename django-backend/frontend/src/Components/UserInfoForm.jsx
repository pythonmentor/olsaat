import React from "react";
import { useState } from "react";
export const UserInfoForm = ({ formData, handleChange }) => {
  return (
    <form className="flex flex-col w-full my-12 md:text-3xl text-base">
      <div className="flex flex-col my-4 ">
        <label className="text-left  mb-2">Nom et Prenom :</label>
        <input
          className="bg-[#FCF9F4] border-[#CED971] border-2 rounded-full py-4 px-8 "
          type="text"
          value={formData.name}
          onChange={handleChange("name")}
        />
      </div>
      <div className="flex flex-col my-4">
        <label className="text-left  mb-2">Numero de telephone :</label>
        <input
          type="tel"
          className="bg-[#FCF9F4] border-[#CED971] border-2 rounded-full py-4 px-8 "
          value={formData.phone}
          onChange={handleChange("phone")}
        />
      </div>
      <div className="flex flex-col my-4">
        <label className="text-left  mb-2">Email :</label>
        <input
          type="email"
          className="bg-[#FCF9F4] border-[#CED971] border-2 rounded-full py-4 px-8 "
          value={formData.email}
          onChange={handleChange("email")}
        />
      </div>
      <div className="flex flex-col my-4">
        <label className="text-left  mb-2">
          Addresse de livraison :
        </label>
        <input
          type="text"
          className="bg-[#FCF9F4] border-[#CED971] border-2 rounded-full py-4 px-8 "
          value={formData.address}
          onChange={handleChange("address")}
        />
      </div>
      <div className="flex flex-col my-4">
        <label className="text-left  mb-2">
          Vous voulez ajouter quelque chose ?
        </label>
        <textarea
          value={formData.comment}
          className="bg-[#FCF9F4] border-[#CED971] border-2 rounded-3xl py-4 px-8  h-60"
          onChange={handleChange("comment")}
        />
      </div>
      <div className="flex items-center my-4">
        <input
          type="checkbox"
          checked={formData.newsletter}
          className="form-checkbox h-6 w-6 text-blue-600"
          onChange={handleChange("newsletter")}
        />
        <label className="ml-4 md:text-2xl text-xl">
          Je souhaite recevoir la newsletter
        </label>
      </div>
    </form>
  );
};
