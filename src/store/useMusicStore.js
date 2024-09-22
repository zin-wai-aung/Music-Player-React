import { create } from "zustand";

const useMusicStore = create((set) => ({
  isPlaying: false, // Initially, the music is not playing
  currentTrack: {
    title: "Sample Track",
    artist: "Sample Artist",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    },
  
  // Toggles the play/pause state
  togglePlayPause: () => set((state) => ({ isPlaying: !state.isPlaying })),
}));

export default useMusicStore;