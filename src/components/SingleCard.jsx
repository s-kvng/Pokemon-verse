import React from "react";

//components
import Button from "./Button";

const SingleCard = () => {
  return (
    <>
      <div className="single-card shadow-blueShadow flex flex-col h-[360px] max-w-[318px] min-w-[248px] p-4  rounded-[8px]">
        <div
          className="image-card bg-contain bg-no-repeat bg-center h-[100%] w-[100%]
        bg-[url('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png')] "
        ></div>

        <div className="discription flex gap-[50px] pt-2">
          <h2 className="text-xl font-bold">Nathan</h2>
          <div className="like">
            <a href="">
              <i className="fa-solid fa-heart">icon</i>
            </a>
            <h2>3 likes</h2>
          </div>
        </div>
        <div className="poke-action pt-4 ">
          <div className="mb-4">
            <Button />
          </div>
          <div className="comment-btn">
            <Button />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCard;
