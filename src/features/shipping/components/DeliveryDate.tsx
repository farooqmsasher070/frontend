import { Calendar } from "lucide-react";
import { useShippingStore } from "../store/shippingStore";

const dates = [
  "Today",
  "Tomorrow",
  "Wednesday",
];

export default function DeliveryDate() {
  const { date, setDate } = useShippingStore();

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-lg">
      <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
        <Calendar size={22} />
        Delivery Date
      </h2>

      <div className="grid grid-cols-3 gap-4">
        {dates.map((d) => (
          <button
            key={d}
            onClick={() => setDate(d)}
            className={`rounded-xl border p-4 ${
              date === d
                ? "border-red-600 bg-red-50"
                : ""
            }`}
          >
            {d}
          </button>
        ))}
      </div>
    </div>
  );
}