import React, { useEffect, useRef } from "react";
import Controls from "./Controls";
import SongDetails from "./SongDetails";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import useMusicStore from "../store/useMusicStore";

const MusicPlayer = () => {
  const {
    initAudio,
    musicLists,
    currentSongIndex,
  } = useMusicStore();
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      initAudio(audio);
      audio.src = musicLists[currentSongIndex].src; // Set the initial song
    }
  }, []);

  return (
    <div className="p-10 bg-gray-800 rounded-xl shadow-xl w-80">
      {/* Top Header Section */}
      <div className="w-full flex items-center justify-between mb-10">
        <div className=""> - </div>
        <p className="">Playing Now</p>
        <button className="">
          <HiOutlineMenuAlt3 className=" text-2xl" />
        </button>
      </div>

      <SongDetails />
      <Controls />

      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        onEnded={() => useMusicStore.getState().nextSong()} // Auto next on song end
      />
    </div>
  );
};

export default MusicPlayer;
