"use client"
import React, { useState, useEffect } from "react";
import "./globals.css";

import NavBar from './components/navBar';
import Carousel from './components/carousel';
import Meteo from './components/meteo';

function App() {

  return (
    <>
      <div className="App pb-20" data-theme="garden">
      <NavBar />
      <Carousel />
      <Meteo />
      </div>
    </>
  );
}

export default App