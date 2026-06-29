import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { useUIStore } from "../../../store/uiStore";

import CartList from "./CartList";
import FreeDeliveryProgress from "./FreeDeliveryProgress";
import CartSummary from "./CartSummary";

export default function CartDrawer() {
  const navigate = useNavigate();

  const {
    cartOpen,
    closeCart,
  } = useUIStore();

  if (!cartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className="fixed inset-0 z-40 bg-black/50"
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 z-50 flex h-screen w-full max-w-md flex-col bg-white shadow-2xl">

        {/* Header */}
        <div className="flex items-center justify-between border-b p-5">
          <h2 className="text-2xl font-bold">
            Shopping Cart
          </h2>

          <button
            onClick={closeCart}
            className="rounded-full p-2 transition hover:bg-gray-100"
          >
            <X size={24} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto">
          <CartList />
        </div>

        {/* Free Delivery Progress */}
        <FreeDeliveryProgress />

        {/* Summary */}
        <CartSummary />

        {/* Checkout */}
        <div className="border-t p-5">
          <button
            onClick={() => {
              closeCart();
              navigate("/checkout");
            }}
            className="w-full rounded-xl bg-red-700 py-4 text-lg font-semibold text-white transition hover:bg-red-800"
          >
            Proceed to Checkout →
          </button>
        </div>
      </div>
    </>
  );
}