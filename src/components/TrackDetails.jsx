import React from "react";
import musicList from "../data/musicLists";

const TrackDetails = () => {


  return (
    <div className=" flex flex-col items-center ">
      {/* Spinning Disk */}
        <div className=" relative w-36 h-36 rounded-full">
          <img
            src="https://cdn.wallpapersafari.com/1/97/3hDYGs.jpg"
            alt=""
            className=" absolute w-full h-full object-cover object-left z-20 rounded-full"
          />
          <div className=" absolute top-[-5%] left-[-5%] rounded-full glow-ring w-[110%] h-[110%] animate-pulse bg-gradient-to-r from-green-300 to-blue-400 opacity-30"></div>
        </div>

      {/* Song title & artist */}
      <div className="text-center my-5">
        <h2 className="text-xl font-bold text-white"> {musicList[0].title} </h2>
        <p className=""> {musicList[0].artist} </p>
      </div>
    </div>
  );
};

export default TrackDetails;
