import {
  CheckCircle2,
  Circle,
} from "lucide-react";

const steps = [
  "Order Confirmed",
  "Packed",
  "Shipped",
  "Delivered",
];

type Props = {
  currentStep: number;
};

export default function OrderTimeline({
  currentStep,
}: Props) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold">
        Order Timeline
      </h2>

      <div className="space-y-5">
        {steps.map((step, index) => (
          <div
            key={step}
            className="flex items-center gap-4"
          >
            {index <= currentStep ? (
              <CheckCircle2
                size={24}
                className="text-green-600"
              />
            ) : (
              <Circle
                size={24}
                className="text-gray-300"
              />
            )}

            <span className="font-medium">
              {step}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}