import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Complete from "../myComponets/Complete";
import StateContext from "../myComponets/StateContext";
export default function MainRoutes() {
  const [cart, setCart] = useState([]);
  const [cartValue, setCartValue] = useState(0);
  const [price, setPrice] = useState(0);
  return (
    <div>
      <StateContext.Provider
        value={{ cart, setCart, cartValue, setCartValue, price, setPrice }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Complete />}></Route>
            {/* <Route path="/About" element={<About />}>
      </Route>
      <Route path="/MyResume" element={<MyResume />}>
      </Route>
      <Route path="/Portfolio" element={<Portfolio />}>
      </Route>
      <Route path="/Contact" element={<Contact />}>
      </Route> */}
          </Routes>
        </Router>
      </StateContext.Provider>
    </div>
  );
}
