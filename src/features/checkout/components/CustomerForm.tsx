import { useCheckoutStore } from "../store/checkoutStore";

export default function CustomerForm() {
  const { fullName, email, phone, setField } =
    useCheckoutStore();

  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <h2 className="mb-6 text-2xl font-bold">
        Customer Details
      </h2>

      <div className="space-y-4">
        <input
          value={fullName}
          onChange={(e) =>
            setField("fullName", e.target.value)
          }
          placeholder="Full Name"
          className="w-full rounded-lg border p-3"
        />

        <input
          value={email}
          onChange={(e) =>
            setField("email", e.target.value)
          }
          placeholder="Email"
          className="w-full rounded-lg border p-3"
        />

        <input
          value={phone}
          onChange={(e) =>
            setField("phone", e.target.value)
          }
          placeholder="Phone Number"
          className="w-full rounded-lg border p-3"
        />
      </div>
    </div>
  );
}