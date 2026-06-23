import chillSong from "../assets/songs/chill.mp3";
import energySong from "../assets/songs/energy.mp3";
import focusSong from "../assets/songs/focus.mp3";
import morningSong from "../assets/songs/morning.mp3";
import nightSong from "../assets/songs/night.mp3";

import chillImage from "../assets/images/chill.jpg";
import energyImage from "../assets/images/energy.jpg";
import focusImage from "../assets/images/focus.jpg";
import morningImage from "../assets/images/morning.jpg";
import nightImage from "../assets/images/night.jpg";

const songs = [
  {
    id: 1,
    title: "Chill Vibes",
    artist: "Harmonix",
    cover: chillImage,
    audio: chillSong,
  },
  {
    id: 2,
    title: "Energy Boost",
    artist: "Harmonix",
    cover: energyImage,
    audio: energySong,
  },
  {
    id: 3,
    title: "Deep Focus",
    artist: "Harmonix",
    cover: focusImage,
    audio: focusSong,
  },
  {
    id: 4,
    title: "Morning Motivation",
    artist: "Harmonix",
    cover: morningImage,
    audio: morningSong,
  },
  {
    id: 5,
    title: "Night Relaxation",
    artist: "Harmonix",
    cover: nightImage,
    audio: nightSong,
  },
];

export default songs;