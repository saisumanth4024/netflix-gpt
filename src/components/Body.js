import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";

const Body = () => {
  return (
    <div>
      <RouterProvider router={AppRouter} />
    </div>
  );
};

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <h1> error in the page</h1>,
  },
  {
    path: "/browse",
    element: <Browse />,
    errorElement: <h1> error in the page</h1>,
  },
]);

export default Body;
