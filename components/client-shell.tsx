"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Leaf, Menu, Moon, Search, ShoppingBag, Sun, X } from "lucide-react";
import { Toaster } from "sonner";
import { CartDrawer } from "@/components/cart-drawer";
import { useCartStore } from "@/lib/cart-store";

const navItems = [
  { label: "Browse", href: "/browse" },
  { label: "Sell Item", href: "/sell" },
  { label: "About", href: "/about" }
];

const footerGroups = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Campus Partners", href: "/campus-partners" },
      { label: "Careers", href: "/careers" }
    ]
  },
  {
    title: "Categories",
    links: [
      { label: "Books", href: "/categories/books" },
      { label: "Electronics", href: "/categories/electronics" },
      { label: "Hostel Essentials", href: "/categories/hostel-essentials" }
    ]
  },
  {
    title: "Contact",
    links: [
      { label: "hello@dormdeal.in", href: "/contact" },
      { label: "Instagram", href: "/social/instagram" },
      { label: "LinkedIn", href: "/social/linkedin" }
    ]
  }
];

export function ClientShell({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileSearchQuery, setMobileSearchQuery] = useState("");
  const openCart = useCartStore((state) => state.openCart);
  const cartCount = useCartStore((state) => state.items.reduce((sum, item) => sum + item.quantity, 0));
  const impact = useMemo(() => Math.max(24, cartCount * 6 + 24), [cartCount]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  function submitSearch(query: string) {
    const nextQuery = query.trim();

    if (!nextQuery) {
      router.push("/browse");
      setMenuOpen(false);
      return;
    }

    router.push(`/browse?q=${encodeURIComponent(nextQuery)}`);
    setMenuOpen(false);
  }

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-slate-200/70 glass dark:border-slate-800/80">
        <nav className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-950 text-white shadow-lg shadow-emerald-500/20 dark:bg-white dark:text-slate-950">
              <Leaf className="h-5 w-5 text-emerald-400" />
            </span>
            <span className="text-xl font-black tracking-tight text-slate-950 dark:text-white">DormDeal</span>
          </Link>

          <div className="ml-2 hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-white hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>

          <form
            className="ml-auto hidden min-w-64 max-w-sm flex-1 items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm md:flex dark:border-slate-800 dark:bg-slate-950"
            onSubmit={(event) => {
              event.preventDefault();
              submitSearch(searchQuery);
            }}
          >
            <Search className="h-4 w-4 text-slate-400" />
            <input
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
              placeholder="Search books, gadgets, notes..."
            />
          </form>

          <div className="hidden items-center gap-2 xl:flex">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-2 text-xs font-black text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
              <Leaf className="h-4 w-4" />
              {impact}kg waste avoided
            </span>
          </div>

          <button
            aria-label="Toggle dark mode"
            className="rounded-full border border-slate-200 bg-white p-2.5 text-slate-700 shadow-sm transition hover:-translate-y-0.5 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200"
            onClick={() => setDark((value) => !value)}
          >
            {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          <button
            aria-label="Open cart"
            className="relative rounded-full bg-slate-950 p-2.5 text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-emerald-600 dark:bg-white dark:text-slate-950"
            onClick={openCart}
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 ? (
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-amber-400 px-1 text-xs font-black text-slate-950">{cartCount}</span>
            ) : null}
          </button>

          <button
            aria-label="Open menu"
            className="rounded-full border border-slate-200 bg-white p-2.5 text-slate-700 md:hidden dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200"
            onClick={() => setMenuOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>

        <AnimatePresence>
          {menuOpen ? (
            <motion.div className="fixed inset-0 z-40 bg-slate-950/50 md:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <motion.div className="ml-auto h-full w-80 bg-white p-5 shadow-2xl dark:bg-slate-950" initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}>
                <div className="flex items-center justify-between">
                  <span className="font-black text-slate-950 dark:text-white">DormDeal</span>
                  <button aria-label="Close menu" className="rounded-full p-2 hover:bg-slate-100 dark:hover:bg-slate-900" onClick={() => setMenuOpen(false)}>
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <form
                  className="mt-5 flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 dark:border-slate-800"
                  onSubmit={(event) => {
                    event.preventDefault();
                    submitSearch(mobileSearchQuery);
                  }}
                >
                  <Search className="h-4 w-4 text-slate-400" />
                  <input
                    value={mobileSearchQuery}
                    onChange={(event) => setMobileSearchQuery(event.target.value)}
                    className="w-full bg-transparent text-sm outline-none"
                    placeholder="Search DormDeal"
                  />
                </form>
                <div className="mt-6 grid gap-2">
                  {navItems.map((item) => (
                    <Link key={item.label} href={item.href} className="rounded-2xl px-4 py-3 font-bold hover:bg-slate-100 dark:hover:bg-slate-900" onClick={() => setMenuOpen(false)}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>

      {children}

      <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
          <div>
            <div className="flex items-center gap-2 text-xl font-black text-slate-950 dark:text-white">
              <Leaf className="h-5 w-5 text-emerald-500" />
              DormDeal
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-500">Buy Used. Save More. Waste Less.</p>
          </div>
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3 className="font-black text-slate-950 dark:text-white">{group.title}</h3>
              <div className="mt-3 grid gap-2 text-sm text-slate-500">
                {group.links.map((link) => (
                  <Link key={link.href} href={link.href} className="transition hover:text-emerald-600">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </footer>
      <CartDrawer />
      <Toaster richColors position="top-right" />
    </>
  );
}
