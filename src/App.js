import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import { DetailPokemonProvider } from "./contexts/DetailContext";
import Detail from "./pages/Detail";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <DetailPokemonProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </DetailPokemonProvider>
  );
}

export default App;
