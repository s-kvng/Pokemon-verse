import React from "react";

const Modal = ({ pokemon }) => {
  console.log(pokemon.held_items[0].item.name);
  console.log(pokemon.held_items.length)

  return (
    <div className="modalWrapper w-full h-full fixed top-[50%] left-[50%] z-99 backdrop-blur-sm translate-x-[-50%] translate-y-[-50%]">
      <div
        className="modal bg-bgModal  w-[40%]  fixed top-[50%] left-[50%] translate-x-[-50%] 
        translate-y-[-50%] rounded-[35px] flex flex-col items-center p-1 animate-[modalAnimation_1s_ease-in-out]"
      >
        <div className="w-[70%] mx-auto">
          <img className="w-[full]" src="../../src/img/pokemon1.png" alt="" />
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
            <span className="font-semibold">Type: </span>kbsj
          </p>
          <p>
            <span className="font-semibold">Base exp: </span>kdshiud7
          </p>
          <p>
            <span className="font-semibold">games: </span>ushdu
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
