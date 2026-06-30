import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function AuthCard({
  children,
}: Props) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-2xl">
      {children}
    </div>
  );
}