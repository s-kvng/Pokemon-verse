import React , {useEffect, useState } from 'react';

//get random number function
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};



const useFetch = (url) => {

    const lessPokemon = []
    const [pokemon , setPokemon] = useState([])
    const [loading , setLoading] = useState(true)
    const [error , setError] = useState("")
    const [pokemonData , setPokemonData] = useState([])


   useEffect(()=>{

    const fetchData = async () => {

        try {
         
         const data = await fetch(url)
         const results = await data.json();
         
         if(results){
             setPokemon((pokemon)=>results.pokemon);
         }
        
 
        } catch (error) {
 
             setError(error.message)
             setLoading(false)
        }
         
     
   }

     fetchData();

     
   }, [url])
    
   if(pokemon.length > 0 ){
    console.log("charley -> ",pokemon.slice(0,5))
    
   }; 
   
 try {


  
  // pokemon.slice(0,5).forEach(async (poke)=>{
  //   const { url } = poke.pokemon
  //   const newData = await fetch(url)
  //   const pokemonResults = await newData.json();
  //   lessPokemon.push(pokemonResults);

  //   console.log("first-> ", pokemonResults)

  //  })

 } catch (error) {
  
  console.log(error.message)
 }

  return (
    [pokemon.slice(0,5), loading , error]
  )
}

export default useFetch