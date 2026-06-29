import {
  ShoppingCart,
  MapPin,
  CreditCard,
  CheckCircle,
} from "lucide-react";

type Props = {
  current: number;
};

const steps = [
  {
    title: "Cart",
    icon: ShoppingCart,
  },
  {
    title: "Checkout",
    icon: CheckCircle,
  },
  {
    title: "Shipping",
    icon: MapPin,
  },
  {
    title: "Payment",
    icon: CreditCard,
  },
];

export default function CheckoutStepper({
  current,
}: Props) {
  return (
    <div className="mb-10 flex items-center justify-between rounded-2xl bg-white p-6 shadow">

      {steps.map((step, index) => {

        const Icon = step.icon;

        const active = index <= current;

        return (
          <div
            key={step.title}
            className="flex flex-1 items-center"
          >
            <div className="flex flex-col items-center">

              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full ${
                  active
                    ? "bg-red-700 text-white"
                    : "bg-gray-200"
                }`}
              >
                <Icon size={22} />
              </div>

              <span className="mt-2 text-sm font-medium">
                {step.title}
              </span>

            </div>

            {index < steps.length - 1 && (
              <div
                className={`mx-4 h-1 flex-1 rounded ${
                  active
                    ? "bg-red-700"
                    : "bg-gray-200"
                }`}
              />
            )}

          </div>
        );
      })}
    </div>
  );
}