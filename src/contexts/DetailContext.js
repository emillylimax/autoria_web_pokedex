import React, { createContext, useContext, useState } from "react";

const DetailPokemonContext = createContext();

export const DetailPokemonProvider = ({ children }) => {
  const [detailPokemon, setDetailPokemon] = useState();

  return (
    <DetailPokemonContext.Provider
      value={{
        detailPokemon,
        setDetailPokemon,
      }}
    >
      {children}
    </DetailPokemonContext.Provider>
  );
};

export const useDetailPokemon = () => {
  return useContext(DetailPokemonContext);
};
