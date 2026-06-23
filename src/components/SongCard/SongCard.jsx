import "./SongCard.css";

import { useContext } from "react";
import { FavoritesContext } from "../../context/FavoritesContext";

function SongCard({ song, setCurrentSong }) {
  const {
    favorites,
    toggleFavorite,
  } = useContext(FavoritesContext);

  const isFavorite =
    favorites.includes(song.id);

  return (
    <div
      className="song-card"
      onClick={() => setCurrentSong(song)}
    >
      <img
        src={song.cover}
        alt={song.title}
        className="song-cover"
      />

      <div className="song-info">
        <h3>{song.title}</h3>

        <p>{song.artist}</p>

        <button
          className="favorite-btn"
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(song.id);
          }}
        >
          {isFavorite ? "❤️" : "🤍"}
        </button>
      </div>
    </div>
  );
}

export default SongCard;