import React, { useEffect, useState } from 'react';

const useDataFetch = (pokemon) => {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading , setLoading] = useState(true)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
   

    const promises = pokemon.map(async (item) => {
        const { url } = item.pokemon
      const response = await fetch(url);
      const pokemon = await response.json();
      return pokemon;
    });

    try {
      const pokemonList = await Promise.all(promises);
      console.log(pokemonList)
      setPokemonData(pokemonList);

    } catch (error) {
      console.error(error);
    }
  };

  return (
   [pokemonData]
  );
};

export default useDataFetch;