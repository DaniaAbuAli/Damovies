import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import WatchList from "./pages/WatchList.jsx";
import MovieDetails from "./pages/MovieDetails.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import App from "./App.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/watchList",
    element: <WatchList />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/movie/:movieId",
    element: <MovieDetails />,
    errorElement: <div>404 Not Found</div>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
