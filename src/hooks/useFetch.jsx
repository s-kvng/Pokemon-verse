import React, { useEffect, useState } from 'react';

//get random number function
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const useDataFetch = (url) => {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataResponse = await fetch(url);
        const data = await dataResponse.json();
        const pokemonList = [];

        
        const totalObjects = getRandomNumber(1, Math.min(data.pokemon.length, 50));
        

        for (const item of data.pokemon.slice(0, totalObjects)) {
          const pokemonResponse = await fetch(item.pokemon.url);
          const pokemon = await pokemonResponse.json();
          pokemonList.push(pokemon);
        }

        setPokemonData(pokemonList);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return [pokemonData, loading, error];
};

export default useDataFetch;
