import { create } from "zustand";

import { addresses } from "../data/addresses";
import type { Address } from "../types/address";

interface AddressStore {
  items: Address[];

  add: (address: Address) => void;

  update: (address: Address) => void;

  remove: (id: number) => void;

  setDefault: (id: number) => void;
}

export const useAddressStore =
  create<AddressStore>((set) => ({
    items: addresses,

    add: (address) =>
      set((state) => ({
        items: [
          ...state.items.map((item) => ({
            ...item,
            isDefault: address.isDefault
              ? false
              : item.isDefault,
          })),
          {
            ...address,
            isDefault:
              address.isDefault ||
              state.items.length === 0,
          },
        ],
      })),

    update: (address) =>
      set((state) => ({
        items: state.items.map((item) => {
          if (item.id === address.id) {
            return address;
          }

          if (address.isDefault) {
            return {
              ...item,
              isDefault: false,
            };
          }

          return item;
        }),
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
