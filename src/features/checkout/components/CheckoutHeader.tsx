import { ShieldCheck } from "lucide-react";

export default function CheckoutHeader() {
  return (
    <div className="mb-10 flex items-center justify-between">

      <div>
        <h1 className="text-4xl font-bold">
          Checkout
        </h1>

        <p className="mt-2 text-gray-500">
          Complete your order securely.
        </p>
      </div>

      <div className="flex items-center gap-2 rounded-full bg-green-100 px-5 py-2 font-semibold text-green-700">
        <ShieldCheck size={18} />
        Secure Checkout
      </div>

    </div>
  );
}