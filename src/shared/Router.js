import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import Cat from "../pages/Cat";
import Dog from "../pages/Dog";

export default function Router() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cat" element={<Cat />} />
        <Route path="/dog" element={<Dog />} />
      </Routes>
      <Footer />
    </>
  );
}
