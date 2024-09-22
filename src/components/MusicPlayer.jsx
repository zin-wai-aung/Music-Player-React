import React from "react";
import Controls from "./Controls";
import TrackDetails from "./TrackDetails";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const MusicPlayer = () => {
  return (
    <div className="p-10 bg-gray-800 rounded-xl shadow-xl w-80">
      {/* Top Header Section */}
      <div className=" w-full flex items-center justify-between mb-10">
        <div className=""> - </div>
        <p className="">Playing Now</p>

        <button className="">
          <HiOutlineMenuAlt3 className=" text-2xl" />
        </button>
      </div>

      <TrackDetails />
      <Controls />
    </div>
  );
};

export default MusicPlayer;
