import { Minus, Plus } from "lucide-react";

type Props = {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
};

export default function QuantitySelector({
  quantity,
  onIncrease,
  onDecrease,
}: Props) {
  return (
    <div className="flex items-center gap-4">
      <button
        onClick={onDecrease}
        className="rounded-lg border p-2 hover:bg-gray-100"
      >
        <Minus size={18} />
      </button>

      <span className="w-8 text-center text-xl font-semibold">
        {quantity}
      </span>

      <button
        onClick={onIncrease}
        className="rounded-lg border p-2 hover:bg-gray-100"
      >
        <Plus size={18} />
      </button>
    </div>
  );
}