import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  ChevronDown,
  Heart,
  LogIn,
  LogOut,
  MapPin,
  Menu,
  Package,
  Search,
  Settings,
  ShoppingCart,
  User,
} from "lucide-react";

import { useState } from "react";

import { useCartStore } from "../../store/cartStore";
import { useUIStore } from "../../store/uiStore";
import { useWishlistStore } from "../../store/wishlistStore";
import { useAuthStore } from "../../features/auth/store/authStore";

export default function Navbar() {
  const navigate = useNavigate();
  const [showProfileMenu, setShowProfileMenu] =
  useState(false);

  const totalItems = useCartStore((state) =>
    state.itemCount()
  );

  const toggleCart = useUIStore(
    (state) => state.toggleCart
  );

  const wishlistCount = useWishlistStore(
    (state) => state.items.length
  );

  const {
    user,
    isAuthenticated,
    logout,
  } = useAuthStore();

  return (
    <header className="sticky top-0 z-30 bg-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-red-700"
        >
          <span>🥩</span>
          <span>FreshMeat</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-red-700"
                : "text-gray-700 hover:text-red-700"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-red-700"
                : "text-gray-700 hover:text-red-700"
            }
          >
            Products
          </NavLink>

          <NavLink
            to="/offers"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-red-700"
                : "text-gray-700 hover:text-red-700"
            }
          >
            Offers
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-red-700"
                : "text-gray-700 hover:text-red-700"
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Right */}
        <div className="flex items-center gap-4">

          {/* Search */}
          <div className="hidden items-center rounded-lg border px-3 py-2 lg:flex">
            <Search
              size={18}
              className="text-gray-500"
            />

            <input
              type="text"
              placeholder="Search products..."
              className="ml-2 w-56 bg-transparent outline-none"
            />
          </div>

          {/* Wishlist */}
          <Link
            to="/wishlist"
            className="relative rounded-lg p-2 transition hover:bg-gray-100"
          >
            <Heart size={22} />

            {wishlistCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
                {wishlistCount}
              </span>
            )}
          </Link>

          {/* Cart */}
          <button
            onClick={toggleCart}
            className="relative rounded-lg p-2 transition hover:bg-gray-100"
          >
            <ShoppingCart size={22} />

            {totalItems > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
                {totalItems}
              </span>
            )}
          </button>

          {/* Authentication */}
          {isAuthenticated ? (
  <div className="relative">

    <button
      onClick={() =>
        setShowProfileMenu(!showProfileMenu)
      }
      className="flex items-center gap-2 rounded-xl px-3 py-2 transition hover:bg-gray-100"
    >
      <User size={20} />

      <span className="hidden lg:block font-medium">
        {user?.fullName}
      </span>

      <ChevronDown size={18} />
    </button>

    {showProfileMenu && (
      <div className="absolute right-0 mt-3 w-64 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">

        <div className="border-b p-4">
          <h3 className="font-semibold">
            {user?.fullName}
          </h3>

          <p className="text-sm text-gray-500">
            {user?.email}
          </p>
        </div>

        <button
          onClick={() => {
            navigate("/account");
            setShowProfileMenu(false);
          }}
          className="flex w-full items-center gap-3 px-5 py-3 hover:bg-gray-100"
        >
          <User size={18} />
          My Profile
        </button>

        <button
          onClick={() => {
            navigate("/orders");
            setShowProfileMenu(false);
          }}
          className="flex w-full items-center gap-3 px-5 py-3 hover:bg-gray-100"
        >
          <Package size={18} />
          My Orders
        </button>

        <button
          onClick={() => {
            navigate("/wishlist");
            setShowProfileMenu(false);
          }}
          className="flex w-full items-center gap-3 px-5 py-3 hover:bg-gray-100"
        >
          <Heart size={18} />
          Wishlist
        </button>

        <button
          onClick={() => {
            navigate("/account/addresses");
            setShowProfileMenu(false);
          }}
          className="flex w-full items-center gap-3 px-5 py-3 hover:bg-gray-100"
        >
          <MapPin size={18} />
          Addresses
        </button>

        <button
          onClick={() => {
            navigate("/account/settings");
            setShowProfileMenu(false);
          }}
          className="flex w-full items-center gap-3 px-5 py-3 hover:bg-gray-100"
        >
          <Settings size={18} />
          Settings
        </button>

        <hr />

        <button
          onClick={() => {
            logout();
            setShowProfileMenu(false);
            navigate("/");
          }}
          className="flex w-full items-center gap-3 px-5 py-3 text-red-600 hover:bg-red-50"
        >
          <LogOut size={18} />
          Logout
        </button>

      </div>
    )}

  </div>
) : (
            <button
              onClick={() =>
                navigate("/login")
              }
              className="flex items-center gap-2 rounded-xl bg-red-700 px-4 py-2 font-medium text-white transition hover:bg-red-800"
            >
              <LogIn size={18} />
              Login
            </button>
          )}

          {/* Mobile Menu */}
          <button className="rounded-lg p-2 transition hover:bg-gray-100 md:hidden">
            <Menu size={24} />
          </button>

        </div>

      </div>
    </header>
  );
}