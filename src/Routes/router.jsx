import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home";
import Books from "../pages/Books/Books";
import Writers from "../pages/Writers/Writers";

export const router = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/writers",
        element: <Writers />,
      },
    ],
  },
]);
