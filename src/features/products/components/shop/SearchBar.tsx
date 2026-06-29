import { Search, X } from "lucide-react";
import type { KeyboardEvent } from "react";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({
  value,
  onChange,
}: SearchBarProps) {
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  return (
    <div className="relative w-full max-w-lg">
      {/* Search Icon */}
      <Search
        size={20}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
      />

      {/* Input */}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search Chicken, Mutton, Fish..."
        className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-12 pr-12 text-gray-800 shadow-sm outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-200"
      />

      {/* Clear Button */}
      {value.length > 0 && (
        <button
          type="button"
          onClick={() => onChange("")}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-600"
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
}