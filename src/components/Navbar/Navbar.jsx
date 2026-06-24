import "./Navbar.css";
import {
  FaSearch,
  FaBell,
  FaUserCircle,
} from "react-icons/fa";

import {
  useContext
} from "react";

import {
  ThemeContext
} from "../../context/ThemeContext";

function Navbar({searchTerm , setSearchTerm ,}) {

  const {
  theme,
  toggleTheme,
} = useContext(
  ThemeContext
);

  return (
    <header className="navbar">
      <div className="search-container">
        <FaSearch className="search-icon" />

       <input
  type="text"
  placeholder="Search songs..."
  value={searchTerm}
  onChange={(e) =>
    setSearchTerm(e.target.value)
  }
/>
      </div>

      <div className="navbar-right">
        <button
  className="theme-btn"
  onClick={toggleTheme}
>
  {theme === "dark"
    ? "☀️"
    : "🌙"}
</button>
        <button className="notification-btn">
          <FaBell />
        </button>

        <div className="profile-section">
          <FaUserCircle className="profile-icon" />

          <div className="user-info">
  <span className="user-name">
    Shrey
  </span>

  <span className="user-role">
    Premium User
  </span>
</div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;