import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Career from "../Pages/Career";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NewsDetails from "../components/NewsDetails/NewsDetails";
import PrivateRoutes from "../Pages/PrivateRoutes";
import Update from "../Pages/Update";

const router=createBrowserRouter([
    {
        path: '/',
        element:<Root/>,
        children:[
            {
                index:true,
                loader: ()=>fetch("/news.json"),
                element:<Home/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path:'/career',
                element: <Career/>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path: '/news/:id',
                
                loader: ()=>fetch("/news.json"),
                element:<PrivateRoutes><NewsDetails/></PrivateRoutes>
            },
            {
                path:'/update',
                element:<Update/>
            }
        ]

    }
])
export default router