import React from "react";

const Navbar = () => {


  return (
  
    <nav
      className="w-[98%] mx-auto flex  items-center justify-center bg-black 
       sticky top-0 z-10 h-[100px] py-2 px-1 border-b border-white shadow-md shadow-green-700"
    >
      <h1 className="text-white lg:text-3xl md:text-2xl sm:text-xl flex items-center">
        Task Management system
      </h1>
    </nav>
  );
};

export default Navbar;
