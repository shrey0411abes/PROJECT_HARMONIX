import "./Player.css";

import { useState, useRef, useEffect } from "react";

import {
  FaPlay,
  FaPause,
  FaStepBackward,
  FaStepForward,
  FaVolumeUp,
} from "react-icons/fa";

function Player({
  currentSong,
  setCurrentSong,
  songs,
}) {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(70);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.load();

    if (isPlaying) {
      audioRef.current.play();
    }
  }, [currentSong]);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration || 0);
    };

    audio.addEventListener(
      "timeupdate",
      updateTime
    );

    audio.addEventListener(
      "loadedmetadata",
      updateTime
    );

    return () => {
      audio.removeEventListener(
        "timeupdate",
        updateTime
      );

      audio.removeEventListener(
        "loadedmetadata",
        updateTime
      );
    };
  }, []);

  useEffect(() => {
  const audio = audioRef.current;

  if (!audio) return;

  const handleSongEnd = () => {
    const currentIndex = songs.findIndex(
      (song) => song.id === currentSong.id
    );

    const nextIndex =
      (currentIndex + 1) % songs.length;

    setCurrentSong(songs[nextIndex]);
  };

  audio.addEventListener("ended", handleSongEnd);

  return () => {
    audio.removeEventListener(
      "ended",
      handleSongEnd
    );
  };
}, [currentSong, songs, setCurrentSong]);

  const handlePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;

    setVolume(newVolume);

    if (audioRef.current) {
      audioRef.current.volume =
        newVolume / 100;
    }
  };

  const handleSeek = (e) => {
    const seekTime = e.target.value;

    if (audioRef.current) {
      audioRef.current.currentTime =
        seekTime;

      setCurrentTime(seekTime);
    }
  };

  const handleNext = () => {
    const currentIndex = songs.findIndex(
      (song) => song.id === currentSong.id
    );

    const nextIndex =
      (currentIndex + 1) % songs.length;

    setCurrentSong(songs[nextIndex]);
  };

  const handlePrevious = () => {
    const currentIndex = songs.findIndex(
      (song) => song.id === currentSong.id
    );

    const previousIndex =
      (currentIndex - 1 + songs.length) %
      songs.length;

    setCurrentSong(songs[previousIndex]);
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";

    const minutes = Math.floor(
      time / 60
    );

    const seconds = Math.floor(
      time % 60
    );

    return `${minutes}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <footer className="player">
      <audio ref={audioRef}>
        <source
          src={currentSong.audio}
          type="audio/mpeg"
        />
      </audio>

      <div className="player-song-info">
        <img
          src={currentSong.cover}
          alt={currentSong.title}
          className="player-cover"
        />

        <div>
          <h4>{currentSong.title}</h4>
          <p>{currentSong.artist}</p>
        </div>
      </div>

      <div className="player-controls">
        <div className="control-buttons">
          <button
            className="control-btn"
            onClick={handlePrevious}
          >
            <FaStepBackward />
          </button>

          <button
            className="play-btn"
            onClick={handlePlayPause}
          >
            {isPlaying ? (
              <FaPause />
            ) : (
              <FaPlay />
            )}
          </button>

          <button
            className="control-btn"
            onClick={handleNext}
          >
            <FaStepForward />
          </button>
        </div>

        <div className="progress-container">
          <span>
            {formatTime(currentTime)}
          </span>

          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={handleSeek}
            className="progress-bar"
          />

          <span>
            {formatTime(duration)}
          </span>
        </div>
      </div>

      <div className="volume-section">
        <FaVolumeUp />

        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={handleVolumeChange}
          className="volume-slider"
        />
      </div>
    </footer>
  );
}

export default Player;