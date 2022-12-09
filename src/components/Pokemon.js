import React, { useContext } from "react";
import FavoriteContext from "../contexts/favoritesContext";
import { useDetailPokemon } from "../contexts/DetailContext";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const Pokemon = (props) => {
  const { favoritePokemons, updateFavoritePokemons } =
    useContext(FavoriteContext);
  const { pokemon } = props;
  const onHeartClick = () => {
    updateFavoritePokemons(pokemon.name);
  };

  const { setDetailPokemon } = useDetailPokemon();
  const navigate = useNavigate();

  const onDetailPokemon = () => {
    setDetailPokemon(pokemon);
    navigate("/detail");
  };

  const heart = favoritePokemons.includes(pokemon.name) ? "❤️" : "🖤";
  return (
    <div className="pokemon-card">
      <div className="pokemon-image-container">
        <img
          alt={pokemon.name}
          src={pokemon.sprites.front_default}
          className="pokemon-image"
        />
      </div>
      <div className="card-body">
        <div className="card-top">
          <h3> {pokemon.name}</h3>
          <div>#{pokemon.id}</div>
        </div>
        <div className="card-bottom">
          <div className="pokemon-type">
            {pokemon.types.map((type, index) => {
              return (
                <div key={index} className="pokemon-type-text">
                  {type.type.name}
                </div>
              );
            })}
          </div>
          <button className="pokemon-heart-btn" onClick={onHeartClick}>
            {heart}
          </button>
          <Button variant="outline-secondary" onClick={onDetailPokemon}>Detalhes</Button>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
