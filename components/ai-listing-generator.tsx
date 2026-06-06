"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Camera, ImagePlus, Loader2, Sparkles } from "lucide-react";

const mockListings = [
  {
    title: "Casio Scientific Calculator in Exam-Ready Condition",
    description: "Clean display, responsive keys, and perfect for engineering entrance tests or semester exams. Includes hard cover and fresh battery.",
    price: "₹750",
    impact: "Keeps 0.4kg of electronics in reuse and saves a student roughly ₹650."
  },
  {
    title: "Semester Notes Bundle with Highlighted Revision Maps",
    description: "Organized handwritten notes with chapter summaries, marked formulas, and quick revision pages for last-week study sprints.",
    price: "₹299",
    impact: "Extends paper life and avoids around 0.5kg of fresh print waste."
  },
  {
    title: "Minimal LED Study Lamp for Hostel Desks",
    description: "Adjustable neck, soft light modes, and compact base that fits small hostel tables without clutter.",
    price: "₹599",
    impact: "Reusing this item prevents about 0.8kg of material waste."
  }
];

export function AiListingGenerator() {
  const [hasImage, setHasImage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultIndex, setResultIndex] = useState<number | null>(null);
  const result = useMemo(() => (resultIndex === null ? null : mockListings[resultIndex]), [resultIndex]);

  function generate() {
    setLoading(true);
    window.setTimeout(() => {
      setResultIndex(Math.floor(Math.random() * mockListings.length));
      setLoading(false);
    }, 900);
  }

  return (
    <section id="sell" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="font-bold text-emerald-600">Main innovation</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl dark:text-white">AI Listing Generator</h2>
          <p className="mt-4 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Turn one product photo into a polished listing with a title, description, student-friendly price, and sustainability estimate.
          </p>
        </div>

        <motion.div
          className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl dark:border-slate-800 dark:bg-slate-950"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid min-h-80 cursor-pointer place-items-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 p-6 text-center transition hover:border-emerald-400 hover:bg-emerald-50 dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-900">
              <input type="file" accept="image/*" className="sr-only" onChange={() => setHasImage(true)} />
              <div>
                <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-2xl bg-white text-emerald-600 shadow-sm dark:bg-slate-950">
                  {hasImage ? <Camera className="h-8 w-8" /> : <ImagePlus className="h-8 w-8" />}
                </div>
                <p className="font-bold text-slate-950 dark:text-white">{hasImage ? "Image ready" : "Upload product image"}</p>
                <p className="mt-2 text-sm text-slate-500">Mock upload for demo listings</p>
              </div>
            </label>

            <div className="rounded-2xl bg-slate-950 p-5 text-white">
              <div className="mb-4 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-amber-400" />
                <p className="font-bold">Generated listing</p>
              </div>
              {loading ? (
                <div className="space-y-3">
                  <div className="h-5 w-4/5 animate-pulse rounded bg-white/20" />
                  <div className="h-4 w-full animate-pulse rounded bg-white/15" />
                  <div className="h-4 w-2/3 animate-pulse rounded bg-white/15" />
                  <div className="h-16 w-full animate-pulse rounded-2xl bg-white/10" />
                </div>
              ) : result ? (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-300">Product title</p>
                    <h3 className="mt-1 text-xl font-black">{result.title}</h3>
                  </div>
                  <p className="text-sm leading-6 text-slate-300">{result.description}</p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl bg-white/10 p-3">
                      <p className="text-xs text-slate-300">Suggested price</p>
                      <p className="text-2xl font-black text-emerald-300">{result.price}</p>
                    </div>
                    <div className="rounded-2xl bg-white/10 p-3">
                      <p className="text-xs text-slate-300">Impact estimate</p>
                      <p className="text-sm font-semibold">{result.impact}</p>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="rounded-2xl bg-white/10 p-5 text-sm leading-6 text-slate-300">
                  Upload a product photo and generate a sale-ready description in seconds.
                </div>
              )}
              <button
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-4 py-3 font-black text-slate-950 transition hover:-translate-y-0.5 hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-60"
                disabled={!hasImage || loading}
                onClick={generate}
              >
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
                Generate Listing
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
