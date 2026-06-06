"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Camera, CheckCircle2, IndianRupee, Leaf, ListChecks, MapPin, PackagePlus, Send, ShieldCheck, type LucideIcon } from "lucide-react";
import { toast } from "sonner";
import { AiListingGenerator } from "@/components/ai-listing-generator";
import { categories } from "@/lib/data";

const steps = [
  { title: "Upload a photo", body: "Start with one clear image of your item.", icon: Camera },
  { title: "Generate listing", body: "Use AI to draft title, price, and impact.", icon: ListChecks },
  { title: "Meet on campus", body: "Coordinate pickup with another student.", icon: MapPin }
];

const sellerBenefits: Array<{
  title: string;
  body: string;
  icon: LucideIcon;
}> = [
  { title: "Fair pricing", body: "Suggested prices help students keep deals affordable.", icon: IndianRupee },
  { title: "Safer exchange", body: "Campus pickup keeps the marketplace local and student-first.", icon: ShieldCheck },
  { title: "Lower waste", body: "Every sale gives useful items another semester of life.", icon: Leaf }
];

export function SellPage() {
  const [submitted, setSubmitted] = useState(false);

  function submitListing(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    toast.success("Mock listing submitted for review");
  }

  return (
    <main>
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-sm font-black text-amber-700 dark:bg-amber-500/10 dark:text-amber-300">
            <PackagePlus className="h-4 w-4" />
            Sell smarter
          </div>
          <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-6xl dark:text-white">Turn unused campus gear into cash</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            List textbooks, electronics, notes, and hostel essentials in minutes. DormDeal helps you price fairly and tell the sustainability story.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {steps.map((step) => (
              <div key={step.title} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                <step.icon className="mb-3 h-6 w-6 text-emerald-500" />
                <h3 className="font-black text-slate-950 dark:text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{step.body}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.form
          onSubmit={submitListing}
          className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-xl dark:border-slate-800 dark:bg-slate-950 sm:p-6"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-black text-emerald-600">Manual listing</p>
              <h2 className="text-2xl font-black text-slate-950 dark:text-white">Create a campus listing</h2>
            </div>
            {submitted ? <CheckCircle2 className="h-7 w-7 text-emerald-500" /> : null}
          </div>

          <div className="grid gap-4">
            <label className="grid gap-2">
              <span className="text-sm font-bold text-slate-600 dark:text-slate-300">Item title</span>
              <input required className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 font-semibold outline-none transition focus:border-emerald-400 dark:border-slate-800 dark:bg-slate-900" placeholder="Scientific Calculator FX-991ES" />
            </label>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-sm font-bold text-slate-600 dark:text-slate-300">Category</span>
                <select required className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 font-semibold outline-none transition focus:border-emerald-400 dark:border-slate-800 dark:bg-slate-900">
                  {categories.map((category) => (
                    <option key={category.name}>{category.name}</option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-bold text-slate-600 dark:text-slate-300">Condition</span>
                <select required className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 font-semibold outline-none transition focus:border-emerald-400 dark:border-slate-800 dark:bg-slate-900">
                  <option>Like New</option>
                  <option>Good</option>
                  <option>Open Box</option>
                  <option>Fair</option>
                </select>
              </label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-sm font-bold text-slate-600 dark:text-slate-300">Selling price</span>
                <div className="flex items-center rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus-within:border-emerald-400 dark:border-slate-800 dark:bg-slate-900">
                  <IndianRupee className="h-4 w-4 text-slate-400" />
                  <input required type="number" min="1" className="w-full bg-transparent font-semibold outline-none" placeholder="749" />
                </div>
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-bold text-slate-600 dark:text-slate-300">Pickup spot</span>
                <input required className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 font-semibold outline-none transition focus:border-emerald-400 dark:border-slate-800 dark:bg-slate-900" placeholder="Library gate" />
              </label>
            </div>
            <label className="grid gap-2">
              <span className="text-sm font-bold text-slate-600 dark:text-slate-300">Description</span>
              <textarea required rows={4} className="resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 font-semibold outline-none transition focus:border-emerald-400 dark:border-slate-800 dark:bg-slate-900" placeholder="Mention usage, included accessories, and any marks." />
            </label>
            <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-4 font-black text-white transition hover:-translate-y-1 hover:bg-emerald-600 dark:bg-white dark:text-slate-950">
              <Send className="h-5 w-5" />
              Submit Mock Listing
            </button>
          </div>
        </motion.form>
      </section>

      <AiListingGenerator />

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {sellerBenefits.map((benefit) => (
            <div key={benefit.title} className="rounded-2xl bg-white p-6 shadow-sm dark:bg-slate-950">
              <benefit.icon className="mb-4 h-7 w-7 text-emerald-500" />
              <h3 className="text-xl font-black text-slate-950 dark:text-white">{benefit.title}</h3>
              <p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">{benefit.body}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
