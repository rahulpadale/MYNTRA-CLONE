import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import { Route, Routes } from "react-router-dom";
import Details from "./components/DetailsPage/Details";
import{Home} from "./Pages";
import Products from "./components/Product/Products";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path='/' element = { <Home /> } />
          <Route path="/Products" element={<Products />} />
          <Route path="/details/:detailslug" element={<Details/>} />
      </Routes>

    </>
  );
};

export default App;
