"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { toast } from "sonner";
import { useCartStore } from "@/lib/cart-store";
import { formatRupees } from "@/lib/utils";

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, increment, decrement, clearCart } = useCartStore();
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen ? (
        <>
          <motion.button
            aria-label="Close cart"
            className="fixed inset-0 z-40 bg-slate-950/45"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
          />
          <motion.aside
            className="fixed right-0 top-0 z-50 flex h-dvh w-full max-w-md flex-col bg-white shadow-2xl dark:bg-slate-950"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
          >
            <div className="flex items-center justify-between border-b border-slate-200 p-5 dark:border-slate-800">
              <div>
                <p className="text-sm font-semibold text-emerald-600">DormDeal Cart</p>
                <h2 className="text-xl font-bold text-slate-950 dark:text-white">Ready to reuse</h2>
              </div>
              <button
                aria-label="Close cart"
                className="rounded-full p-2 text-slate-500 transition hover:bg-slate-100 dark:hover:bg-slate-900"
                onClick={closeCart}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5">
              {items.length === 0 ? (
                <div className="grid h-full place-items-center text-center">
                  <div>
                    <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-2xl bg-emerald-50 text-emerald-600">
                      <ShoppingBag className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-950 dark:text-white">Your cart is empty</h3>
                    <p className="mt-2 text-sm text-slate-500">Add student deals and they will show up here.</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-900">
                      <div className="flex gap-3">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={88}
                          height={88}
                          className="h-22 w-22 rounded-xl object-cover"
                        />
                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <h4 className="line-clamp-2 font-semibold text-slate-950 dark:text-white">{item.name}</h4>
                              <p className="text-sm text-slate-500">{formatRupees(item.price)}</p>
                            </div>
                            <button
                              aria-label={`Remove ${item.name}`}
                              className="rounded-full p-1.5 text-slate-400 transition hover:bg-white hover:text-red-500 dark:hover:bg-slate-800"
                              onClick={() => removeItem(item.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                          <div className="mt-3 flex items-center justify-between">
                            <div className="flex items-center rounded-full bg-white p-1 shadow-sm dark:bg-slate-950">
                              <button aria-label="Decrease quantity" className="rounded-full p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800" onClick={() => decrement(item.id)}>
                                <Minus className="h-4 w-4" />
                              </button>
                              <span className="w-8 text-center text-sm font-bold">{item.quantity}</span>
                              <button aria-label="Increase quantity" className="rounded-full p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800" onClick={() => increment(item.id)}>
                                <Plus className="h-4 w-4" />
                              </button>
                            </div>
                            <p className="font-bold text-slate-950 dark:text-white">{formatRupees(item.price * item.quantity)}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="border-t border-slate-200 p-5 dark:border-slate-800">
              <div className="mb-4 flex items-center justify-between text-lg font-bold">
                <span>Total</span>
                <span>{formatRupees(total)}</span>
              </div>
              <button
                className="w-full rounded-2xl bg-slate-950 px-5 py-3 font-bold text-white transition hover:-translate-y-0.5 hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-emerald-500 dark:text-slate-950"
                disabled={items.length === 0}
                onClick={() => {
                  clearCart();
                  toast.success("Mock checkout complete. Campus circularity wins.");
                }}
              >
                Checkout
              </button>
            </div>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}
