const totalObjects = getRandomNumber(1, Math.min(pokemon.length, 50));
         pokemon.slice(1 , totalObjects).forEach(async (poke)=>{
           
           const { url } = poke.pokemon
           console.log(url)
           const data = await fetch(url);
           const results = await data.json();
       
           if(results){
             setNewData(results);
             
             console.log("newDate-> ",newData)
           }
       
         })


         import React from 'react'
         
         const test = () => {
           return (
            
           )
         }
         
         export default test