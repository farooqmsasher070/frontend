import { Globe } from "lucide-react";

export default function SocialLogin() {
  return (
    <div className="space-y-4">

      <div className="flex items-center gap-4">
        <div className="h-px flex-1 bg-gray-300" />
        <span className="text-sm text-gray-500">
          OR
        </span>
        <div className="h-px flex-1 bg-gray-300" />
      </div>

      <button className="flex w-full items-center justify-center gap-3 rounded-xl border py-3 transition hover:bg-gray-50">
        <Globe size={20} />
        Continue with Google
      </button>

      <button className="flex w-full items-center justify-center gap-3 rounded-xl border py-3 transition hover:bg-gray-50">
        🍎 Continue with Apple
      </button>

    </div>
  );
}