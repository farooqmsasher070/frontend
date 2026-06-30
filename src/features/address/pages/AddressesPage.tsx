import { useState } from "react";
import { MapPin, Plus } from "lucide-react";

import AddressCard from "../components/AddressCard";
import AddressModal from "../components/AddressModal";

import { useAddresses } from "../hooks/useAddresses";
import { useAddressStore } from "../store/addressStore";
import type { Address } from "../types/address";

export default function AddressesPage() {
  const { items } = useAddresses();

  const add = useAddressStore((state) => state.add);
  const update = useAddressStore((state) => state.update);
  const remove = useAddressStore((state) => state.remove);
  const setDefault = useAddressStore(
    (state) => state.setDefault
  );
  const [open, setOpen] = useState(false);

  const [selectedAddress, setSelectedAddress] =
    useState<Address | undefined>();

  const handleClose = () => {
    setOpen(false);
    setSelectedAddress(undefined);
  };

  const handleEdit = (address: Address) => {
    setSelectedAddress(address);
    setOpen(true);
  };

  const handleDelete = (id: number) => {
    const shouldDelete = window.confirm(
      "Delete this address?"
    );

    if (shouldDelete) {
      remove(id);
    }
  };

  const handleSave = (address: Address) => {
    if (selectedAddress) {
      update(address);
    } else {
      add(address);
    }

    handleClose();
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 py-10">

        {/* Header */}
        <div className="mb-10 flex items-center justify-between">

          <div>
            <div className="flex items-center gap-3">

              <MapPin
                size={34}
                className="text-red-700"
              />

              <h1 className="text-4xl font-bold">
                Saved Addresses
              </h1>

            </div>

            <p className="mt-2 text-gray-600">
              Manage your delivery addresses.
            </p>
          </div>

          <button
            onClick={() => {
              setSelectedAddress(undefined);
              setOpen(true);
            }}
            className="flex items-center gap-2 rounded-xl bg-red-700 px-5 py-3 font-semibold text-white transition hover:bg-red-800"
          >
            <Plus size={20} />
            Add Address
          </button>

        </div>

        {/* Empty State */}

        {items.length === 0 ? (
          <div className="rounded-2xl bg-white p-16 text-center shadow">

            <MapPin
              size={60}
              className="mx-auto mb-6 text-gray-300"
            />

            <h2 className="text-2xl font-bold">
              No Addresses Found
            </h2>

            <p className="mt-3 text-gray-500">
              Add your first delivery address.
            </p>

          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">

            {items.map((address) => (
              <AddressCard
                key={address.id}
                address={address}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onSetDefault={setDefault}
              />
            ))}

          </div>
        )}

        {/* Address Modal */}

        {open && (
          <AddressModal
            address={selectedAddress}
            onClose={handleClose}
            onSave={handleSave}
          />
        )}

      </div>
    </div>
  );
}
