import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import Player from "./components/Player/Player";

import routes from "./routes";

function App() {
    return (
        <div className="app-container">
            <Sidebar />

            <div className="main-content">
                <Navbar />

                <Routes>
                    {routes.map((route) => (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={route.element}
                        />
                    ))}
                </Routes>
            </div>

            <Player />
        </div>
    );
}

export default App;