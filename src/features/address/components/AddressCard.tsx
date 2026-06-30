import {
  Home,
  Building2,
  MapPin,
  Star,
  Pencil,
  Trash2,
} from "lucide-react";

import type { Address } from "../types/address";

type Props = {
  address: Address;
};

export default function AddressCard({
  address,
}: Props) {
  const isHome =
    address.label.toLowerCase() === "home";

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">

      {/* Header */}
      <div className="mb-6 flex items-start justify-between">

        <div className="flex items-center gap-3">

          <div className="rounded-full bg-red-100 p-3">
            {isHome ? (
              <Home
                size={22}
                className="text-red-700"
              />
            ) : (
              <Building2
                size={22}
                className="text-red-700"
              />
            )}
          </div>

          <div>
            <h2 className="text-xl font-bold">
              {address.label}
            </h2>

            <p className="text-sm text-gray-500">
              Delivery Address
            </p>
          </div>

        </div>

        {address.isDefault && (
          <span className="flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
            <Star size={14} />
            Default
          </span>
        )}

      </div>

      {/* Address */}
      <div className="space-y-2">

        <p className="font-semibold">
          {address.fullName}
        </p>

        <div className="flex gap-2 text-gray-600">

          <MapPin
            size={18}
            className="mt-1 shrink-0"
          />

          <div>

            <p>{address.addressLine1}</p>

            {address.addressLine2 && (
              <p>{address.addressLine2}</p>
            )}

            <p>
              {address.city},{" "}
              {address.state}
            </p>

            <p>{address.postalCode}</p>

          </div>

        </div>

        <p className="pt-2 text-sm text-gray-500">
          📞 {address.phone}
        </p>

      </div>

      {/* Footer */}
      <div className="mt-6 flex gap-3 border-t pt-5">

        <button
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-300 py-2 transition hover:bg-gray-100"
        >
          <Pencil size={18} />
          Edit
        </button>

        <button
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-red-600 py-2 text-white transition hover:bg-red-700"
        >
          <Trash2 size={18} />
          Delete
        </button>

      </div>

    </div>
  );
}