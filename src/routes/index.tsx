import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import HomePage from "../features/home/pages/HomePage";
import ProductDetailsPage from "../features/products/pages/ProductDetailsPage";
import ProductsPage from "../features/products/pages/ProductsPage";
import WishlistPage from "../features/wishlist/pages/WishlistPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
       {
  path: "/products/:id",
  element: <ProductDetailsPage />,
},
{
  path: "/products",
  element: <ProductsPage />,
},{
  path: "/wishlist",
  element: <WishlistPage />,
},
    ],
  },
 
]);