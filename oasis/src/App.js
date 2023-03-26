
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Home from './Home';
import Random from './random';
// import NoPage from "./pages/NoPage";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="random" element={<Random />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
