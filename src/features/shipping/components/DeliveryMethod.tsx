import { Truck } from "lucide-react";
import { useShippingStore } from "../store/shippingStore";

export default function DeliveryMethod() {
  const { method, setMethod } = useShippingStore();

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-lg">
      <h2 className="mb-6 text-2xl font-bold">
        Delivery Method
      </h2>

      <div className="space-y-4">

        <button
          onClick={() => setMethod("standard")}
          className={`w-full rounded-xl border p-5 text-left transition ${
            method === "standard"
              ? "border-red-600 bg-red-50"
              : ""
          }`}
        >
          <div className="flex items-center gap-3">
            <Truck className="text-red-600" />
            <div>
              <h3 className="font-bold">
                Standard Delivery
              </h3>
              <p className="text-green-600">
                FREE • Tomorrow
              </p>
            </div>
          </div>
        </button>

        <button
          onClick={() => setMethod("express")}
          className={`w-full rounded-xl border p-5 text-left transition ${
            method === "express"
              ? "border-red-600 bg-red-50"
              : ""
          }`}
        >
          <div className="flex items-center gap-3">
            <Truck className="text-red-600" />
            <div>
              <h3 className="font-bold">
                Express Delivery
              </h3>
              <p className="text-red-600">
                ₹99 • Today
              </p>
            </div>
          </div>
        </button>

      </div>
    </div>
  );
}