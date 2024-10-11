
import React from "react";


const PokemonList = ({ pokemon }) => {
  return (
    <div className="container">
      <div className="pokemon-list">
        {pokemon.map((p) => (
          <div className="pokemon-item" key={p}>{p}</div>
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
