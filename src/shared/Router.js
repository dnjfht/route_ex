import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import Cat from "../pages/Cat";
import Dog from "../pages/Dog";

export default function Router() {
  const animals = ["고양이", "토끼", "늑대", "사자"];

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home animals={animals} />} />
        <Route path="/cat/:id" element={<Cat />} />
        <Route path="/dog" element={<Dog />} />
      </Routes>
      <Footer />
    </>
  );
}
