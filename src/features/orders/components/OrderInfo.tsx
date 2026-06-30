import type { Order } from "../types/order";

type Props = {
  order: Order;
};

export default function OrderInfo({
  order,
}: Props) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-2xl font-bold">
        Order Information
      </h2>

      <div className="space-y-4">

        <div className="flex justify-between">
          <span>Order Number</span>
          <span>{order.id}</span>
        </div>

        <div className="flex justify-between">
          <span>Payment</span>
          <span>{order.paymentMethod}</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>
          <span>{order.shippingMethod}</span>
        </div>

        <div className="flex justify-between">
          <span>Total</span>
          <span className="font-bold text-red-700">
            ₹{order.total}
          </span>
        </div>

      </div>

    </div>
  );
}