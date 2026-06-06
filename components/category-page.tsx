"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Backpack, BookOpen, Calculator, LampDesk, Leaf, NotebookPen, ShoppingBag, TabletSmartphone } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import type { Product } from "@/lib/data";

const categoryIcons = {
  Accessories: Backpack,
  Books: BookOpen,
  Calculators: Calculator,
  Electronics: TabletSmartphone,
  "Hostel Essentials": LampDesk,
  Notes: NotebookPen
};

type CategoryName = keyof typeof categoryIcons;

export function CategoryPage({ categoryName, products }: { categoryName: string; products: Product[] }) {
  const totalSavings = products.reduce((sum, product) => sum + product.originalPrice - product.price, 0);
  const totalWaste = products.reduce((sum, product) => sum + product.reusedKg, 0);
  const Icon = categoryIcons[categoryName as CategoryName] ?? ShoppingBag;

  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <Link href="/browse" className="mb-8 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-600 shadow-sm transition hover:text-emerald-600 dark:bg-slate-950 dark:text-slate-300">
          <ArrowLeft className="h-4 w-4" />
          Back to browse
        </Link>

        <motion.div
          className="rounded-[2rem] bg-slate-950 p-6 text-white shadow-2xl sm:p-10"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-black text-emerald-300">
                <Icon className="h-4 w-4" />
                {categoryName}
              </div>
              <h1 className="mt-5 max-w-3xl text-4xl font-black tracking-tight sm:text-6xl">Shop used {categoryName.toLowerCase()}</h1>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                Curated mock DormDeal listings for students who want practical campus essentials without paying full retail.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              <div className="rounded-2xl bg-white/10 p-4">
                <ShoppingBag className="mb-3 h-5 w-5 text-amber-300" />
                <p className="text-2xl font-black">{products.length}</p>
                <p className="text-sm text-slate-300">available listings</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-2xl font-black">₹{totalSavings.toLocaleString("en-IN")}</p>
                <p className="text-sm text-slate-300">student savings</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-4">
                <Leaf className="mb-3 h-5 w-5 text-emerald-300" />
                <p className="text-2xl font-black">{totalWaste.toFixed(1)}kg</p>
                <p className="text-sm text-slate-300">reuse impact</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
