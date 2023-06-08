import React , {useEffect, useState } from 'react';

//get random number function
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};



const useFetch = (url) => {

    
    const [pokemon , setPokemon] = useState([])
    const [error , setError] = useState("")
   


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
          
        }
         
     
   }

     fetchData();

     
   }, [url])
    

  return (
    [pokemon.slice(0,5), error ]
  )
}

export default useFetch