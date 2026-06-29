import { useNavigate } from "react-router-dom";

import Button from "../../../components/common/Button";

import CheckoutHeader from "../../checkout/components/CheckoutHeader";
import CheckoutStepper from "../../checkout/components/CheckoutStepper";
import OrderSummary from "../../checkout/components/OrderSummary";

import DeliveryMethod from "../components/DeliveryMethod";
import DeliveryDate from "../components/DeliveryDate";
import TimeSlot from "../components/TimeSlot";

export default function ShippingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 py-10">

        <CheckoutHeader />

        <CheckoutStepper current={2} />

        <div className="grid gap-8 lg:grid-cols-3">

          {/* Left */}
          <div className="space-y-8 lg:col-span-2">

            <DeliveryMethod />

            <DeliveryDate />

            <TimeSlot />

          </div>

          {/* Right */}
          <div className="space-y-6">

            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg">

              <h2 className="mb-6 text-2xl font-bold">
                Order Summary
              </h2>

              <div className="mb-6 rounded-xl bg-green-50 p-4">

                <p className="font-semibold text-green-700">
                  🚚 Estimated Delivery
                </p>

                <p className="text-sm text-gray-600">
                  Tomorrow • 12 PM – 3 PM
                </p>

              </div>

              <OrderSummary />

            </div>

            <div className="flex gap-4">

              <Button
                onClick={() => navigate("/checkout")}
              >
                ← Back
              </Button>

              <Button
                onClick={() =>
                  navigate("/checkout/payment")
                }
              >
                Continue →
              </Button>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}