"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Filter, Leaf, Search, SlidersHorizontal, Sparkles } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { categories, products } from "@/lib/data";

const conditions = ["All", "Like New", "Good", "Open Box", "Fair"];

export function BrowsePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchParamQuery = searchParams.get("q") ?? "";
  const [category, setCategory] = useState("All");
  const [condition, setCondition] = useState("All");
  const activeQuery = searchParamQuery;

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesQuery = `${product.name} ${product.category} ${product.description}`
        .toLowerCase()
        .includes(activeQuery.toLowerCase());
      const matchesCategory = category === "All" || product.category === category;
      const matchesCondition = condition === "All" || product.condition === condition;

      return matchesQuery && matchesCategory && matchesCondition;
    });
  }, [activeQuery, category, condition]);

  function submitSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextQuery = activeQuery.trim();
    router.push(nextQuery ? `/browse?q=${encodeURIComponent(nextQuery)}` : "/browse");
  }

  function updateSearch(value: string) {
    router.replace(value.trim() ? `/browse?q=${encodeURIComponent(value)}` : "/browse");
  }

  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <motion.div
          className="overflow-hidden rounded-[2rem] bg-slate-950 p-6 text-white shadow-2xl sm:p-10"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-black text-emerald-300">
                <Sparkles className="h-4 w-4" />
                Student deals near campus
              </div>
              <h1 className="mt-5 max-w-3xl text-4xl font-black tracking-tight sm:text-6xl">Browse affordable campus essentials</h1>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                Search textbooks, calculators, gadgets, notes, hostel gear, and accessories from fellow students.
              </p>
            </div>
            <div className="grid gap-3 rounded-2xl bg-white/10 p-4">
              <form className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-slate-950" onSubmit={submitSearch}>
                <Search className="h-5 w-5 text-slate-400" />
                <input
                  value={activeQuery}
                  onChange={(event) => updateSearch(event.target.value)}
                  className="w-full bg-transparent text-sm font-semibold outline-none placeholder:text-slate-400"
                  placeholder="Search calculator, lamp, notes..."
                />
              </form>
              <div className="grid grid-cols-2 gap-3 text-sm font-black">
                <div className="rounded-2xl bg-emerald-500 p-4 text-slate-950">
                  <p className="text-2xl">{filteredProducts.length}</p>
                  <p>matching deals</p>
                </div>
                <div className="rounded-2xl bg-amber-400 p-4 text-slate-950">
                  <p className="text-2xl">₹18K+</p>
                  <p>mock savings</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <div className="mb-4 flex items-center gap-2 font-black text-slate-950 dark:text-white">
            <SlidersHorizontal className="h-5 w-5 text-emerald-500" />
            Filters
          </div>
          <div className="grid gap-4 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <p className="mb-2 text-xs font-black uppercase text-slate-400">Category</p>
              <div className="flex gap-2 overflow-x-auto pb-1">
                {["All", ...categories.map((item) => item.name)].map((item) => (
                  <button
                    key={item}
                    className={`shrink-0 rounded-full px-4 py-2 text-sm font-bold transition ${
                      category === item
                        ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-300"
                    }`}
                    onClick={() => setCategory(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-2 text-xs font-black uppercase text-slate-400">Condition</p>
              <div className="flex gap-2 overflow-x-auto pb-1">
                {conditions.map((item) => (
                  <button
                    key={item}
                    className={`shrink-0 rounded-full px-4 py-2 text-sm font-bold transition ${
                      condition === item
                        ? "bg-emerald-500 text-slate-950"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-300"
                    }`}
                    onClick={() => setCondition(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="grid min-h-80 place-items-center rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center dark:border-slate-800 dark:bg-slate-950">
            <div>
              <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-2xl bg-emerald-50 text-emerald-600">
                <Filter className="h-8 w-8" />
              </div>
              <h2 className="text-2xl font-black text-slate-950 dark:text-white">No matching deals yet</h2>
              <p className="mt-2 text-slate-500">Try a different keyword, category, or condition.</p>
            </div>
          </div>
        )}

        <div className="mt-10 rounded-2xl bg-emerald-50 p-5 text-emerald-900 dark:bg-emerald-500/10 dark:text-emerald-200">
          <Leaf className="mr-2 inline h-5 w-5" />
          Every reused listing helps students save money and keeps useful items circulating on campus.
        </div>
      </section>
    </main>
  );
}
