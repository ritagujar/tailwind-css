import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-evenly bg-blue-500 h-16 items-center text-white">
      <h1 className="">a.o</h1>
      <ul className="flex">
        <li className="">
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Product</a>
        </li>
        <li>
          <a href="/">Customer</a>
        </li>
        <li>
          <a href="/">Prices</a>
        </li>
        <li>
          <a href="/">Our team</a>
        </li>
        <li>
          <a href="/">Blog</a>
        </li>
      </ul>
      <div className="flex">
        <a href="/">Login</a>
        <button type="button" className="pl-3">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;
