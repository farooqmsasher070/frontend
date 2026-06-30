import type { ReactNode } from "react";

type Props = {
  title: string;
  subtitle: string;
  children: ReactNode;
};

export default function AuthLayout({
  title,
  subtitle,
  children,
}: Props) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-red-50 via-white to-red-100 px-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="text-5xl">🥩</div>

          <h1 className="mt-4 text-4xl font-bold text-red-700">
            FreshMeat
          </h1>

          <h2 className="mt-8 text-3xl font-bold">
            {title}
          </h2>

          <p className="mt-2 text-gray-500">
            {subtitle}
          </p>
        </div>

        {children}
      </div>
    </div>
  );
}