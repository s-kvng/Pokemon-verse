import React from 'react'

const Button = ({ name, onClick }) => {
  return (
    <>
        <button  onClick={onClick} className="p-2 font-semibold border hover:bg-zinc-700 hover:text-white border-black w-[100%] rounded-[4px]">
            {name}
        </button>
    </>
  )
}

export default Button