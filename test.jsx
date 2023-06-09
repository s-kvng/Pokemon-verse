import React from 'react'


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

const test = () => {
  return (
    <div>test</div>
  )
}

export default test


    