import { useNavigate } from "react-router-dom";

import Button from "../../../components/common/Button";

import CheckoutHeader from "../../checkout/components/CheckoutHeader";
import CheckoutStepper from "../../checkout/components/CheckoutStepper";
import OrderSummary from "../../checkout/components/OrderSummary";

import PaymentMethods from "../components/PaymentMethods";
import BillingAddress from "../components/BillingAddress";

export default function PaymentPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 py-10">

        {/* Header */}
        <CheckoutHeader />

        {/* Stepper */}
        <CheckoutStepper current={3} />

        <div className="grid gap-8 lg:grid-cols-3">

          {/* Left Side */}
          <div className="space-y-8 lg:col-span-2">

            <PaymentMethods />

            <BillingAddress />

          </div>

          {/* Right Side */}
          <div className="space-y-6">

            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg">

              <h2 className="mb-6 text-2xl font-bold">
                Order Summary
              </h2>

              <div className="mb-6 rounded-xl bg-green-50 p-4">

                <p className="font-semibold text-green-700">
                  🔒 Secure Payment
                </p>

                <p className="text-sm text-gray-600">
                  Your payment information is encrypted and secure.
                </p>

              </div>

              <OrderSummary />

            </div>

            <div className="flex gap-4">

              <Button
                onClick={() => navigate("/checkout/shipping")}
              >
                ← Back
              </Button>

              <Button
                onClick={() => navigate("/order-success")}
              >
                Place Order →
              </Button>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}