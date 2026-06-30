import { Package } from "lucide-react";

import OrderCard from "../components/OrderCard";
import { useOrders } from "../hooks/useOrders";

export default function OrdersPage() {
  const { orders } = useOrders();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 py-10">

        <div className="mb-10 flex items-center gap-3">

          <Package
            size={36}
            className="text-red-700"
          />

          <div>

            <h1 className="text-4xl font-bold">
              My Orders
            </h1>

            <p className="text-gray-600">
              View and track your recent orders.
            </p>

          </div>

        </div>

        <div className="space-y-6">

          {orders.map((order) => (
            <OrderCard
              key={order.id}
              order={order}
            />
          ))}

        </div>

      </div>
    </div>
  );
}