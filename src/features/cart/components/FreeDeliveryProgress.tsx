import { useCartStore } from "../../../store/cartStore";

export default function FreeDeliveryProgress() {
  const subtotal = useCartStore((state) => state.subtotal());

  const target = 999;

  const remaining = Math.max(target - subtotal, 0);

  const progress = Math.min((subtotal / target) * 100, 100);

  return (
    <div className="border-t p-5">
      {remaining > 0 ? (
        <>
          <p className="mb-2 text-sm">
            Spend <strong>₹{remaining}</strong> more for{" "}
            <span className="font-bold text-green-600">
              FREE Delivery 🚚
            </span>
          </p>

          <div className="h-2 overflow-hidden rounded-full bg-gray-200">
            <div
              className="h-full bg-green-500 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </>
      ) : (
        <p className="font-semibold text-green-600">
          🎉 Congratulations! You've unlocked FREE Delivery.
        </p>
      )}
    </div>
  );
}