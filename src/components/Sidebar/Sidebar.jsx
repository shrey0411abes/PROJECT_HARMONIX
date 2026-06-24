import "./Sidebar.css";
import Logo from "../Logo/Logo";

import { NavLink } from "react-router-dom";

import {
  FaHome,
  FaCompass,
  FaHeart,
  FaBook,
  FaLightbulb,
} from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="sidebar">
      <Logo />

      <nav className="sidebar-nav">
        <NavLink
          to="/"
          className="nav-item"
        >
          <FaHome />
          <span>Home</span>
        </NavLink>

        <NavLink
          to="/explore"
          className="nav-item"
        >
          <FaCompass />
          <span>Explore</span>
        </NavLink>

        <NavLink
          to="/favorites"
          className="nav-item"
        >
          <FaHeart />
          <span>Favorites</span>
        </NavLink>

        <NavLink
          to="/library"
          className="nav-item"
        >
          <FaBook />
          <span>Library</span>
        </NavLink>

        <NavLink
          to="/productivity"
          className="nav-item"
        >
          <FaLightbulb />
          <span>Productivity</span>
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;