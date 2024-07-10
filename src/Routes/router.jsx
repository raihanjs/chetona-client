import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home";
import Books from "../pages/Books/Books";
import Writers from "../pages/Writers/Writers";
import AdminLayout from "../Layouts/AdminLayout";
import Admin from "../pages/Admin/Admin";
import BookList from "../pages/Admin/BookList/BookList";
import WriterList from "../pages/Admin/WriterList/WriterList";
import PromotionList from "../pages/Admin/PromotionList/PromotionList";
import CategoryList from "../pages/Admin/CategoryList/CategoryList";
import Promotion from "../pages/Promotion/Promotion";
import PromotionTahnk from "../pages/Promotion/PromotionTahnk";

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
      {
        path: "/promotions/:id",
        loader: ({ params }) =>
          fetch(
            `https://chetona-server-eight.vercel.app/promotions/${params.id}`
          ),
        element: <Promotion />,
      },
      {
        path:"/promotions/thankspage",
        element: <PromotionTahnk/>
      }
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "",
        element: <Admin />,
      },
      {
        path: "books",
        element: <BookList />,
      },
      {
        path: "writers",
        element: <WriterList />,
      },
      {
        path: "categories",
        element: <CategoryList />,
      },
      {
        path: "promotions",
        element: <PromotionList />,
      },
    ],
  },
]);
