import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
};

export default function Button({
  children,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="rounded-xl bg-red-700 px-6 py-3 font-semibold text-white transition hover:bg-red-800"
    >
      {children}
    </button>
  );
}