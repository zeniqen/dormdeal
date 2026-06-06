"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BadgeIndianRupee, GraduationCap, Leaf, Recycle, ShieldCheck, Users } from "lucide-react";
import { AnimatedCounter } from "@/components/animated-counter";

const values = [
  { title: "Student-first savings", body: "DormDeal is built around student budgets, semester needs, and quick local exchange.", icon: BadgeIndianRupee },
  { title: "Circular campus economy", body: "Useful items should move from one student to the next instead of collecting dust.", icon: Recycle },
  { title: "Trust through proximity", body: "Buying from nearby students makes pickup easier and creates a stronger campus community.", icon: ShieldCheck }
];

export function AboutPage() {
  return (
    <main>
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:px-8">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-black text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
            <GraduationCap className="h-4 w-4" />
            Built for students
          </div>
          <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-6xl dark:text-white">A smarter way for campuses to reuse what students already own</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            DormDeal helps students buy affordable essentials, sell items they no longer need, and reduce waste through a circular marketplace designed for campus life.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/browse" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-6 py-4 font-black text-white transition hover:-translate-y-1 hover:bg-emerald-600 dark:bg-white dark:text-slate-950">
              Browse Deals
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link href="/sell" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-4 font-black text-slate-950 transition hover:-translate-y-1 hover:border-emerald-300 dark:border-slate-800 dark:bg-slate-950 dark:text-white">
              Sell an Item
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="rounded-[2rem] bg-slate-950 p-6 text-white shadow-2xl"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          <div className="grid gap-4">
            {[
              ["Student Savings", 250000, "₹", "+"],
              ["Items Reused", 1500, "", "+"],
              ["Waste Prevented", 850, "", "kg"]
            ].map(([label, value, prefix, suffix]) => (
              <div key={String(label)} className="rounded-2xl bg-white/10 p-5">
                <p className="text-sm font-bold text-slate-300">{String(label)}</p>
                <p className="mt-1 text-4xl font-black text-emerald-300">
                  <AnimatedCounter value={Number(value)} prefix={String(prefix)} suffix={String(suffix)} compact />
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="bg-white/70 py-16 dark:bg-slate-950/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-3xl">
            <p className="font-bold text-emerald-600">Our mission</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl dark:text-white">Save money while wasting less</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
              DormDeal is not trying to be a generic shopping site. It is a campus utility for reuse: fast enough for busy students, trustworthy enough for local exchange, and meaningful enough to make every purchase feel like progress.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {values.map((value) => (
              <motion.div key={value.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <value.icon className="mb-5 h-8 w-8 text-emerald-500" />
                <h3 className="text-xl font-black text-slate-950 dark:text-white">{value.title}</h3>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{value.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="rounded-[2rem] bg-emerald-500 p-8 text-slate-950 shadow-xl">
            <Leaf className="mb-5 h-10 w-10" />
            <h2 className="text-3xl font-black">Why reuse matters</h2>
            <p className="mt-4 leading-8 font-medium">
              Textbooks, electronics, lamps, backpacks, and notes often have value long after one student is done with them. DormDeal keeps that value moving.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["For buyers", "Lower prices on useful products they need right now."],
              ["For sellers", "A simple way to recover money from unused items."],
              ["For campuses", "Less waste during semester transitions and move-outs."],
              ["For communities", "More student-to-student support and local trust."]
            ].map(([title, body]) => (
              <div key={title} className="rounded-2xl bg-white p-6 shadow-sm dark:bg-slate-950">
                <Users className="mb-4 h-6 w-6 text-amber-500" />
                <h3 className="font-black text-slate-950 dark:text-white">{title}</h3>
                <p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
