import React from "react";
import {
  FaPlay,
  FaPause,
  FaStepBackward,
  FaStepForward,
} from "react-icons/fa";
import useMusicStore from "../store/useMusicStore";
import formatTime from "../utils/formatTime";

const Controls = () => {
  const {
    isPlaying,
    progress,
    currentTime,
    duration,
    setCurrentTime,
    toggleSong,
    nextSong,
    prevSong,
  } = useMusicStore();

  // Handle drag event on the progress bar
  const handleProgressChange = (event) => {
    const progressBar = event.target;
    const rect = progressBar.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const width = rect.width;
    const percentage = offsetX / width;
    const newTime = percentage * duration; // Calculate new time based on percentage
    setCurrentTime(newTime); // Set the new current time
  };

  return (
    <>
      {/* Progree Bar Section */}
      <div className="relative h-1 bg-gray-700 rounded mb-4">
        <div
          className="absolute top-0 left-0 h-full bg-green-500 shadow-sm shadow-green-500 rounded"
          style={{ width: `${(currentTime / duration) * 100}%` }} // Update width based on current time
        >
          <span className=" absolute right-0 top-[-100%] w-3 h-3 bg-green-300 rounded-full"></span>
        </div>
        <div className=" flex items-center justify-between pt-2">
          {/* current time */}
          <span>
            {formatTime(currentTime)}
          </span>
          {/* max duration */}
          <span> {formatTime(duration)} </span>
        </div>
        <div
          className="absolute top-0 left-0 w-full h-full cursor-pointer"
          onMouseDown={(e) => handleProgressChange(e)} // Handle mouse drag
          onTouchStart={(e) => handleProgressChange(e.touches[0])} // Handle touch drag
        />
      </div>

      {/* Control Buttons Section */}
      <div className="flex justify-around items-center mt-10">
        {/* Previous Button */}
        <button onClick={prevSong} className=" ">
          <FaStepBackward className=" hover:text-green-600 duration-300" />
        </button>

        {/* Play/Pause Button */}
        <div className="flex items-center justify-center">
          <button
            onClick={toggleSong}
            className="relative p-4 bg-white rounded-full shadow-lg glow-button"
          >
            {isPlaying ? (
              <FaPause className="text-black" />
            ) : (
              <FaPlay className="text-black" />
            )}
            <div className="absolute inset-0 rounded-full animate-pulse bg-gradient-to-r from-green-300 to-green-700 opacity-30 glow-ring"></div>
          </button>
        </div>

        {/* Next Button */}
        <button onClick={nextSong} className=" ">
          <FaStepForward className=" hover:text-green-600 duration-300" />
        </button>
      </div>
    </>
  );
};

export default Controls;
