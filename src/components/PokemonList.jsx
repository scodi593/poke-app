// src/components/PokemonList.js
import React from 'react';
import PokemonCard from './PokemonCard';

const PokemonList = ({ pokemons }) => {
  return (
    <div className="pokemon-list">
      {pokemons.map(pokemon => (
        <PokemonCard
          key={pokemon.name}
          name={pokemon.name}
          url={pokemon.url}
        />
      ))}
    </div>
  );
};

export default PokemonList;
