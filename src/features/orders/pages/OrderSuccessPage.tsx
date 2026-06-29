import { useMemo } from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  ShoppingBag,
  Package,
  Truck,
} from "lucide-react";

import Button from "../../../components/common/Button";
import { usePaymentStore } from "../../payment/store/paymentStore";
import { useShippingStore } from "../../shipping/store/shippingStore";

export default function OrderSuccessPage() {
  const { method } = usePaymentStore();
  const { date, slot, method: shippingMethod } =
    useShippingStore();

  const orderId = useMemo(() => {
    return `FM${Math.floor(
      100000 + Math.random() * 900000
    )}`;
  }, []);

  const paymentLabel = {
    upi: "UPI",
    card: "Credit / Debit Card",
    netbanking: "Net Banking",
    cod: "Cash on Delivery",
  }[method];

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-10 shadow-xl">

        {/* Success Icon */}
        <div className="flex flex-col items-center">

          <CheckCircle2
            size={90}
            className="text-green-600"
          />

          <h1 className="mt-6 text-4xl font-bold text-green-700">
            Order Confirmed!
          </h1>

          <p className="mt-3 text-center text-gray-600">
            Thank you for shopping with FreshMeat.
            Your order has been placed successfully.
          </p>

        </div>

        {/* Order Info */}
        <div className="mt-10 grid gap-5 md:grid-cols-2">

          <div className="rounded-2xl bg-gray-50 p-5">

            <div className="mb-2 flex items-center gap-2">

              <Package
                size={22}
                className="text-red-700"
              />

              <h3 className="font-bold">
                Order Number
              </h3>

            </div>

            <p className="text-lg font-semibold">
              {orderId}
            </p>

          </div>

          <div className="rounded-2xl bg-gray-50 p-5">

            <div className="mb-2 flex items-center gap-2">

              <Truck
                size={22}
                className="text-red-700"
              />

              <h3 className="font-bold">
                Delivery
              </h3>

            </div>

            <p>{date}</p>

            <p>{slot}</p>

          </div>

        </div>

        {/* Summary */}
        <div className="mt-8 rounded-2xl bg-red-50 p-6">

          <div className="mb-3 flex justify-between">

            <span className="font-medium">
              Shipping
            </span>

            <span className="capitalize">
              {shippingMethod}
            </span>

          </div>

          <div className="flex justify-between">

            <span className="font-medium">
              Payment
            </span>

            <span>{paymentLabel}</span>

          </div>

        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-col gap-4 md:flex-row">

          <Link
            to="/products"
            className="flex-1"
          >
            <Button>
              <div className="flex items-center justify-center gap-2">
                <ShoppingBag size={20} />
                Continue Shopping
              </div>
            </Button>
          </Link>

          <Link
            to="/orders"
            className="flex-1"
          >
            <Button>
              <div className="flex items-center justify-center gap-2">
                <Package size={20} />
                View Orders
              </div>
            </Button>
          </Link>

        </div>

      </div>
    </div>
  );
}