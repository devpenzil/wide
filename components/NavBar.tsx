import Link from "next/link";
import React from "react";

function NavBar() {
  return (
    <>
      <div className="container mx-auto flex flex-row justify-center md:justify-between py-8">
        <div className="text-center md:text-left">Wide</div>
        <div className="md:flex hidden space-x-6 font-thin items-center md:flex-row ">
          <div> <Link href={'/'}>Home</Link> </div>
          <div><Link href={'/about'}>About</Link></div>
          <div><Link href={'/service'}>Services</Link></div>
          <div><Link href={'/gallery'}>Gallery</Link></div>
          <button className="bg-black px-6 py-2 text-white"><Link href={'/contact'}>Lets talk</Link></button>
        </div>
      </div>
    </>
  );
}

export default NavBar;
