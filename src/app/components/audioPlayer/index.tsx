"use client";
// Vendors
import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="sticky top-[12svh] z-10 mr-2 grid sm:mr-4">
      <audio ref={audioRef} loop className="hidden" preload="none">
        <source
          src="https://utfs.io/f/TQN6ETpOQVaoKtlvVKyQCcvom2wXNxOhaI0DY3szHdfSFJVr"
          type="audio/mp3"
        />
      </audio>
      <button
        onClick={togglePlayPause}
        aria-label={isPlaying ? "Detener Música" : "Reproducir Música"}
        className="flex h-12 w-12 items-center justify-center place-self-end rounded-full border-2 border-primary bg-blue-950 bg-opacity-50 text-primary transition-colors duration-200 hover:bg-yellow-900 hover:bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
      >
        {isPlaying ? (
          <Pause className="h-6 w-6" role="presentation" />
        ) : (
          <Play className="h-6 w-6" role="presentation" />
        )}
      </button>
    </div>
  );
}
