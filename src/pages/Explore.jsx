import "./Explore.css";

const categories = [
  {
    title: "🔥 Trending Now",
    songs: [
      {
        title: "On The Floor",
        artist: "Jennifer Lopez",
        cover:
          "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f",
      },
      {
        title: "Faded",
        artist: "Alan Walker",
        cover:
          "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
      },
      {
        title: "Alone",
        artist: "Alan Walker",
        cover:
          "https://images.unsplash.com/photo-1501612780327-45045538702b",
      },
    ],
  },

  {
    title: "🎯 Focus Music",
    songs: [
      {
        title: "Deep Focus",
        artist: "Harmonix",
        cover:
          "https://images.unsplash.com/photo-1516280440614-37939bbacd81",
      },
      {
        title: "Coding Mode",
        artist: "Lo-Fi",
        cover:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      },
      {
        title: "Study Session",
        artist: "Focus Beats",
        cover:
          "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f",
      },
    ],
  },

  {
    title: "⚡ Energy Booster",
    songs: [
      {
        title: "Power Up",
        artist: "Workout Mix",
        cover:
          "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
      },
      {
        title: "Run Fast",
        artist: "Gym Beats",
        cover:
          "https://images.unsplash.com/photo-1518611012118-696072aa579a",
      },
      {
        title: "Victory",
        artist: "Energy Music",
        cover:
          "https://images.unsplash.com/photo-1470225620780-dba8ba36b745",
      },
    ],
  },

  {
    title: "🌙 Night Vibes",
    songs: [
      {
        title: "Midnight Coding",
        artist: "Lo-Fi",
        cover:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      },
      {
        title: "Dreamscape",
        artist: "Ambient",
        cover:
          "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
      },
      {
        title: "Late Night",
        artist: "Chill Mix",
        cover:
          "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2",
      },
    ],
  },
];

function Explore() {
  return (
    <div className="explore-page">
      <h1 className="explore-title">
        🌍 Discover Music
      </h1>

      {categories.map((section) => (
        <div
          key={section.title}
          className="explore-section"
        >
          <h2>{section.title}</h2>

          <div className="song-row">
            {section.songs.map((song) => (
              <div
                key={song.title}
                className="explore-card"
              >
                <img
                  src={song.cover}
                  alt={song.title}
                />

                <div className="card-overlay">
                  <button>
                    ▶
                  </button>
                </div>

                <h3>{song.title}</h3>

                <p>{song.artist}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Explore;