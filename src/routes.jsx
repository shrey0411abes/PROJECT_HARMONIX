import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Library from "./pages/Library";
import Favorites from "./pages/Favorites";
import Productivity from "./pages/Productivity";

const routes = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/explore",
        element: <Explore />,
    },
    {
        path: "/library",
        element: <Library />,
    },
    {
        path: "/favorites",
        element: <Favorites />,
    },
    {
        path: "/productivity",
        element: <Productivity />,
    },
];

export default routes;