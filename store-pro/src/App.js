import './App.css';
import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import NewProduct from "./components/NewProduct/NewProduct";
import Carts from "./components/Carts/carts";
import Products from "./components/Products/Products";
import Navigation from "./components/Navigation/Navigation";


function App() {
  const role = localStorage.getItem("myRole");
  const [productName, setProductName] = useState("");
  return (
    <div className="App">
      
      <Navigation setProductName={setProductName} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/newProduct"
          element={
            role == 2 ? (
              <NewProduct />
            ) : (
              <>
                <img
                  style={{ height: "40rem", width: "90rem" }}
                  src="https://res.cloudinary.com/cryptoteam/image/upload/v1644924821/fn6rmgiqzmtkfeawgmco.svg"
                  alt="401 Unauthorized"
                />
              </>
            )
          }
        />
        <Route path="/carts" element={<Carts />} />
        <Route path="/products/:id" element={<Products />} />
      
       
        <Route
         path='*' exact={true}
          element={
            <>
              <img
                style={{ height: "40rem", width: "90rem" }}
                src="https://res.cloudinary.com/cryptoteam/image/upload/v1644924971/x9qdat6cfv07qxpynsqa.svg"
                alt="404 Page not found"
              />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
