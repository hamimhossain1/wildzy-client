import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddService from "../Pages/AddService/AddService";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import QandA from "../Pages/Q&A/QandA";
import Reviews from "../Pages/Reviews/Reviews";
import ServiceDetails from "../Pages/Services/ServiceDetails";
import Services from "../Pages/Services/Services";
import SignUp from "../Pages/SignUp/SignUp";
import Summary from "../Pages/Summary/Summary";
import PrivetRoutes from "../Router/PrivetRoutes"



const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>,
                loader: () => fetch(`https://wildzy-server.vercel.app/services`)
            },
            {
                path:'/home',
                element: <Home></Home>,
                loader: () => fetch(`https://wildzy-server.vercel.app/services`)
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
                element: <Services></Services>,
                loader: () => fetch(`https://wildzy-server.vercel.app/allServices`)
            },
            {
                path: '/allServices/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({params}) => fetch(`https://wildzy-server.vercel.app/allServices/${params.id}`),
            },
            {
                path: '/addService',
                element: <PrivetRoutes><AddService></AddService></PrivetRoutes>,
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