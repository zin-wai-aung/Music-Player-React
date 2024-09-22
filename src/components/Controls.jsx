import React from "react";
import {
  FaPlay,
  FaPause,
  FaStepBackward,
  FaStepForward,
  FaHeart,
  FaRandom,
  FaSyncAlt,
} from "react-icons/fa";

const Controls = () => {
  return (
    <>
      {/* Progree Bar Section */}
      <div className="relative h-1 bg-gray-700 rounded mb-4">
        <div
          className="absolute top-0 left-0 h-full bg-green-500 shadow-sm shadow-green-500 rounded"
          style={{ width: `30%` }} // Adjust width based on progress percentage
        >
          <span className=" absolute right-0 top-[-100%] w-3 h-3 bg-green-300 rounded-full"></span>
        </div>
        <div className=" flex items-center justify-between pt-2">
          {/* current time */}
          <span>1:03</span>
          {/* max duration */}
          <span>3:25</span>
        </div>
      </div>

      {/* Control Buttons Section */}
      <div className="flex justify-around items-center mt-10">
        {/* Previous Button */}
        <button className=" ">
          <FaStepBackward className=" hover:text-green-600 duration-300" />
        </button>

        {/* Play/Pause Button */}
        <div className="flex items-center justify-center">
          <button className="relative p-4 bg-white rounded-full shadow-lg glow-button">
            <FaPause className="text-black" />
            <div className="absolute inset-0 rounded-full animate-pulse bg-gradient-to-r from-green-300 to-green-700 opacity-30 glow-ring"></div>
          </button>
        </div>

        {/* Next Button */}
        <button className=" ">
          <FaStepForward className=" hover:text-green-600 duration-300" />
        </button>
      </div>
    </>
  );
};

export default Controls;
