import { create } from "zustand";

export type PaymentMethod =
  | "upi"
  | "card"
  | "netbanking"
  | "cod";

interface PaymentState {
  method: PaymentMethod;
  sameAsShipping: boolean;

  setMethod: (method: PaymentMethod) => void;
  toggleBilling: () => void;
}

export const usePaymentStore = create<PaymentState>((set) => ({
  method: "upi",

  sameAsShipping: true,

  setMethod: (method) => set({ method }),

  toggleBilling: () =>
    set((state) => ({
      sameAsShipping: !state.sameAsShipping,
    })),
}));