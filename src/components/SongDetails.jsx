import React from "react";
import useMusicStore from "../store/useMusicStore";

const SongDetails = () => {

  const {currentSongIndex,musicLists } = useMusicStore();

  const currentSong = musicLists[currentSongIndex];

  return (
    <div className=" flex flex-col items-center ">
      {/* Spinning Disk */}
        <div className=" relative w-36 h-36 rounded-full">
          <img
            src={currentSong.img}
            alt={currentSong.title}
            className=" absolute w-full h-full object-cover object-center z-20 rounded-full"
          />
          <div className=" absolute top-[-5%] left-[-5%] rounded-full glow-ring w-[110%] h-[110%] animate-pulse bg-gradient-to-r from-green-300 to-blue-400 opacity-30"></div>
        </div>

      {/* Song title & artist */}
      <div className="text-center my-5">
        <h2 className="text-xl font-bold text-white"> {currentSong.title}  </h2>
        <p className=""> {currentSong.artist}  </p>
      </div>
    </div>
  );
};

export default SongDetails;
