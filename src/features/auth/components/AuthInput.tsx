type Props = {
  label: string;
  type?: string;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
};

export default function AuthInput({
  label,
  type = "text",
  value,
  placeholder,
  onChange,
}: Props) {
  return (
    <div className="space-y-2">
      <label className="font-medium">
        {label}
      </label>

      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) =>
          onChange(e.target.value)
        }
        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-200"
      />
    </div>
  );
}