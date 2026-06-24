import "./SongCard.css";
import { motion } from "framer-motion";

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
   <motion.div
  className="song-card"
  whileHover={{
    scale: 1.03,
    y: -5,
  }}
  whileTap={{
    scale: 0.97,
  }}
  transition={{
    duration: 0.5,
  }}
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
    </motion.div>
  );
}

export default SongCard;