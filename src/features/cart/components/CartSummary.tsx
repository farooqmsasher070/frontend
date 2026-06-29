import { useCartStore } from "../../../store/cartStore";

export default function CartSummary() {
  const subtotal = useCartStore((state) => state.subtotal());

  const delivery = useCartStore((state) => state.deliveryCharge());

  const tax = useCartStore((state) => state.tax());

  const total = useCartStore((state) => state.grandTotal());

  return (
    <div className="border-t p-6">
      <div className="mb-2 flex justify-between">
        <span>Subtotal</span>
        <span>₹{subtotal}</span>
      </div>

      <div className="mb-2 flex justify-between">
        <span>Delivery</span>
        <span>{delivery === 0 ? "FREE" : `₹${delivery}`}</span>
      </div>

      <div className="mb-2 flex justify-between">
        <span>GST (5%)</span>
        <span>₹{tax}</span>
      </div>

      <hr className="my-4" />

      <div className="mb-6 flex justify-between text-xl font-bold">
        <span>Total</span>
        <span>₹{total}</span>
      </div>

    </div>
  );
}