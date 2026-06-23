import { useContext } from "react";

import SongCard from "../components/SongCard/SongCard";

import songs from "../data/songs";

import {
  FavoritesContext,
} from "../context/FavoritesContext";

function Favorites() {
  const { favorites } =
    useContext(FavoritesContext);

  const favoriteSongs = songs.filter(
    (song) =>
      favorites.includes(song.id)
  );

  return (
    <div>
      <h1>Your Favorites ❤️</h1>

      <div className="songs-grid">
        {favoriteSongs.map((song) => (
          <SongCard
            key={song.id}
            song={song}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;