import React, { useEffect, useState, useRef, useCallback } from 'react';

const useDataFetch = (pokemon) => {

  console.log("get -> ",pokemon)
  const [pokemonData, setPokemonData] = useState([]);
  const [loading , setLoading] = useState(true)
  const [isError , setIsError ] = useState("")
  const pokemonRef = useRef(pokemon);




  const pokemonFetchData = useCallback( async () => {
   
    
    try {
      

      const pokemonList = [];
      for (const items of pokemon ){
        const { url } = items.pokemon
        const response = await fetch(url)
        const data = await response.json()
        console.log("data=>",data)
        pokemonList.push(data)
      }

        setPokemonData(pokemonList);
        setLoading(false)

    } catch (error) {
      console.log("error")
      setIsError(error.message)
      setLoading(false)
    }
   
  }, []);



  useEffect(()=>{
  
  pokemonFetchData();

},[pokemonFetchData])

  return (
   [pokemonData, loading ,isError]
  );
};

export default useDataFetch;