import { X } from "lucide-react";
import { useUIStore } from "../../../store/uiStore";

export default function CartHeader() {
  const closeCart = useUIStore((state) => state.closeCart);

  return (
    <div className="flex items-center justify-between border-b p-5">
      <div>
        <h2 className="text-2xl font-bold">
          Shopping Cart
        </h2>

        <p className="text-sm text-gray-500">
          Fresh products waiting for you
        </p>
      </div>

      <button
        onClick={closeCart}
        className="rounded-lg p-2 transition hover:bg-gray-100"
      >
        <X />
      </button>
    </div>
  );
}