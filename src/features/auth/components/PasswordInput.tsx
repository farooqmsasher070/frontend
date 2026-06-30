import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

type Props = {
  label: string;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
};

export default function PasswordInput({
  label,
  value,
  placeholder,
  onChange,
}: Props) {
  const [showPassword, setShowPassword] =
    useState(false);

  return (
    <div className="space-y-2">
      <label className="font-medium">
        {label}
      </label>

      <div className="relative">
        <input
          type={
            showPassword ? "text" : "password"
          }
          value={value}
          placeholder={placeholder}
          onChange={(e) =>
            onChange(e.target.value)
          }
          className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-12 outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-200"
        />

        <button
          type="button"
          onClick={() =>
            setShowPassword(!showPassword)
          }
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
        >
          {showPassword ? (
            <EyeOff size={20} />
          ) : (
            <Eye size={20} />
          )}
        </button>
      </div>
    </div>
  );
}