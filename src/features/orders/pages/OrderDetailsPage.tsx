import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Download, RotateCcw } from "lucide-react";

import { orderService } from "../services/orderService";

import OrderInfo from "../components/OrderInfo";
import OrderProducts from "../components/OrderProducts";
import OrderTimeline from "../components/OrderTimeline";

export default function OrderDetailsPage() {
  const { id } = useParams();

  const order = orderService.getById(id || "");

  if (!order) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <h1 className="text-3xl font-bold">
          Order not found
        </h1>
      </div>
    );
  }

  const currentStep = {
    Processing: 0,
    Packed: 1,
    Shipped: 2,
    Delivered: 3,
    Cancelled: 0,
  }[order.status];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 py-10">

        {/* Back Button */}
        <Link
          to="/orders"
          className="mb-8 inline-flex items-center gap-2 text-red-700 hover:underline"
        >
          <ArrowLeft size={20} />
          Back to Orders
        </Link>

        {/* Header */}
        <div className="mb-8 flex flex-col justify-between gap-4 rounded-2xl bg-white p-8 shadow-lg md:flex-row">

          <div>
            <h1 className="text-4xl font-bold">
              Order #{order.id}
            </h1>

            <p className="mt-2 text-gray-500">
              {order.date}
            </p>
          </div>

          <div>

            <span
              className={`rounded-full px-5 py-2 font-semibold ${
                order.status === "Delivered"
                  ? "bg-green-100 text-green-700"
                  : order.status === "Shipped"
                  ? "bg-blue-100 text-blue-700"
                  : order.status === "Packed"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {order.status}
            </span>

          </div>

        </div>

        {/* Main Content */}
        <div className="grid gap-8 lg:grid-cols-3">

          {/* Left */}
          <div className="space-y-8 lg:col-span-2">

            <OrderProducts
              products={order.items}
            />

            <OrderTimeline
              currentStep={currentStep}
            />

          </div>

          {/* Right */}
          <div className="space-y-8">

            <OrderInfo order={order} />

            {/* Shipping */}
            <div className="rounded-2xl border bg-white p-6 shadow-sm">

              <h2 className="mb-5 text-2xl font-bold">
                Shipping
              </h2>

              <div className="space-y-3">

                <div className="flex justify-between">
                  <span>Method</span>

                  <span>
                    {order.shippingMethod}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Status</span>

                  <span>{order.status}</span>
                </div>

              </div>

            </div>

            {/* Actions */}
            <div className="space-y-4">

              <button
                className="flex w-full items-center justify-center gap-2 rounded-xl border py-4 transition hover:bg-gray-100"
              >
                <Download size={20} />

                Download Invoice
              </button>

              <button
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-700 py-4 font-semibold text-white transition hover:bg-red-800"
              >
                <RotateCcw size={20} />

                Reorder
              </button>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}