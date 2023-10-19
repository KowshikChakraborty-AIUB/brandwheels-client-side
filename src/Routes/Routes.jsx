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

const routes = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/brands')
            },
            {
                path: '/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/myCart',
                element: <MyCart></MyCart>,
                loader: () => fetch('http://localhost:5000/myCarts')
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
                loader: () => fetch('http://localhost:5000/brandsProducts')
            },
            {
                path: '/productDetails/:id',
                element: <ProductDetails></ProductDetails>,
                loader: () => fetch('http://localhost:5000/brandsProducts')
            },
            {
                path: '/updateProduct/:id',
                element: <UpdateProduct></UpdateProduct>,
                loader: ({params}) => fetch(`http://localhost:5000/brandsProducts/${params.id}`)
            }
        ]
    }
])

export default routes;