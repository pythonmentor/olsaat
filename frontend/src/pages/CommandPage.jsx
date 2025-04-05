import React from "react";
import { OrderProductCard } from "../Components/OrderProductCard";
import { UserInfoForm } from "../Components/UserInfoForm";
import { YourSelection } from "../Components/YourSelection";
import { useState, useEffect } from "react";
import "../Components/test.css";
import toast from "react-hot-toast";
import navLogo from "../assets/nav_logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const CommandPage = ({ products, setProduts }) => {
  const navigate = useNavigate();
  const [formActive , setFormActive ] = useState(true)

  const TOASTDURATION = 5000;
  const APIPATH = import.meta.env.VITE_API_URL;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    comment: "",
    newsletter: false,
  });

  const handleChange = (field) => (e) => {
    if (field === "newsletter") {
      setFormData({
        ...formData,
        [field]: e.target.checked,
      });
      return;
    }

    setFormData({
      ...formData,
      [field]: e.target.value,
    });
  };
  const modifyAttribute = (producID, attribute) => (newValue) => {
    setProduts((prevProducts) =>
      prevProducts.map((item) =>
        item._id === producID
          ? { ...item, [attribute]: newValue } // Update the specified attribute
          : item
      )
    );
  };
  const calculateSelectedTotal = () => {
    return products
      .filter((item) => item.selected)
      .reduce((total, item) => total + item.price * item.amount, 0);
  };
  const validateInputsAndSend = async () => {
    let err = 0;
    // Check if name is not empty
    if (!formData.name.trim()) {
      err++;
      toast.error("nom requis", {
        id: "name",
        duration: TOASTDURATION,
      });
    }

    // Check if phone number is valid
    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phone || !phoneRegex.test(formData.phone)) {
      err++;
      toast.error("numero de telephone non valide", {
        id: "phone",
        duration: TOASTDURATION,
      });
    }

    // Check if email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      err++;
      toast.error(" adresse mail non valide", {
        id: "mail",
        duration: TOASTDURATION,
      });
    }

    // Check if address is not empty
    if (!formData.address.trim()) {
      err++;
      toast.error(" adresse de livraison requise", {
        id: "addr",
        duration: TOASTDURATION,
      });
    }
    if (calculateSelectedTotal() == 0) {
      err++;
      toast.error(" Selectionnez au moins un article", {
        id: "article",
        duration: TOASTDURATION,
      });
    }
    if (err) return;

    const filteredProducts = products
      .filter((product) => product.selected)
      .map((product) => ({ id: product._id, quantity: product.amount }));

    const order = { ...formData, products: filteredProducts };
    // send
    try {
      setFormActive(false)
      const response = await axios.post(APIPATH + "/api/Order", order);

      if (response.status == 200) {
        setProduts((old) =>
          old.map((prod) => ({ ...prod, amount: 1, selected: false }))
        );
        toast.success("Votre commande a ete enregistre", {
          duration: 4000,
        });
        navigate("/");
      } else if (response.status == 500) {
        toast.error("une erreur s est produite reesayer dans un moment ", {
          duration: 4000,
        });
      }
    } catch (error) {
      toast.error("une erreur s est produite reesayer dans un moment ", {
        duration: 4000,
      });
      console.error("There was an error!", error);
    }
  };

  return (
    <div className="flex flex-col commander text-black items-center ">
      <div
        onClick={() => navigate("/")}
        className="flex items-center pt-5 cursor-pointer"
      >
        <img
          src={navLogo}
          alt="Logo"
          className="h-16 w-16 rounded-full object-cover"
        />
      </div>
      <div className="md:text-5xl text-3xl pt-24 text-[#00411F] font-bold">
        VOTRE COMMANDE <br />
        AVEC OLSAAT
      </div>

      <div className="md:text-4xl text-xl py-7">
        Effectuez votre commande directement sur notre site <br /> web et
        recevez la chez vous en quelques clics
      </div>
      <div className="w-full md:text-3xl text-2xl font-extrabold text-left pt-24">
        <span className="text-orange-500"> 01. </span> choisissez votre produit
      </div>
      <div className="carcontainer w-full grid md:grid-cols-3 grid-cols-2 md:gap-10 gap-4 pt-10 ">
        {products.map((e) => (
          <OrderProductCard
            key={e.name}
            productInfo={e}
            modifySelected={modifyAttribute(e._id, "selected")}
          />
        ))}
      </div>
      <div className="flex flex-col w-full justify-center items-center">
        <div className="md:text-5xl text-3xl py-12 text-[#00411F] font-bold">
          Votre selection
        </div>
        {products
          .filter((product) => product.selected === true)
          ?.map((e) => (
            <YourSelection
              key={e.name}
              selectedProduct={e}
              modifyAmount={modifyAttribute(e._id, "amount")}
              modifySelected={modifyAttribute(e._id, "selected")}
            />
          ))}
        <div className="md:text-5xl text-3xl py-12 text-[#00411F] font-bold w-3/5 flex justify-between flex-col md:flex-row">
          {" "}
          <span>Votre total:</span> {calculateSelectedTotal()} DZD{" "}
        </div>
      </div>
      <div className="w-full md:text-3xl text-2xl font-extrabold text-left pt-12">
        <span className="text-orange-500"> 02. </span> Vos informations
      </div>
      <UserInfoForm formData={formData} handleChange={handleChange} />

      {/* checkbox */}
      <button
        onClick={() => {
          validateInputsAndSend();
        }}

        className={`w-[60%] py-6 text-white md:text-3xl text-xl px-6 font-bold  rounded-full mt-5 mb-16 self-center text-center ${formActive ? "bg-[#FF7548]" : "bg-[#ffb296]"}`}
        disabled={!formActive}
      >
        {" "}
        Passer la commande{" "}
      </button>
    </div>
  );
};
