import React from "react";
import { FaUmbrella } from "react-icons/fa";

const LoadingAnimation = () => {
  return (
    <div className="w-full h-[100vh]">
      <div className="animate-animateOpacity text-[#fff] flex justify-center items-center font-bold h-[100vh]">
        <span>
          <FaUmbrella size={60} className="mb-4" />
        </span>
        <span className="text-5xl">utsider</span>
      </div>
    </div>
  );
};

export default LoadingAnimation;
