import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Favorites from "./pages/Favorites";
import Library from "./pages/Library";
import Productivity from "./pages/Productivity";

function AppRoutes({ setCurrentSong , searchTerm, }) {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home setCurrentSong={setCurrentSong}
                       searchTerm = {searchTerm} />}
      />

      <Route path="/explore" element={<Explore />} />
      <Route path="/favorites" element={<Favorites />} />

      <Route
  path="/library"
  element={
    <Library
      setCurrentSong={setCurrentSong}
    />
  }
/>

      <Route path="/productivity" element={<Productivity />} />
    </Routes>
  );
}

export default AppRoutes;