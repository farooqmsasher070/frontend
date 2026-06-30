import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import CartDrawer from "../features/cart/components/CartDrawer";
import { authService } from "../features/auth/services/authService";
import { useAuthStore } from "../features/auth/store/authStore";

export default function MainLayout() {
  const login = useAuthStore((state) => state.login);

  useEffect(() => {
    authService
      .restoreSession()
      .then((user) => {
        if (user) {
          login(user);
        }
      })
      .catch(() => {
        // ignore restore errors
      });
  }, [login]);

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