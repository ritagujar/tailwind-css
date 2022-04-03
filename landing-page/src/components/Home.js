import React from "react";
import image from "../assets/illustrstion.svg";

const Home = () => {
  return (
    <div className="text-white justify-center pt-24">
      <div className="flex flex-row justify-evenly">
        <div className="flex flex-col ">
          <h1 className=" text-4xl">
            The smatest way in gastronomy to simplify work and delight you guest
          </h1>
          <p>Get Started</p>
        </div>
        <div>
          <img src={image} alt="" className="h-96" />
        </div>
      </div>
      <div className="flex flex-row">
        <p>
          Argo handler a lot of administative work for you and optimizesx
          utilization, increases turnover and reduces your effort{" "}
        </p>
        <p>
          Argo handler a lot of administative work for you and optimizesx
          utilization, increases turnover and reduces your effort{" "}
        </p>
      </div>
    </div>
  );
};

export default Home;
