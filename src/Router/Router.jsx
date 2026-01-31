import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Dashboard from "../Pages/Dashboard/Dashboard";


 export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
        {index: true, Component: Dashboard},
        
    ]
  },
]);