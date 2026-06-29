import { Outlet } from "react-router-dom";

import Navbar from "../components/layout/Navbar";

import CartDrawer from "../features/cart/components/CartDrawer";

export default function MainLayout() {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>

      

      <CartDrawer />
    </>
  );
}