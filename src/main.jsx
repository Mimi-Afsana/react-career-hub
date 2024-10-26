
import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/home/Home';
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
import Jobs from "./components/Jobs/Jobs";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import JobDetails from "./components/JonDetails/JobDetails";
import { HelmetProvider } from "react-helmet-async";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import AuthProvider from "./providers/AuthProvider";
import PrivateRoute from "./components/routes/PrivateRoute";
import Blogs from "./components/Blogs/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/applied",
        element: <PrivateRoute><AppliedJobs></AppliedJobs></PrivateRoute>,
        loader: () => fetch('/jobs.json')
      },
      {
        path: "/jobs",
        element: <Jobs></Jobs>,
        loader: () => fetch('/jobs.json') // do not load all data. load only what you need
      },
      {
        path: '/job/:id',
        element: <JobDetails></JobDetails>,
        loader: () => fetch('/jobs.json') // do not load all data. load only what you need
      },
    ],
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider><RouterProvider router={router} /></AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
)
