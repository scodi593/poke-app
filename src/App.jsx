// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonList from './components/PokemonList';
import SearchBar from './components/SearchBar';
import './App.css';

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
        setPokemons(response.data.results);
        setFilteredPokemons(response.data.results);
      } catch (error) {
        console.error('Error fetching Pokémon data:', error);
      }
    };
    fetchPokemons();
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    setFilteredPokemons(pokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(term.toLowerCase())
    ));
  };

  return (
    <div className="app">
      <SearchBar onSearch={handleSearch} />
      <PokemonList pokemons={filteredPokemons} />
    </div>
  );
};

export default App;

