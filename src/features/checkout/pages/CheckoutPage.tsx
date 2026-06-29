import { useNavigate } from "react-router-dom";

import Button from "../../../components/common/Button";

import CheckoutHeader from "../components/CheckoutHeader";
import CheckoutStepper from "../components/CheckoutStepper";
import CustomerForm from "../components/CustomerForm";
import AddressForm from "../components/AddressForm";
import OrderSummary from "../components/OrderSummary";

export default function CheckoutPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 py-10">

        {/* Header */}
        <CheckoutHeader />

        {/* Stepper */}
        <CheckoutStepper current={1} />

        {/* Content */}
        <div className="grid gap-8 lg:grid-cols-3">

          {/* Left */}
          <div className="space-y-8 lg:col-span-2">

            <CustomerForm />

            <AddressForm />

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
                  Tomorrow • 9:00 AM – 12:00 PM
                </p>

              </div>

              <OrderSummary />

            </div>

            <Button
              onClick={() => navigate("/checkout/shipping")}
            >
              Continue to Shipping →
            </Button>

          </div>

        </div>
      </div>
    </div>
  );
}