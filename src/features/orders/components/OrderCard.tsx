import { Link } from "react-router-dom";
import { RotateCcw, Eye } from "lucide-react";

import type { Order } from "../types/order";

type Props = {
  order: Order;
};

const statusColors = {
  Processing: "bg-yellow-100 text-yellow-700",
  Packed: "bg-blue-100 text-blue-700",
  Shipped: "bg-purple-100 text-purple-700",
  Delivered: "bg-green-100 text-green-700",
  Cancelled: "bg-red-100 text-red-700",
};

export default function OrderCard({ order }: Props) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg">

      {/* Header */}
      <div className="flex flex-col justify-between gap-4 md:flex-row">

        <div>
          <h2 className="text-xl font-bold">
            Order #{order.id}
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            {order.date}
          </p>
        </div>

        <span
          className={`self-start rounded-full px-4 py-2 text-sm font-semibold ${
            statusColors[order.status]
          }`}
        >
          {order.status}
        </span>

      </div>

      {/* Products */}
      <div className="mt-6">

        <h3 className="mb-3 font-semibold">
          Items
        </h3>

        <div className="space-y-2">

          {order.items.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-14 w-14 rounded-xl object-cover"
              />

              <div className="flex-1">
                <p className="font-medium">
                  {item.name}
                </p>

                <p className="text-sm text-gray-500">
                  {item.weight}
                </p>
              </div>

              <span className="font-semibold">
                ₹{item.price}
              </span>

            </div>
          ))}

        </div>

      </div>

      {/* Footer */}
      <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t pt-6 md:flex-row">

        <div>

          <p className="text-gray-500">
            Total
          </p>

          <p className="text-2xl font-bold text-red-700">
            ₹{order.total}
          </p>

        </div>

        <div className="flex gap-3">

          <Link
            to={`/orders/${order.id}`}
            className="flex items-center gap-2 rounded-xl border px-5 py-3 transition hover:bg-gray-100"
          >
            <Eye size={18} />
            View Details
          </Link>

          <button
            className="flex items-center gap-2 rounded-xl bg-red-700 px-5 py-3 text-white transition hover:bg-red-800"
          >
            <RotateCcw size={18} />
            Reorder
          </button>

        </div>

      </div>

    </div>
  );
}