import React , {useRef, useEffect} from "react";




const Modal = ({ pokemon, setOpenModal }) => {

    console.log(pokemon)
    const modalWrapperRef = useRef(null);
    

//get pokemon type
    const arr = [];
   const types = () =>{
    if(pokemon.types.length > 1 ){
       pokemon.types.forEach((poke)=>{
        arr.push(poke.type.name)
       })
    }
    else{
        arr.push(pokemon.types[0].type.name)
    }
   }

   types()
   
   //get games  
   const games = [];
   if (pokemon.game_indices.length === 0) {
     games.push('has not appear yet or is on new games');
   } else {
     for (let index = 0; index < 2; index += 1) {
       games.push(`${pokemon.game_indices[index].version.name}`);
     }
   }

//Close Modal
  useEffect(() => {
    const handleOutsideClick = (e) => { 
      if (e.target === modalWrapperRef.current) {
        // Handle the outside click event here
        setOpenModal(false)
        // Remove the modal or update the state to hide the modal
      }
    };

    window.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);



  return (
    <div ref={modalWrapperRef} className="modalWrapper w-full h-full fixed top-[50%] left-[50%] z-99 backdrop-blur-sm translate-x-[-50%] translate-y-[-50%]">
      <div
        className="modal bg-bgModal  w-[40%]  fixed top-[50%] left-[50%] translate-x-[-50%] 
        translate-y-[-50%] rounded-[35px] flex flex-col items-center p-1 animate-[modalAnimation_1s_ease-in-out]"
      >
        <div className="w-[70%] mx-auto">
          <img className="w-[full]" src={pokemon.sprites.other['official-artwork'].front_default} alt="" />
        </div>

        <h2 className=" text-2xl font-semibold">{pokemon.forms[0].name}</h2>

        <div className="flex flex-wrap flex-col p-2 text-lg">
          <p>
            <span className="font-semibold">Item: </span>
            {pokemon.held_items.length === 0
              ?  "Cant drop any items"
              : pokemon.held_items[0].item.name}
          </p>
          <p>
            <span className="font-semibold">Type: </span>{arr.join(', ')}
          </p>
          <p>
            <span className="font-semibold">Base exp: </span> {pokemon.base_experience}
          </p>
          <p>
            <span className="font-semibold">games: </span>{games.join(', ')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
