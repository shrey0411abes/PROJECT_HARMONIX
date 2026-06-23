import SongCard from "../components/SongCard/SongCard";
import songs from "../data/songs";

function Home({ setCurrentSong , searchTerm }) {
  const filteredSongs = songs.filter(
  (song) =>
    song.title
      .toLowerCase()
      .includes((searchTerm || "").toLowerCase()) ||
    song.artist
      .toLowerCase()
      .includes((searchTerm || "").toLowerCase())
);
  return (
    <div className="home-page">
      <h1>Good Evening, Shrey 👋</h1>

      <h2>Focus Playlists</h2>

      {/* <div className="songs-grid">
        {filteredSongs.map((song) => (
          <SongCard
            key={song.id}
            song={song}
            setCurrentSong={setCurrentSong}
          />
        ))}
      </div> */}





      <div className="songs-grid">
  {filteredSongs.length > 0 ? (
    filteredSongs.map((song) => (
      <SongCard
        key={song.id}
        song={song}
        setCurrentSong={setCurrentSong}
      />
    ))
  ) : (
    <p>No songs found 🎵</p>
  )}
</div>

    </div>
  );
}

export default Home;