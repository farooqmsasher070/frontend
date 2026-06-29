import CartSummary from "../../cart/components/CartSummary";

export default function OrderSummary() {
  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <h2 className="mb-6 text-2xl font-bold">
  Order Summary
</h2>

<div className="mb-6 rounded-xl bg-green-50 p-4">

  <p className="font-semibold">
    🚚 Estimated Delivery
  </p>

  <p className="text-gray-600">
    Tomorrow • 9:00 AM – 12:00 PM
  </p>

</div>
      <CartSummary />
    </div>
  );
}