"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BadgeIndianRupee, Check, CircleDollarSign, GraduationCap, Leaf, Recycle, ShieldCheck, ShoppingBag, Sparkles, Users } from "lucide-react";
import { AiListingGenerator } from "@/components/ai-listing-generator";
import { AnimatedCounter } from "@/components/animated-counter";
import { ProductCard } from "@/components/product-card";
import { categories, products } from "@/lib/data";

const stats = [
  { label: "Listings", value: 1200, suffix: "+" },
  { label: "Saved", value: 5, prefix: "₹", suffix: "L+" },
  { label: "Students", value: 500, suffix: "+" },
  { label: "Categories", value: 20, suffix: "+" }
];

const whyCards = [
  { title: "Save Money", body: "Find quality products at student-friendly prices.", icon: CircleDollarSign, color: "text-emerald-600 bg-emerald-50" },
  { title: "Reduce Waste", body: "Give useful items a second life.", icon: Recycle, color: "text-sky-600 bg-sky-50" },
  { title: "Support Students", body: "Buy directly from fellow students.", icon: Users, color: "text-amber-600 bg-amber-50" }
];

function SkeletonGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <div className="aspect-[4/3] animate-pulse rounded-2xl bg-slate-100 dark:bg-slate-900" />
          <div className="mt-4 h-4 w-1/3 animate-pulse rounded bg-slate-100 dark:bg-slate-900" />
          <div className="mt-3 h-5 w-4/5 animate-pulse rounded bg-slate-100 dark:bg-slate-900" />
          <div className="mt-6 h-10 w-full animate-pulse rounded-2xl bg-slate-100 dark:bg-slate-900" />
        </div>
      ))}
    </div>
  );
}

export function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = window.setTimeout(() => setLoading(false), 650);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <main>
      <section className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-black text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-300">
            <Leaf className="h-4 w-4" />
            Buy Used. Save More. Waste Less.
          </div>
          <h1 className="mt-6 max-w-4xl text-5xl font-black tracking-tight text-slate-950 sm:text-6xl lg:text-7xl dark:text-white">
            Buy smarter. Sell faster. Save more.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl dark:text-slate-300">
            Find affordable textbooks, gadgets, and student essentials from people around you.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="#products" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-6 py-4 font-black text-white shadow-xl shadow-slate-900/10 transition hover:-translate-y-1 hover:bg-emerald-600 dark:bg-white dark:text-slate-950">
              Browse Deals
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link href="#sell" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-4 font-black text-slate-950 shadow-sm transition hover:-translate-y-1 hover:border-emerald-300 dark:border-slate-800 dark:bg-slate-950 dark:text-white">
              Sell an Item
              <Sparkles className="h-5 w-5 text-amber-500" />
            </Link>
          </div>
        </motion.div>

        <motion.div className="relative" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15, duration: 0.7 }}>
          <div className="absolute -left-4 top-8 z-10 rounded-2xl bg-white p-4 shadow-xl dark:bg-slate-950">
            <p className="text-xs font-bold text-slate-500">Average saved</p>
            <p className="text-2xl font-black text-emerald-600">₹1,240</p>
          </div>
          <div className="absolute -right-2 bottom-10 z-10 rounded-2xl bg-slate-950 p-4 text-white shadow-xl">
            <p className="text-xs font-bold text-slate-300">Waste prevented</p>
            <p className="text-2xl font-black text-amber-300">850kg</p>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-white bg-white p-3 shadow-2xl dark:border-slate-800 dark:bg-slate-950">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1300&q=80"
                alt="Students using DormDeal on campus"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 to-transparent p-6 text-white">
                <div className="grid grid-cols-3 gap-3">
                  {["Books", "Gadgets", "Notes"].map((label) => (
                    <div key={label} className="rounded-2xl bg-white/15 p-3 backdrop-blur">
                      <p className="text-sm font-black">{label}</p>
                      <p className="text-xs text-slate-200">near you</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <div className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:grid-cols-2 lg:grid-cols-4 dark:border-slate-800 dark:bg-slate-950">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-slate-50 p-5 text-center dark:bg-slate-900">
              <p className="text-3xl font-black text-slate-950 dark:text-white">
                <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </p>
              <p className="mt-1 text-sm font-bold text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="categories" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-bold text-emerald-600">Shop by need</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl dark:text-white">Campus categories</h2>
          </div>
          <p className="max-w-xl text-slate-600 dark:text-slate-300">Everything students buy once, use carefully, and pass on to the next batch.</p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <motion.div key={category.name} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950" whileHover={{ y: -4 }}>
              <div className={`mb-5 grid h-14 w-14 place-items-center rounded-2xl ${category.tone}`}>
                <category.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-black text-slate-950 dark:text-white">{category.name}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">Verified mock listings, quick pickup, and prices designed for student budgets.</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="about" className="bg-white/70 py-16 dark:bg-slate-950/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {whyCards.map((card) => (
              <motion.div key={card.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className={`mb-5 grid h-14 w-14 place-items-center rounded-2xl ${card.color}`}>
                  <card.icon className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-black text-slate-950 dark:text-white">{card.title}</h3>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{card.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-bold text-emerald-600">Featured products</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl dark:text-white">Deals worth grabbing</h2>
          </div>
          <div className="inline-flex rounded-full bg-slate-100 p-1 dark:bg-slate-900">
            {["All", "Books", "Electronics"].map((item) => (
              <button key={item} className="rounded-full px-4 py-2 text-sm font-bold text-slate-600 first:bg-white first:text-slate-950 first:shadow-sm dark:text-slate-300 dark:first:bg-slate-950 dark:first:text-white">
                {item}
              </button>
            ))}
          </div>
        </div>
        {loading ? <SkeletonGrid /> : <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{products.map((product) => <ProductCard key={product.id} product={product} />)}</div>}
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-slate-950 p-6 text-white shadow-2xl sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="font-bold text-emerald-300">Save Money. Reduce Waste.</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">Sustainability impact dashboard</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["₹", 250000, "+", "Student Savings", BadgeIndianRupee],
                ["", 1500, "+", "Items Reused", Recycle],
                ["", 850, "kg", "Waste Prevented", Leaf]
              ].map(([prefix, value, suffix, label, Icon]) => (
                <div key={String(label)} className="rounded-2xl bg-white/10 p-5">
                  {/* @ts-expect-error icon tuple keeps this section compact */}
                  <Icon className="mb-4 h-6 w-6 text-amber-300" />
                  <p className="text-2xl font-black">
                    <AnimatedCounter value={Number(value)} prefix={String(prefix)} suffix={String(suffix)} compact />
                  </p>
                  <p className="mt-1 text-sm text-slate-300">{String(label)}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-5 text-slate-950">
              <h3 className="font-black">Buying New</h3>
              {["Higher Cost", "More Waste"].map((item) => (
                <p key={item} className="mt-3 flex items-center gap-2 text-slate-600">
                  <XIcon />
                  {item}
                </p>
              ))}
            </div>
            <div className="rounded-2xl bg-emerald-500 p-5 text-slate-950">
              <h3 className="font-black">Buying on DormDeal</h3>
              {["Lower Cost", "Sustainable", "Community Driven"].map((item) => (
                <p key={item} className="mt-3 flex items-center gap-2 font-semibold">
                  <Check className="h-5 w-5" />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AiListingGenerator />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-white p-8 text-center shadow-xl dark:bg-slate-950 sm:p-14">
          <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-2xl bg-emerald-50 text-emerald-600">
            <GraduationCap className="h-8 w-8" />
          </div>
          <h2 className="mx-auto max-w-3xl text-3xl font-black tracking-tight text-slate-950 sm:text-5xl dark:text-white">Every Purchase Makes Campus More Sustainable</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">Help build a circular student economy where valuable items find a second life.</p>
          <Link href="#products" className="mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-6 py-4 font-black text-slate-950 transition hover:-translate-y-1 hover:bg-amber-400">
            Start Saving Today
            <ShoppingBag className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}

function XIcon() {
  return <ShieldCheck className="h-5 w-5 text-amber-500" />;
}
