import { NavLink } from "react-router-dom";

function Sidebar() {
    return (
        <aside className="sidebar">
            <h2>HarmoniX</h2>

            <nav>
                <NavLink to="/">Home</NavLink>

                <NavLink to="/explore">Explore</NavLink>

                <NavLink to="/library">Library</NavLink>

                <NavLink to="/favorites">Favorites</NavLink>

                <NavLink to="/productivity">
                    Productivity
                </NavLink>
            </nav>
        </aside>
    );
}

export default Sidebar;