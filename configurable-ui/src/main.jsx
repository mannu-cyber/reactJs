import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Work from "./assets/view/work/Work";
import Contact from "./assets/view/contact/Contact";
import Blogs from "./assets/view/blogs/Blogs";
import Career from "./assets/view/career/Career";
import Company from "./assets/view/company/company";
import Home from "./assets/view/home/Home";
import Navbar from "./assets/component/navbar/Navbar";
import Login from "./assets/view/blogs/login/Login";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  { path: "/blogs", element: <Blogs /> },
  {
    path: "/contact",
    element: <Contact />,
  },
  { path: "/career", element: <Career /> },
  {
    path: "/work",
    element: <Work />,
  },

  {
    path: "/company",
    element: <Company />,
  },

  {path:'login',
element:<Login/>}
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <Navbar />
  </RouterProvider>
);
