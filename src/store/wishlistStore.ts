import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface WishlistItem {
  id: number;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  weight: string;
  rating: number;
  reviews: number;
  discount: number;
}

interface WishlistStore {
  items: WishlistItem[];

  addItem: (item: WishlistItem) => void;

  removeItem: (id: number) => void;

  toggleItem: (item: WishlistItem) => void;

  clearWishlist: () => void;

  isFavourite: (id: number) => boolean;
}

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (item) => {
        const exists = get().items.some((i) => i.id === item.id);

        if (exists) return;

        set((state) => ({
          items: [...state.items, item],
        }));
      },

      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((i) => i.id !== id),
        })),

      toggleItem: (item) => {
        const exists = get().items.some((i) => i.id === item.id);

        if (exists) {
          set((state) => ({
            items: state.items.filter((i) => i.id !== item.id),
          }));
        } else {
          set((state) => ({
            items: [...state.items, item],
          }));
        }
      },

      clearWishlist: () => set({ items: [] }),

      isFavourite: (id) =>
        get().items.some((i) => i.id === id),
    }),
    {
      name: "wishlist-storage",
    }
  )
);