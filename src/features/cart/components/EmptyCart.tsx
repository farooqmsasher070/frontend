import { ShoppingCart } from "lucide-react";

export default function EmptyCart() {
  return (
    <div className="flex h-full flex-col items-center justify-center p-8 text-center">
      <ShoppingCart size={64} className="text-gray-300" />

      <h2 className="mt-6 text-2xl font-bold">
        Your cart is empty
      </h2>

      <p className="mt-2 text-gray-500">
        Add some fresh products to get started.
      </p>
    </div>
  );
}