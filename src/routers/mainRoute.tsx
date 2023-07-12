import {createBrowserRouter} from "react-router-dom"
import Layout from "../Components/Block/Layout";
import LandingPage from "../Pages/LandingPage";


export const mainRoute = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index:true,
                element: <LandingPage/>,
            },
        ]
    }
])