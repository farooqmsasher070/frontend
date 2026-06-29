import { create } from "zustand";

interface ShippingState {
  method: "standard" | "express";
  date: string;
  slot: string;

  setMethod: (method: "standard" | "express") => void;
  setDate: (date: string) => void;
  setSlot: (slot: string) => void;
}

export const useShippingStore = create<ShippingState>((set) => ({
  method: "standard",
  date: "Tomorrow",
  slot: "12 PM - 3 PM",

  setMethod: (method) => set({ method }),
  setDate: (date) => set({ date }),
  setSlot: (slot) => set({ slot }),
}));