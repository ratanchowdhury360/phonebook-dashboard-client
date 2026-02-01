import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Dashboard from "../Pages/Dashboard/Dashboard";
import CallLogs from "../Pages/CallLogs/CallLogs";
import Massages from "../Pages/Massages/Massages";
import Settings from "../Pages/Settings/Settings";


 export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
        {index: true, Component: Dashboard},
        {path: "/dashboard", Component: Dashboard},
        {
          path: "/callLogs",
          Component: CallLogs
        },
        {path: "/messages", Component: Massages},
        {path: "/settings", Component: Settings},
        
    ]
  },
]);