import "./Navbar.css";
import {
  FaSearch,
  FaBell,
  FaUserCircle,
} from "react-icons/fa";

function Navbar({searchTerm , setSearchTerm ,}) {
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
        <button className="notification-btn">
          <FaBell />
        </button>

        <div className="profile-section">
          <FaUserCircle className="profile-icon" />

          <span>Shrey</span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;