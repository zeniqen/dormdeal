"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Leaf, ShoppingCart, Sparkles } from "lucide-react";
import { toast } from "sonner";
import type { Product } from "@/lib/data";
import { useCartStore } from "@/lib/cart-store";
import { formatRupees } from "@/lib/utils";

export function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore((state) => state.addItem);
  const saved = product.originalPrice - product.price;

  return (
    <motion.article
      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45 }}
    >
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
          <Image src={product.image} alt={product.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" />
          <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-slate-900 shadow-sm">{product.condition}</div>
          <button
            aria-label={`Wishlist ${product.name}`}
            className="absolute right-3 top-3 rounded-full bg-white/90 p-2 text-slate-700 shadow-sm transition hover:bg-rose-50 hover:text-rose-500"
            onClick={(event) => {
              event.preventDefault();
              toast.success(`${product.name} added to wishlist`);
            }}
          >
            <Heart className="h-4 w-4" />
          </button>
        </div>
      </Link>
      <div className="p-4">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700">{product.category}</span>
          <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-bold text-amber-700">
            <Sparkles className="h-3.5 w-3.5" />
            Save {formatRupees(saved)}
          </span>
        </div>
        <Link href={`/products/${product.slug}`}>
          <h3 className="line-clamp-2 min-h-12 text-lg font-bold text-slate-950 transition hover:text-emerald-600 dark:text-white">{product.name}</h3>
        </Link>
        <div className="mt-3 flex items-end justify-between">
          <div>
            <p className="text-sm text-slate-400 line-through">{formatRupees(product.originalPrice)}</p>
            <p className="text-2xl font-black text-slate-950 dark:text-white">{formatRupees(product.price)}</p>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-700 dark:bg-slate-900 dark:text-slate-200">
            <Leaf className="h-3.5 w-3.5 text-emerald-500" />
            {product.reusedKg}kg saved
          </span>
        </div>
        <button
          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-4 py-3 font-bold text-white transition hover:bg-emerald-600 dark:bg-white dark:text-slate-950"
          onClick={() => {
            addItem(product);
            toast.success(`${product.name} added to cart`);
          }}
        >
          <ShoppingCart className="h-4 w-4" />
          Add to cart
        </button>
      </div>
    </motion.article>
  );
}
