import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Err from "../pages/Err/Err";
import Home from "../pages/Home/Home";
import Read from "../pages/Read/Read";
import ListedBooks from "../pages/ListedBooks/ListedBooks";
import BookDetails from "../pages/BookDetails/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Err />,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("/booksData.json"),
        element: <Home />,
      },
      {
        path: "/listed-books",
        loader: () => fetch("/booksData.json"),
        element: <ListedBooks />,
      },
      {
        path: "/pages-to-read",
        element: <Read />,
      },
      {
        path: "/book-details/:id",
        loader: () => fetch("/booksData.json"),
        element: <BookDetails />,
      },
    ],
  },
]);
