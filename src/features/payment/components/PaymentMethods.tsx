import {
  CreditCard,
  Smartphone,
  Building2,
  Truck,
} from "lucide-react";

import {
  usePaymentStore,
  type PaymentMethod,
} from "../store/paymentStore";

const methods = [
  {
    id: "upi",
    title: "UPI",
    subtitle: "Google Pay, PhonePe, Paytm",
    icon: Smartphone,
  },
  {
    id: "card",
    title: "Credit / Debit Card",
    subtitle: "Visa, MasterCard, RuPay",
    icon: CreditCard,
  },
  {
    id: "netbanking",
    title: "Net Banking",
    subtitle: "All major banks",
    icon: Building2,
  },
  {
    id: "cod",
    title: "Cash on Delivery",
    subtitle: "Pay when delivered",
    icon: Truck,
  },
];

export default function PaymentMethods() {
  const { method, setMethod } = usePaymentStore();

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-lg">
      <h2 className="mb-6 text-2xl font-bold">
        Payment Method
      </h2>

      <div className="space-y-4">
        {methods.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() =>
                setMethod(item.id as PaymentMethod)
              }
              className={`flex w-full items-center gap-4 rounded-xl border p-5 text-left transition ${
                method === item.id
                  ? "border-red-600 bg-red-50"
                  : "hover:border-gray-300"
              }`}
            >
              <Icon
                size={28}
                className="text-red-600"
              />

              <div>
                <h3 className="font-semibold">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500">
                  {item.subtitle}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}