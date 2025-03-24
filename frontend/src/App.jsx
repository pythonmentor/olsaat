import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CommandPage } from "./pages/CommandPage";
import { HomePage } from "./pages/HomePage";
import "./App.css";
import { Toaster } from "react-hot-toast";
import axios from "axios";
import ScrollToTop from "./Components/ScrollToTop";
function App() {
  const url = import.meta.env.API_URL;
  const [products, setproducts] = useState([]);

  //get iamges
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(url + "/api/Listing");

        console.log(res.data)

        setproducts(
          res.data.map((item) => ({
              ...item,
              image: url + item.image,
              selected: false,
              amount: 1,
          }))
        );
      } catch (err) {
        console.error(err);
      }
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
