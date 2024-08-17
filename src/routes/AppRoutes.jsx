import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Root from "../pages/Root";
import NotFound from "../components/NotFound/NotFound";
import DashboardPage from "@/pages/DashboardPage";
import Signup from "@/components/Auth/Signup/Signup";
import Protected from "@/components/Protected/Protected";
import Login from "@/components/Auth/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,

    children: [
      { index: true, element: <Login /> },
      {
        path: "/register",
        element: <Signup />,
      },
      {
        path: "/dashboard",
        element: <Protected Component={DashboardPage} />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
