type Props = {
  value: string;
  onChange: (value: string) => void;
};

const categories = [
  "All",
  "Chicken",
  "Mutton",
  "Fish",
  "Seafood",
  "Eggs",
];

export default function CategoryFilter({
  value,
  onChange,
}: Props) {
  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">
      <h2 className="mb-5 text-xl font-bold">
        Categories
      </h2>

      <div className="space-y-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onChange(category)}
            className={`block w-full rounded-lg px-3 py-2 text-left transition ${
              value === category
                ? "bg-red-600 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}