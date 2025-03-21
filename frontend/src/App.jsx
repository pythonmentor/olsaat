import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CommandPage } from "./pages/CommandPage";
import { HomePage } from "./pages/HomePage";
import "./App.css";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import ScrollToTop from "./Components/ScrollToTop";
function App() {
  const url = "https://olsaat.com";
  const [products, setproducts] = useState([]);

  const convertImagesToBase64 = (products) => {
    return products.map((product) => {
      if (product.image && product.image.data) {
        let binaryString = "";
        const bytes = product.image.data;
        const len = bytes.length;

        for (let i = 0; i < len; i++) {
          binaryString += String.fromCharCode(bytes[i]);
        }

        const base64String = btoa(binaryString);

        const imageDataUrl = `data:image/png;base64,${base64String}`;

        return {
          ...product,
          image: imageDataUrl, // Replace Buffer with Base64-encoded string
        };
      }

      return product; // If no image, return the product as is
    });
  };

  //get iamges
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(url + "/api/Listing");

        setproducts(
          convertImagesToBase64(
            res.data.map((item) => ({
              ...item,
              selected: false,
              amount: 1,
            }))
          )
        );
      } catch (err) {}
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div>
        <Toaster />
      </div>

      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage products={products} />} />
          <Route
            path="/commander"
            element={
              <CommandPage products={products} setProduts={setproducts} />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
