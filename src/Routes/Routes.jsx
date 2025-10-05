import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Err from "../pages/Err/Err";
import Home from "../pages/Home/Home";
import Books from "../pages/Books/Books";
import Read from "../pages/Read/Read";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Err />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/listed-books",
        element: <Books />,
      },
      {
        path: "/pages-to-read",
        element: <Read />,
      },
    ],
  },
]);
