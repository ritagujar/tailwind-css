import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-5 px-14 ">
      <div className="text-center justify-start">
        <h1 className=" text-white cursor-pointer text-xl hover:text-green-300 ">
          a.o
        </h1>
      </div>
      <ul className="flex text-gray-500 text-lg justify-center list-none">
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
      <div className="flex text-center">
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
    </div>
  );
};

export default Navbar;
