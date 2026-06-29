import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartItem } from "../types/cart";

interface CartStore {
  items: CartItem[];

  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  clearCart: () => void;

  itemCount: () => number;
  subtotal: () => number;
  deliveryCharge: () => number;
  tax: () => number;
  discount: () => number;
  grandTotal: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (item) =>
        set((state) => {
          const existing = state.items.find(
            (i) => i.id === item.id
          );

          if (existing) {
            return {
              items: state.items.map((i) =>
                i.id === item.id
                  ? {
                      ...i,
                      quantity: i.quantity + 1,
                    }
                  : i
              ),
            };
          }

          return {
            items: [
              ...state.items,
              {
                ...item,
                quantity: 1,
              },
            ],
          };
        }),

      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter(
            (item) => item.id !== id
          ),
        })),

      increaseQuantity: (id) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                }
              : item
          ),
        })),

      decreaseQuantity: (id) =>
        set((state) => ({
          items: state.items
            .map((item) =>
              item.id === id
                ? {
                    ...item,
                    quantity: item.quantity - 1,
                  }
                : item
            )
            .filter((item) => item.quantity > 0),
        })),

      clearCart: () =>
        set({
          items: [],
        }),

      itemCount: () =>
        get().items.reduce(
          (sum, item) => sum + item.quantity,
          0
        ),

      subtotal: () =>
        get().items.reduce(
          (sum, item) =>
            sum + item.price * item.quantity,
          0
        ),

      deliveryCharge: () =>
        get().subtotal() >= 999 ? 0 : 49,

      tax: () =>
        Math.round(get().subtotal() * 0.05),

      discount: () => 0,

      grandTotal: () =>
        get().subtotal() +
        get().deliveryCharge() +
        get().tax() -
        get().discount(),
    }),
    {
      name: "cart-storage",
    }
  )
);