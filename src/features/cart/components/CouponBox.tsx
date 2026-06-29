import { useState } from "react";
import toast from "react-hot-toast";

export default function CouponBox() {
  const [coupon, setCoupon] = useState("");

  function applyCoupon() {
    toast("Coupon functionality coming soon!");
  }

  return (
    <div className="border-t p-5">
      <div className="flex gap-2">
        <input
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          placeholder="Coupon Code"
          className="flex-1 rounded-lg border px-3 py-2 outline-none"
        />

        <button
          onClick={applyCoupon}
          className="rounded-lg bg-red-700 px-4 text-white hover:bg-red-800"
        >
          Apply
        </button>
      </div>
    </div>
  );
}