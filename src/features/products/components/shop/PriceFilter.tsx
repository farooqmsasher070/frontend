type PriceFilterProps = {
  value: number;
  onChange: (value: number) => void;
};

export default function PriceFilter({
  value,
  onChange,
}: PriceFilterProps) {
  return (
    <div className="mt-8 rounded-xl border bg-white p-5 shadow-sm">
      <h2 className="mb-4 text-xl font-bold">
        Price
      </h2>

      <input
        type="range"
        min={0}
        max={1200}
        step={50}
        value={value}
        onChange={(e) =>
          onChange(Number(e.target.value))
        }
        className="w-full accent-red-600"
      />

      <div className="mt-3 flex justify-between text-sm">
        <span>₹0</span>
        <span className="font-semibold">
          ₹{value}
        </span>
      </div>
    </div>
  );
}