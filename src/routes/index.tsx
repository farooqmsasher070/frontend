import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import HomePage from "../features/home/pages/HomePage";
import ProductDetailsPage from "../features/products/pages/ProductDetailsPage";
import ProductsPage from "../features/products/pages/ProductsPage";
import WishlistPage from "../features/wishlist/pages/WishlistPage";
import CheckoutPage from "../features/checkout/pages/CheckoutPage";
import ShippingPage from "../features/shipping/pages/ShippingPage";
import PaymentPage from "../features/payment/pages/PaymentPage";
import OrderSuccessPage from "../features/orders/pages/OrderSuccessPage";
import OrdersPage from "../features/orders/pages/OrdersPage";
import OrderDetailsPage from "../features/orders/pages/OrderDetailsPage";
import LoginPage from "../features/auth/pages/LoginPage";
import AddressesPage from "../features/address/pages/AddressesPage";

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
},{
  path: "/checkout",
  element: <CheckoutPage />,
},{
  path: "/checkout/shipping",
  element: <ShippingPage />,
},{
  path: "/checkout/payment",
  element: <PaymentPage />,
},{
  path: "/order-success",
  element: <OrderSuccessPage />,
},{
  path: "/orders",
  element: <OrdersPage />,
},{
  path: "/orders/:id",
  element: <OrderDetailsPage />,
},{
  path: "/login",
  element: <LoginPage />,
},{
  path: "/account/addresses",
  element: <AddressesPage />,
}
    ],
  },
 
]);