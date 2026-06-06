"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, BadgeCheck, Heart, Leaf, ShieldCheck, ShoppingCart, Star } from "lucide-react";
import { toast } from "sonner";
import { ProductCard } from "@/components/product-card";
import type { Product } from "@/lib/data";
import { products } from "@/lib/data";
import { useCartStore } from "@/lib/cart-store";
import { formatRupees } from "@/lib/utils";

export function ProductDetails({ product }: { product: Product }) {
  const [activeImage, setActiveImage] = useState(product.gallery[0] ?? product.image);
  const addItem = useCartStore((state) => state.addItem);
  const savings = product.originalPrice - product.price;
  const related = useMemo(
    () => products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 4),
    [product]
  );

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Link href="/browse" className="mb-8 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-600 shadow-sm transition hover:text-emerald-600 dark:bg-slate-950 dark:text-slate-300">
        <ArrowLeft className="h-4 w-4" />
        Back to deals
      </Link>

      <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-xl dark:border-slate-800 dark:bg-slate-950">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-slate-100">
              <Image src={activeImage} alt={product.name} fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </div>
          <div className="mt-4 grid grid-cols-4 gap-3">
            {[product.image, ...product.gallery].slice(0, 4).map((image) => (
              <button
                key={image}
                className={`relative aspect-square overflow-hidden rounded-2xl border bg-white p-1 transition ${activeImage === image ? "border-emerald-500 shadow-lg" : "border-slate-200 hover:border-slate-400 dark:border-slate-800"}`}
                onClick={() => setActiveImage(image)}
              >
                <Image src={image} alt={`${product.name} preview`} fill sizes="25vw" className="object-cover p-1" />
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl dark:border-slate-800 dark:bg-slate-950 sm:p-8" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-700">{product.category}</span>
            <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-black text-amber-700">{product.condition}</span>
          </div>
          <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl dark:text-white">{product.name}</h1>
          <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">{product.description}</p>

          <div className="mt-6 flex flex-wrap items-end gap-4">
            <div>
              <p className="text-slate-400 line-through">{formatRupees(product.originalPrice)}</p>
              <p className="text-5xl font-black text-slate-950 dark:text-white">{formatRupees(product.price)}</p>
            </div>
            <div className="rounded-2xl bg-emerald-50 px-4 py-3 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
              <p className="text-sm font-bold">You save</p>
              <p className="text-2xl font-black">{formatRupees(savings)}</p>
            </div>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-900">
              <Star className="mb-3 h-5 w-5 fill-amber-400 text-amber-400" />
              <p className="font-black">{product.rating}/5 Seller</p>
              <p className="text-sm text-slate-500">{product.seller}</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-900">
              <ShieldCheck className="mb-3 h-5 w-5 text-sky-500" />
              <p className="font-black">Condition checked</p>
              <p className="text-sm text-slate-500">{product.condition}</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-900">
              <Leaf className="mb-3 h-5 w-5 text-emerald-500" />
              <p className="font-black">{product.reusedKg}kg reuse</p>
              <p className="text-sm text-slate-500">Waste prevented</p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-4 font-black text-white transition hover:-translate-y-1 hover:bg-emerald-600 dark:bg-white dark:text-slate-950"
              onClick={() => {
                addItem(product);
                toast.success(`${product.name} added to cart`);
              }}
            >
              <ShoppingCart className="h-5 w-5" />
              Add to cart
            </button>
            <button
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-4 font-black text-slate-950 transition hover:-translate-y-1 hover:border-rose-200 hover:text-rose-500 dark:border-slate-800 dark:bg-slate-950 dark:text-white"
              onClick={() => toast.success(`${product.name} saved to wishlist`)}
            >
              <Heart className="h-5 w-5" />
              Wishlist
            </button>
          </div>

          <div className="mt-6 rounded-2xl bg-amber-50 p-4 text-sm leading-6 text-amber-900 dark:bg-amber-500/10 dark:text-amber-200">
            <BadgeCheck className="mr-2 inline h-4 w-4" />
            Mock listing only. Pickup, chat, and checkout are simulated for this hackathon MVP.
          </div>
        </motion.div>
      </section>

      <section className="py-16">
        <div className="mb-8">
          <p className="font-bold text-emerald-600">Related products</p>
          <h2 className="mt-2 text-3xl font-black text-slate-950 dark:text-white">More from {product.category}</h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {(related.length ? related : products.filter((item) => item.id !== product.id).slice(0, 4)).map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </main>
  );
}
