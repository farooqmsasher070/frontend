import { useState, type FormEvent } from "react";
import type { Address } from "../types/address";

type Props = {
  initialValues?: Address;
  onSave: (address: Address) => void;
  onCancel: () => void;
};

export default function AddressForm({
  initialValues,
  onSave,
  onCancel,
}: Props) {
  const [form, setForm] = useState<Address>(
    initialValues ?? {
      id: Date.now(),
      label: "Home",
      fullName: "",
      phone: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      postalCode: "",
      isDefault: false,
    }
  );

  const update = (
    key: keyof Address,
    value: string | boolean
  ) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <div>
        <label className="mb-1 block font-medium">
          Label
        </label>

        <select
          value={form.label}
          onChange={(e) =>
            update("label", e.target.value)
          }
          className="w-full rounded-xl border p-3"
        >
          <option>Home</option>
          <option>Office</option>
          <option>Other</option>
        </select>
      </div>

      <input
        className="w-full rounded-xl border p-3"
        placeholder="Full Name"
        required
        value={form.fullName}
        onChange={(e) =>
          update("fullName", e.target.value)
        }
      />

      <input
        className="w-full rounded-xl border p-3"
        placeholder="Phone Number"
        required
        value={form.phone}
        onChange={(e) =>
          update("phone", e.target.value)
        }
      />

      <input
        className="w-full rounded-xl border p-3"
        placeholder="Address Line 1"
        required
        value={form.addressLine1}
        onChange={(e) =>
          update(
            "addressLine1",
            e.target.value
          )
        }
      />

      <input
        className="w-full rounded-xl border p-3"
        placeholder="Address Line 2"
        value={form.addressLine2}
        onChange={(e) =>
          update(
            "addressLine2",
            e.target.value
          )
        }
      />

      <div className="grid grid-cols-2 gap-4">
        <input
          className="rounded-xl border p-3"
          placeholder="City"
          required
          value={form.city}
          onChange={(e) =>
            update("city", e.target.value)
          }
        />

        <input
          className="rounded-xl border p-3"
          placeholder="State"
          required
          value={form.state}
          onChange={(e) =>
            update("state", e.target.value)
          }
        />
      </div>

      <input
        className="w-full rounded-xl border p-3"
        placeholder="Postal Code"
        required
        value={form.postalCode}
        onChange={(e) =>
          update(
            "postalCode",
            e.target.value
          )
        }
      />

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={form.isDefault}
          onChange={(e) =>
            update(
              "isDefault",
              e.target.checked
            )
          }
        />

        Set as default address
      </label>

      <div className="flex justify-end gap-3 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-xl border px-5 py-2"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="rounded-xl bg-red-700 px-5 py-2 text-white"
        >
          Save Address
        </button>
      </div>
    </form>
  );
}
