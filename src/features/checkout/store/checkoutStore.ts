import { create } from "zustand";

interface CheckoutState {
  fullName: string;
  email: string;
  phone: string;

  address: string;
  city: string;
  state: string;
  pinCode: string;

  setField: (
    field: keyof Omit<CheckoutState, "setField">,
    value: string
  ) => void;
}

export const useCheckoutStore =
  create<CheckoutState>((set) => ({
    fullName: "",
    email: "",
    phone: "",

    address: "",
    city: "",
    state: "",
    pinCode: "",

    setField: (field, value) =>
      set({
        [field]: value,
      }),
  }));