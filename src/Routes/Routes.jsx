import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import Login from "../Pages/Login/Login";
import BrandsProducts from "../Pages/BrandsProducts/BrandsProducts";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";
import Registration from "../Pages/Registration/Registration";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRoutes from "./PrivateRoutes";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://brandshop-server-side-p7oz9je8t-kowshik-chakrabortys-projects.vercel.app/brands')
            },
            {
                path: '/addProduct',
                element: <PrivateRoutes><AddProduct></AddProduct></PrivateRoutes>
            },
            {
                path: '/myCart',
                element: <PrivateRoutes><MyCart></MyCart></PrivateRoutes>,
                loader: () => fetch('https://brandshop-server-side-p7oz9je8t-kowshik-chakrabortys-projects.vercel.app/myCarts')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/brandsProducts/:brandName',
                element: <BrandsProducts></BrandsProducts>,
                loader: () => fetch('https://brandshop-server-side-p7oz9je8t-kowshik-chakrabortys-projects.vercel.app/brandsProducts')
            },
            {
                path: '/productDetails/:id',
                element: <PrivateRoutes><ProductDetails></ProductDetails></PrivateRoutes>,
                loader: () => fetch('https://brandshop-server-side-p7oz9je8t-kowshik-chakrabortys-projects.vercel.app/brandsProducts')
            },
            {
                path: '/updateProduct/:id',
                element: <PrivateRoutes><UpdateProduct></UpdateProduct></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://brandshop-server-side-p7oz9je8t-kowshik-chakrabortys-projects.vercel.app/brandsProducts/${params.id}`)
            }
        ]
    }
])

export default routes;