import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";




const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/blog',
                element: <Blog></Blog>
            },
        ]
    }
])

export default router;