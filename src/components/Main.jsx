import React, { useState } from "react";

//components
import SingleCard from "./SingleCard";

//custom hooks
import useFetch from "../hooks/useFetch";
import useDataFetch from "../hooks/useDataFetch";

const types = [
  { name: "normal" },
  { name: "fighting" },
  { name: "flying" },
  { name: "poison" },
  { name: "ground" },
  { name: "rock" },
  { name: "ghost" },
  { name: "bug" },
  { name: "fire" },
  { name: "water" },
  { name: "grass" },
  { name: "electric" },
  { name: "psychic" },
  { name: "ice" },
  { name: "dragon" },
  { name: "dark" },
  { name: "fairy" },
];





const Main = () => {
  
  //first API call
  const [pokemon, loading, error] = useFetch(
    "https://pokeapi.co/api/v2/type/normal"
  );


  //second API call
    const [ pokemonData ] = useDataFetch(pokemon)
    console.log("this->",pokemonData)
  



      


  return (
    <section className=" h-[75vh] md:h-[72vh] max-[72vh] min-[72vh] rounded-[8px] bg-navGrad overflow-y-scroll mb-5 md:mb-2">
      <div className="text-center mb-4 flex md:flex-row flex-col items-center justify-center">
        <label htmlFor="type-selection" className="text-zinc-500 me-2">
          Choose the type of pokemon
        </label>
        <select
          name="types"
          id="type-selection"
          className="focus:ring-0 outline-0 rounded-[8px] p-1 w-[50%] shadow-lg cursor-pointer text-center"
        >
          {types.map((type, index) => (
            <option
              className=" even:bg-white placeholder:italic"
              key={index}
              value={type.name}
            >
              {type.name}
            </option>
          ))}
        </select>
      </div>

      <div className="container mx-auto ">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8 px-16">

           {pokemonData.map((pokemonInfo, index)=>(
            <SingleCard pokemon={pokemonInfo} index={index}/>
           ))}
            
         
        </div>
      </div>
    </section>
  );
};

export default Main;
