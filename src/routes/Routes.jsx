import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/category/Category";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/News/News/News";
import Login from "../pages/User/Login/Login";
import Register from "../pages/User/Register/Register";
import LoginLayout from "../layouts/LoginLayout";
import PrivateRoute from "./PrivateRoute";
import Terms from "../pages/Shared/Terms/Terms";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/",
        element: <Navigate to="/category/0"></Navigate>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "terms",
        element: <Terms />,
      },
    ],
  },
  {
    path: "/category",
    element: <Main />,
    children: [
      {
        path: ":id",
        element: <Category />,
        loader: ({ params }) =>
          fetch(
            `https://news-dragon-server-abirm09.vercel.app/category/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/news",
    element: <NewsLayout />,
    children: [
      {
        path: ":id",
        element: (
          <PrivateRoute>
            <News />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://news-dragon-server-abirm09.vercel.app/news/${params.id}`
          ),
      },
    ],
  },
]);
export default router;
