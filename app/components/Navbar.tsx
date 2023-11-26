"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoIosMenu, IoIosClose } from "react-icons/io";

const Navbar = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white">
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        <div>
          <Image
            height={16}
            width={36}
            alt=""
            className="w-16 cursor-pointer"
            src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png"
          />
        </div>
        <div
          className={`nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 ${
            isMenuOpen ? "top-[9%]" : "top-[-100%]"
          } md:w-auto w-full flex items-center px-5`}
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <li>
              <a className="hover:text-gray-500" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="#product">
                Products
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="#statics">
                Statics
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="#steps">
                Steps
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="#state">
                State
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="#pricing">
                Pricing
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="#team">
                Developers
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="#testimonials">
                Testimonials
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <button
            className="bg-[#0455e0] text-white px-3 md:px-5 py-1 md:py-2 rounded-full hover:bg-[#0540a7] text-base duration-200 transition-all ease-linear"
          >
            <a href="#login">Sign in</a>
          </button>
          {isMenuOpen ? (
            <IoIosClose
              onClick={toggleMenu}
              className="text-3xl cursor-pointer md:hidden"
            />
          ) : (
            <IoIosMenu
              onClick={toggleMenu}
              className="text-3xl cursor-pointer md:hidden"
            />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
