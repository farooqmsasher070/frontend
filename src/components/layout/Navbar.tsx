import { Link, NavLink } from "react-router-dom";
import {
  Heart,
  Menu,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";

import { useCartStore } from "../../store/cartStore";
import { useUIStore } from "../../store/uiStore";
import { useWishlistStore } from "../../store/wishlistStore";

export default function Navbar() {
const totalItems = useCartStore((state) => state.itemCount());

  const toggleCart = useUIStore((state) => state.toggleCart);
const wishlistCount = useWishlistStore(
  (state) => state.items.length
);
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

        {/* Desktop Navigation */}
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

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="hidden lg:flex items-center rounded-lg border px-3 py-2">
            <Search size={18} className="text-gray-500" />

            <input
              type="text"
              placeholder="Search products..."
              className="ml-2 w-56 border-none bg-transparent outline-none"
            />
          </div>

          {/* Wishlist */}

<Link
  to="/wishlist"
  className="relative flex items-center justify-center"
>
  <Heart
    size={22}
    className="cursor-pointer transition hover:text-red-600"
  />

  {wishlistCount > 0 && (
    <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
      {wishlistCount}
    </span>
  )}
</Link>          {/* Cart */}
          <button
            onClick={toggleCart}
            className="relative rounded-lg p-2 hover:bg-gray-100"
          >
            <ShoppingCart size={22} />

            {totalItems > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
                {totalItems}
              </span>
            )}
          </button>

          {/* User */}
          <button className="rounded-lg p-2 hover:bg-gray-100">
            <User size={22} />
          </button>

          {/* Mobile Menu */}
          <button className="rounded-lg p-2 hover:bg-gray-100 md:hidden">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}