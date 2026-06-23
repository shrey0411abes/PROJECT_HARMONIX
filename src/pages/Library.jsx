import { useState } from "react";
import SongCard from "../components/SongCard/SongCard";
import songs from "../data/songs";

function Library({ setCurrentSong }) {
  const [sortBy, setSortBy] = useState("title");

  const sortedSongs = [...songs].sort((a, b) =>
    a[sortBy].localeCompare(b[sortBy])
  );

  return (
    <div className="home-page">
      <h1>📚 Your Library</h1>

      <p>Browse all available songs.</p>

      <div style={{ margin: "20px 0" }}>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
          }}
        >
          <option value="title">Sort by Title</option>
          <option value="artist">Sort by Artist</option>
        </select>
      </div>

      <div className="songs-grid">
        {sortedSongs.map((song) => (
          <SongCard
            key={song.id}
            song={song}
            setCurrentSong={setCurrentSong}
          />
        ))}
      </div>
    </div>
  );
}

export default Library;