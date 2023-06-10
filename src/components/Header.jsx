import React from "react";
//Link
import { Link } from "react-router-dom";

const links = [
  { name: "Pokemon's", path: "#" },
  { name: "Championship", path: "#" },
  { name: "Regions", path: "#" },
];

const Header = () => {
  return (
    <>
      <nav className=" p-[10px] w-100 flex justify-center gap-[10%] items-center 
      rounded-[8px] text-[#555] bg-[#b8c6db] bg-navGrad">
        <img
          className=""
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/120px-International_Pok%C3%A9mon_logo.svg.png?20150121202211"
          alt=""
        />

        <div className=" hidden md:flex justify-evenly w-[80%] text-2xl font-semibold">
            { links.map((link, index)=>{
                return(
                    <div className="" key={index}>
                        <a href={link.path}>{link.name}</a>
                    </div>
                )
            })}
        </div>
      </nav>
    </>
  );
};

export default Header;
