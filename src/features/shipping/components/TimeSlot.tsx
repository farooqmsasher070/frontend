import { Clock } from "lucide-react";
import { useShippingStore } from "../store/shippingStore";

const slots = [
  "9 AM - 12 PM",
  "12 PM - 3 PM",
  "3 PM - 6 PM",
];

export default function TimeSlot() {
  const { slot, setSlot } = useShippingStore();

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-lg">
      <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
        <Clock size={22} />
        Time Slot
      </h2>

      <div className="space-y-3">
        {slots.map((time) => (
          <button
            key={time}
            onClick={() => setSlot(time)}
            className={`w-full rounded-xl border p-4 text-left ${
              slot === time
                ? "border-red-600 bg-red-50"
                : ""
            }`}
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
}