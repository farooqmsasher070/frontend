import { usePaymentStore } from "../store/paymentStore";

export default function BillingAddress() {
  const {
    sameAsShipping,
    toggleBilling,
  } = usePaymentStore();

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-lg">
      <h2 className="mb-6 text-2xl font-bold">
        Billing Address
      </h2>

      <label className="flex cursor-pointer items-center gap-3">
        <input
          type="checkbox"
          checked={sameAsShipping}
          onChange={toggleBilling}
          className="h-5 w-5"
        />

        <span className="text-lg">
          Same as Shipping Address
        </span>
      </label>
    </div>
  );
}