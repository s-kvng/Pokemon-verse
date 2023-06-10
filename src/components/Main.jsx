import React, { useState } from "react";

//select component
import Select from "react-select";

//components
import SingleCard from "./SingleCard";


//custom hooks
import useFetch from "../hooks/useFetch";
import useDataFetch from "../hooks/useDataFetch";

const types = [
  { value: "normal" , label : "normal"},
  { value: "fighting" , label :  "fighting"},
  { value: "flying" , label : "flying" },
  { value: "poison", label : "poison" },
  { value: "ground", label : "ground" },
  { value: "rock" , label : "rock"},
  { value: "ghost" ,label :  "ghost" },
  { value: "bug" ,label : "bug"},
  { value: "fire", label : "fire" },
  { value: "water" , label : "water"},
  { value: "grass" , label : "grass"},
  { value: "electric" ,label : "normal"},
  { value: "psychic" , label : "psychic"},
  { value: "ice"  , label : "ice" },
  { value: "dragon" , label : "dragon"},
  { value: "dark" , label : "dark"},
  { value: "fairy" , label : "fairy" },
];

const Main = () => {

  const [selectedValue , setSelectedValue] = useState("")
  const [secondLoading , setSecondLoading ] = useState(true)
  

  const onSelectChange = (selectedOptions) =>{
    setSecondLoading(true)
    console.log("select->", selectedOptions.value)
    setSelectedValue(selectedOptions.value)
    setSecondLoading(false) 
  }


  //first API call
  const [pokemonData, loading] = useFetch(`https://pokeapi.co/api/v2/type/${selectedValue}`);




  return (
    <section className=" h-[75vh] md:h-[72vh] max-[72vh] min-[72vh] rounded-[8px] bg-navGrad overflow-y-scroll mb-5 md:mb-2">
      <div className="text-center mb-4 flex md:flex-row flex-col items-center justify-center">
        <label htmlFor="type-selection" className="text-zinc-500 me-2">
          Choose the type of pokemon
        </label>
        <Select options={types} onChange={onSelectChange} />
      </div>

      <div className="container mx-auto ">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-8 gap-y-8   px-16">

          {secondLoading && <span>{'Loading New Pokemons...'}</span>}

{loading ?  ( <span> {'loading...'}</span>)
      : (
       
        pokemonData.map((pokemonInfo, index) => (
          <div key={index}>
            <SingleCard pokemon={pokemonInfo} index={index}  />
          </div>
             
        ))
      )
      }

        </div>
      </div>
    
    </section>
  );
};

export default Main;
