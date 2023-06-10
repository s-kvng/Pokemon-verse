import React , {useState} from "react";

//icons
import { IoMdHeart } from "react-icons/io";

//components
import Button from "./Button";
import Modal from "./Modal";

const SingleCard = ({ pokemon, index }) => {

  const [openModal , setOpenModal] = useState(false)

  const handleClick = () => {
    setOpenModal(true)
  }


  return (
    <>
      <div
        key={index}
        className="single-card shadow-blueShadow flex flex-col h-[360px] max-w-[318px] min-w-[248px] p-4  rounded-[8px] mx-auto"
      >
        <div
          style={{
            backgroundImage: `url(${pokemon.sprites.other["official-artwork"].front_default})`,
          }}
          className="image-card bg-contain bg-no-repeat bg-center h-[100%] w-[100%] hover:animate-bounce
         "
        ></div>

        {/* 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png' */}
        <div className="discription flex gap-[50px] pt-2">
          <h2 className="text-xl font-bold">{pokemon.forms[0].name}</h2>
          <div className="like">
            <a href="" className=" ">
              <i className="">
                <IoMdHeart size={20} className=" text-sky-600" />
              </i>
            </a>
            <h2>{index} likes</h2>
          </div>
        </div>
        <div className="poke-action pt-4 ">
          <div className="mb-4">
            <Button onClick={handleClick}  name="Infomation"/>
          </div>
          <div className="comment-btn">
            <Button />
          </div>
        </div>
      </div>
      {openModal && <Modal pokemon={pokemon}/>}
    </>
  );
};

export default SingleCard;
