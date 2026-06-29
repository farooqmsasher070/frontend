import { useCheckoutStore } from "../store/checkoutStore";

export default function AddressForm() {
  const store = useCheckoutStore();

  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <h2 className="mb-6 text-2xl font-bold">
        Shipping Address
      </h2>

      <div className="space-y-4">
        <input
          placeholder="Address"
          value={store.address}
          onChange={(e) =>
            store.setField("address", e.target.value)
          }
          className="w-full rounded-lg border p-3"
        />

        <input
          placeholder="City"
          value={store.city}
          onChange={(e) =>
            store.setField("city", e.target.value)
          }
          className="w-full rounded-lg border p-3"
        />

        <input
          placeholder="State"
          value={store.state}
          onChange={(e) =>
            store.setField("state", e.target.value)
          }
          className="w-full rounded-lg border p-3"
        />

        <input
          placeholder="PIN Code"
          value={store.pinCode}
          onChange={(e) =>
            store.setField("pinCode", e.target.value)
          }
          className="w-full rounded-lg border p-3"
        />
      </div>
    </div>
  );
}