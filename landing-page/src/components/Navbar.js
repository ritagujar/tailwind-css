import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="flex justify-between items-center py-5 px-14 ">
      <div className="items-center">
        <h1 className=" text-white cursor-pointer text-center text-xl hover:text-green-300">
          a.o
        </h1>
      </div>
      <ul className=" text-gray-500 text-lg text-center list-none hidden lg:flex">
        <li className="mr-6  hover:text-green-300 ">
          <a href="/" className="tracking-wide">
            About
          </a>
        </li>
        <li className="mr-6 hover:text-green-300">
          <a href="/" className="tracking-wide">
            Product
          </a>
        </li>
        <li className="mr-6 hover:text-green-300">
          <a href="/" className="tracking-wide">
            Customer
          </a>
        </li>
        <li className="mr-6 hover:text-green-300">
          <a href="/" className="tracking-wide">
            Prices
          </a>
        </li>
        <li className="mr-6 hover:text-green-300">
          <a href="/" className="tracking-wide">
            Our team
          </a>
        </li>
        <li className="mr-6 hover:text-green-300">
          <a href="/" className="tracking-wide">
            Blog
          </a>
        </li>
      </ul>
      <div className="items-center lg:flex  hidden ">
        <li className="list-none">
          <a
            href="/"
            className="text-buttonGreen text-lg font-semibold hover:text-green-300 tracking-wide"
          >
            Log in
          </a>
        </li>
        <button className="ml-8 bg-buttonGreen h-9 w-24 font-semibold hover:bg-green-300 tracking-wide">
          Get Stated
        </button>
      </div>
      <div className="lg:hidden ml-4 relative">
        <RiMenu3Line
          color="#fff"
          size={27}
          onClick={() => setToggleMenu(true)}
          className="cursor-pointer"
        />

        {toggleMenu && (
          <div className="flex fixed left-0 top-0 justify-center w-full items-center h-full bg-white">
            <RiCloseLine
              color="#000"
              size={40}
              onClick={() => setToggleMenu(false)}
              className="cursor-pointer absolute top-3 right-9"
            />
            <ul className="flex text-gray-500 text-lg list-none flex-col  ">
              <li className=" hover:text-green-300 text-center m-3 text-4xl">
                <a href="/" className="tracking-wide ">
                  About
                </a>
              </li>
              <li className=" hover:text-green-300 text-center m-3 text-4xl">
                <a href="/" className="tracking-wide">
                  Product
                </a>
              </li>
              <li className="hover:text-green-300 text-center m-3 text-4xl">
                <a href="/" className="tracking-wide">
                  Customer
                </a>
              </li>
              <li className="hover:text-green-300 text-center m-3 text-4xl">
                <a href="/" className="tracking-wide">
                  Prices
                </a>
              </li>
              <li className="hover:text-green-300 text-center m-3 text-4xl">
                <a href="/" className="tracking-wide">
                  Our team
                </a>
              </li>
              <li className=" hover:text-green-300 text-center m-3 text-4xl">
                <a href="/" className="tracking-wide">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
