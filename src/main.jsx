import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@material-tailwind/react";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import ErrorPage from "./Pages/ErrorPage";
import App from "./App";
import ServiceDetails from "./Pages/ServiceDetails";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./PrivateRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/service-details/:id",
        element: <PrivateRoute><ServiceDetails/></PrivateRoute>,
        loader: () => fetch("/services.json")
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/register",
        element: <Register/>
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
