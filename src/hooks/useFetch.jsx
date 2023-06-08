import React , {useEffect, useState } from 'react';




const useFetch = ({url}) => {

    const [pokemon , setPokemon] = useState([])
    const [loading , setLoading] = useState(true)
    const [error , setError] = useState("")


   useEffect(()=>{

    const fetchData = async () => {

        try {
         
         const data = await fetch(url)
         const results = await data.json();
 
         if(results){
             setPokemon(results);
             setLoading(false)
         }
 
        } catch (error) {
 
             setError(error.message)
             setLoading(false)
        }
         
         
     }

     fetchData();
   }, [url])
    

  return (
    [pokemon, loading , error]
  )
}

export default useFetch