import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-evenly h-20  items-center ">
      <h1 className="text-xl text-white cursor-pointer">a.o</h1>
      <ul className="flex text-gray-500 text-lg">
        <li className="mr-6">
          <a href="/">About</a>
        </li>
        <li className="mr-6">
          <a href="/">Product</a>
        </li>
        <li className="mr-6">
          <a href="/">Customer</a>
        </li>
        <li className="mr-6">
          <a href="/">Prices</a>
        </li>
        <li className="mr-6">
          <a href="/">Our team</a>
        </li>
        <li className="mr-6">
          <a href="/">Blog</a>
        </li>
      </ul>
      <div className="flex text-center">
        <li className="list-none">
          <a href="/" className="text-green text-lg">
            Login
          </a>
        </li>
      </div>
      <button className="ml-2 bg-green h-9 w-24">Get Stated</button>
    </div>
  );
};

export default Navbar;
