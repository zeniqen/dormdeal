"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BriefcaseBusiness, Building2, Camera, CheckCircle2, Leaf, Mail, Network } from "lucide-react";

const infoIcons = {
  briefcase: BriefcaseBusiness,
  building: Building2,
  camera: Camera,
  leaf: Leaf,
  mail: Mail,
  network: Network
};

type InfoPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  icon: keyof typeof infoIcons;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  cards: Array<{
    title: string;
    body: string;
  }>;
};

export function InfoPage({ eyebrow, title, description, icon, primaryCta, secondaryCta, cards }: InfoPageProps) {
  const Icon = infoIcons[icon];

  return (
    <main>
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:px-8">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-black text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
            <Icon className="h-4 w-4" />
            {eyebrow}
          </div>
          <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-tight text-slate-950 sm:text-6xl dark:text-white">{title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">{description}</p>
          {(primaryCta || secondaryCta) ? (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {primaryCta ? (
                <Link href={primaryCta.href} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-6 py-4 font-black text-white transition hover:-translate-y-1 hover:bg-emerald-600 dark:bg-white dark:text-slate-950">
                  {primaryCta.label}
                  <ArrowRight className="h-5 w-5" />
                </Link>
              ) : null}
              {secondaryCta ? (
                <Link href={secondaryCta.href} className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-4 font-black text-slate-950 transition hover:-translate-y-1 hover:border-emerald-300 dark:border-slate-800 dark:bg-slate-950 dark:text-white">
                  {secondaryCta.label}
                </Link>
              ) : null}
            </div>
          ) : null}
        </motion.div>

        <motion.div
          className="rounded-[2rem] bg-slate-950 p-6 text-white shadow-2xl"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          <Leaf className="mb-5 h-10 w-10 text-emerald-300" />
          <h2 className="text-3xl font-black">DormDeal lens</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Every page reinforces the same MVP promise: a student marketplace that saves money, reduces waste, and feels credible enough to use on campus.
          </p>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {cards.map((card) => (
            <motion.div
              key={card.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <CheckCircle2 className="mb-5 h-7 w-7 text-emerald-500" />
              <h3 className="text-xl font-black text-slate-950 dark:text-white">{card.title}</h3>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{card.body}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
