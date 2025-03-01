import React from "react";
import { Route, Routes } from "react-router-dom";
import { EyesSection } from "./pages/EyesSection";
import { Layout } from "./components/Layout";
import { SkinSection } from "./pages/SkinSection";
import HairSection from "./pages/HairSection";
import FragranceSection from "./pages/FragranceSection";
import Cart from "./pages/Cart";
import Signup from "./pages/Signup";
import Login from "./pages/Login";


function App() {
 
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/home" element={<Layout />} />
        <Route path="/eyes" element={<EyesSection />} />
        <Route path="/skin" element={<SkinSection />} />
        <Route path="/hair" element={<HairSection />} />
        <Route path="/fragrance" element={<FragranceSection />} />
        <Route path="/add-to-cart" element={<Cart />} />
        <Route path="/login" element={ <Login/>}> </Route>
        <Route path="/signup" element={<Signup/>}> </Route>
      </Routes>
    </>
  );
}

export default App;
