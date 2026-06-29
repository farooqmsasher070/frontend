type SortDropdownProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function SortDropdown({
  value,
  onChange,
}: SortDropdownProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="rounded-xl border bg-white px-4 py-3 shadow-sm focus:border-red-600 focus:outline-none"
    >
      <option value="popular">Most Popular</option>

      <option value="priceLow">
        Price: Low to High
      </option>

      <option value="priceHigh">
        Price: High to Low
      </option>

      <option value="rating">
        Highest Rated
      </option>

      <option value="name">
        Name (A-Z)
      </option>
    </select>
  );
}