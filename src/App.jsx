import { useState } from "react";

import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import Player from "./components/Player/Player";

import AppRoutes from "./routes";

import songs from "./data/songs";

import "./styles/layout.css";
import "./styles/global.css";
import "./styles/variables.css";

function App() {
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="app-container">
      <Sidebar />

      <div className="content-wrapper">
        <Navbar 
         searchTerm={searchTerm}
         setSearchTerm={setSearchTerm}
        />

        <main className="main-content">
          <AppRoutes
            setCurrentSong={setCurrentSong}
            searchTerm={searchTerm}
          />
        </main>

        <Player
          currentSong={currentSong}
          setCurrentSong={setCurrentSong}
          songs={songs}
        />
      </div>
    </div>
  );
}

export default App;