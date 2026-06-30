import { create } from "zustand";

import { addresses } from "../data/addresses";
import type { Address } from "../types/address";

interface AddressStore {
  items: Address[];

  add: (address: Address) => void;

  remove: (id: number) => void;

  setDefault: (id: number) => void;
}

export const useAddressStore =
  create<AddressStore>((set) => ({
    items: addresses,

    add: (address) =>
      set((state) => ({
        items: [...state.items, address],
      })),

    remove: (id) =>
      set((state) => ({
        items: state.items.filter(
          (a) => a.id !== id
        ),
      })),

    setDefault: (id) =>
      set((state) => ({
        items: state.items.map((a) => ({
          ...a,
          isDefault: a.id === id,
        })),
      })),
  }));