import React from "react";

function NavBar() {
  return (
    <div className="container mx-auto flex flex-row justify-between py-8">
      <div>Wide</div>
      <div className="flex space-x-6 font-thin items-center flex-row"> 
          <div>Home</div>
          <div>About</div>
          <div>Services</div>
          <div>Gallery</div>
          <button className="bg-black px-6 py-2 text-white">Lets talk</button>
      </div>
    </div>
  );
}

export default NavBar;
