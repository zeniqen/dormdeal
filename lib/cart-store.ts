"use client";

import { create } from "zustand";
import type { Product } from "@/lib/data";

export type CartItem = Product & { quantity: number };

type CartState = {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (product: Product) => void;
  removeItem: (id: string) => void;
  increment: (id: string) => void;
  decrement: (id: string) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartState>((set) => ({
  items: [],
  isOpen: false,
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  addItem: (product) =>
    set((state) => {
      const existing = state.items.find((item) => item.id === product.id);
      if (existing) {
        return {
          isOpen: true,
          items: state.items.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          )
        };
      }

      return { isOpen: true, items: [...state.items, { ...product, quantity: 1 }] };
    }),
  removeItem: (id) => set((state) => ({ items: state.items.filter((item) => item.id !== id) })),
  increment: (id) =>
    set((state) => ({
      items: state.items.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
    })),
  decrement: (id) =>
    set((state) => ({
      items: state.items
        .map((item) => (item.id === id ? { ...item, quantity: Math.max(0, item.quantity - 1) } : item))
        .filter((item) => item.quantity > 0)
    })),
  clearCart: () => set({ items: [] })
}));
