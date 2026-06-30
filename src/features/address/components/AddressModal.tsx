import { X } from "lucide-react";

import AddressForm from "./AddressForm";
import type { Address } from "../types/address";

type Props = {
  address?: Address;
  onClose: () => void;
  onSave: (address: Address) => void;
};

export default function AddressModal({
  address,
  onClose,
  onSave,
}: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-8">
      <div className="max-h-full w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            {address ? "Edit Address" : "Add Address"}
          </h2>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close address form"
            className="rounded-full p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
          >
            <X size={22} />
          </button>
        </div>

        <AddressForm
          initialValues={address}
          onCancel={onClose}
          onSave={onSave}
        />
      </div>
    </div>
  );
}
