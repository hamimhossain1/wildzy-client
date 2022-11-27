import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import ServicesHomeDetails from "../Pages/Home/ServicesHome/ServicesHomeDetails";
import Login from "../Pages/Login/Login";
import QandA from "../Pages/Q&A/QandA";
import Reviews from "../Pages/Reviews/Reviews";
import ServiceDetails from "../Pages/Services/ServiceDetails";
import Services from "../Pages/Services/Services";



import SignUp from "../Pages/SignUp/SignUp";
import Summary from "../Pages/Summary/Summary";
import PrivetRoutes from "./PrivetRoutes";




const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>,
                loader: () => fetch(`http://localhost:5000/services`)
            },
            {
                path:'/home',
                element: <Home></Home>,
                loader: () => fetch(`http://localhost:5000/services`)
            },
            {
                path: '/services/:id',
                element: <ServicesHomeDetails></ServicesHomeDetails>,
                params: ({params}) => fetch(`http://localhost:5000/services${params.id}`)               
            },
            {
                path:'/blog',
                element: <Blog></Blog>
            },
            {
                path:'/signup',
                element: <SignUp></SignUp>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/a&a',
                element: <QandA></QandA>
            },
            {
                path:'/summary',
                element: <Summary></Summary>
            },
            {
                path:'/allServices',
                element: <PrivetRoutes><Services></Services></PrivetRoutes>,
                loader: () => fetch(`http://localhost:5000/allServices`)
            },
            {
                path: '/allServices/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/allServices${params.id}`)
            },
            {
                path:'/reviews',
                element: <PrivetRoutes><Reviews></Reviews></PrivetRoutes>
            },
        ]
    },
    {path: '*', element: <ErrorPage></ErrorPage>}
])

export default router;