import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
// import { useRouter } from 'next/router';
import NavLogo from "../../public/Artvisity_Logo.png";

interface NavbarProps {
  website: string | undefined;
}

const Navbar2 = ({ website }: NavbarProps) => {
  const [shadow, setShadow] = useState(false);
  const [navBack, setNavBack] = useState(false);

  useEffect(() => {
    // window.addEventListener('scroll', handleShadow);
    console.log("web " + website);
    website === undefined ? setNavBack(true) : setNavBack(false);
  }, []);

  return (
    <div className="fixed w-full h-14 shadow-xl z-[100] ease-in-out duration-300 bg-black">
      <div className="">
        <div
          className={
            navBack ? "hidden" : " flex justify-between items-center py-4 px-2"
          }
        >
          <a href={website} className="flex items-center text-white">
            <AiOutlineArrowLeft />
            <span className="px-1 text-white">Back</span>
          </a>
        </div>
        <div className="py-1 px-2">
          <Link href="/">
            <a className="flex ">
              <Image
                src={NavLogo}
                alt="/"
                layout="fill"
                objectFit="contain"
                className="cursor-pointer rounded-lg"
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
