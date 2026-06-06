import {
  Backpack,
  BookOpen,
  Calculator,
  Headphones,
  Keyboard,
  LampDesk,
  NotebookPen,
  Plug,
  Shirt,
  TabletSmartphone
} from "lucide-react";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  image: string;
  gallery: string[];
  originalPrice: number;
  price: number;
  condition: "Like New" | "Good" | "Fair" | "Open Box";
  seller: string;
  rating: number;
  reusedKg: number;
  description: string;
};

export const categories = [
  { name: "Books", icon: BookOpen, tone: "bg-emerald-50 text-emerald-700" },
  { name: "Electronics", icon: TabletSmartphone, tone: "bg-sky-50 text-sky-700" },
  { name: "Calculators", icon: Calculator, tone: "bg-amber-50 text-amber-700" },
  { name: "Hostel Essentials", icon: LampDesk, tone: "bg-rose-50 text-rose-700" },
  { name: "Notes", icon: NotebookPen, tone: "bg-violet-50 text-violet-700" },
  { name: "Accessories", icon: Backpack, tone: "bg-slate-100 text-slate-700" }
];

export const products: Product[] = [
  {
    id: "p1",
    slug: "scientific-calculator-fx-991es",
    name: "Scientific Calculator FX-991ES",
    category: "Calculators",
    image: "https://images.unsplash.com/photo-1757256137041-0aab889db199?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1757256137041-0aab889db199?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?auto=format&fit=crop&w=1200&q=80"
    ],
    originalPrice: 1399,
    price: 749,
    condition: "Good",
    seller: "Aarav M.",
    rating: 4.8,
    reusedKg: 0.4,
    description: "Exam-ready scientific calculator with clean keys, intact display, and protective cover."
  },
  {
    id: "p2",
    slug: "engineering-mathematics-textbook",
    name: "Engineering Mathematics Textbook",
    category: "Books",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=80"
    ],
    originalPrice: 899,
    price: 389,
    condition: "Good",
    seller: "Nisha K.",
    rating: 4.7,
    reusedKg: 1.2,
    description: "Light annotations on important formulas and solved examples. Great for first-year engineering."
  },
  {
    id: "p3",
    slug: "mechanical-keyboard-blue-switch",
    name: "Mechanical Keyboard",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1200&q=80"
    ],
    originalPrice: 3499,
    price: 1899,
    condition: "Like New",
    seller: "Kabir S.",
    rating: 4.9,
    reusedKg: 0.9,
    description: "Compact wired keyboard with blue switches, RGB modes, and spare keycaps."
  },
  {
    id: "p4",
    slug: "hostel-study-lamp-led",
    name: "Hostel Study Lamp",
    category: "Hostel Essentials",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=80"
    ],
    originalPrice: 1299,
    price: 599,
    condition: "Good",
    seller: "Ira P.",
    rating: 4.6,
    reusedKg: 0.8,
    description: "Adjustable LED desk lamp with warm and cool modes for late-night study sessions."
  },
  {
    id: "p5",
    slug: "college-backpack-water-resistant",
    name: "College Backpack",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&w=1200&q=80"
    ],
    originalPrice: 2199,
    price: 999,
    condition: "Good",
    seller: "Meera R.",
    rating: 4.7,
    reusedKg: 1.1,
    description: "Water-resistant backpack with laptop sleeve, bottle pocket, and sturdy zippers."
  },
  {
    id: "p6",
    slug: "noise-cancelling-headphones",
    name: "Noise Cancelling Headphones",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=80"
    ],
    originalPrice: 5999,
    price: 3199,
    condition: "Open Box",
    seller: "Rohan D.",
    rating: 4.9,
    reusedKg: 0.7,
    description: "Comfortable wireless headphones with active noise cancellation and original cable."
  },
  {
    id: "p7",
    slug: "organic-chemistry-notes",
    name: "Organic Chemistry Notes",
    category: "Notes",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1200&q=80"
    ],
    originalPrice: 799,
    price: 249,
    condition: "Like New",
    seller: "Ananya G.",
    rating: 4.8,
    reusedKg: 0.5,
    description: "Neatly scanned semester notes with reaction maps, practice questions, and summaries."
  },
  {
    id: "p8",
    slug: "usb-c-charging-kit",
    name: "USB-C Charging Kit",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1603539444875-76e7684265f6?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1603539444875-76e7684265f6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=1200&q=80"
    ],
    originalPrice: 1499,
    price: 699,
    condition: "Good",
    seller: "Dev T.",
    rating: 4.5,
    reusedKg: 0.3,
    description: "Fast charger and braided USB-C cable bundle for laptops, phones, and tablets."
  },
  {
    id: "p9",
    slug: "digital-drawing-tablet",
    name: "Digital Drawing Tablet",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1577864663716-cc298e74c21f?auto=format&fit=crop&w=1200&q=80"
    ],
    originalPrice: 4999,
    price: 2499,
    condition: "Fair",
    seller: "Zoya A.",
    rating: 4.4,
    reusedKg: 0.6,
    description: "Beginner drawing tablet with pressure-sensitive pen. Minor scratches, works perfectly."
  },
  {
    id: "p10",
    slug: "mini-electric-kettle",
    name: "Mini Electric Kettle",
    category: "Hostel Essentials",
    image: "https://images.unsplash.com/photo-1571552879083-e93b6ea70d1d?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1571552879083-e93b6ea70d1d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594213114663-d94db9e17125?auto=format&fit=crop&w=1200&q=80"
    ],
    originalPrice: 1799,
    price: 799,
    condition: "Good",
    seller: "Samar L.",
    rating: 4.6,
    reusedKg: 1.4,
    description: "Compact kettle for tea, noodles, and quick hostel meals. Auto cut-off works well."
  },
  {
    id: "p11",
    slug: "lab-coat-medium",
    name: "Lab Coat Medium",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80"
    ],
    originalPrice: 999,
    price: 399,
    condition: "Like New",
    seller: "Prisha B.",
    rating: 4.8,
    reusedKg: 0.7,
    description: "Clean white lab coat, medium size, suitable for chemistry and biotech practicals."
  },
  {
    id: "p12",
    slug: "portable-power-bank-20000mah",
    name: "Portable Power Bank",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1622957040873-8ea24e2939f4?auto=format&fit=crop&w=1200&q=80"
    ],
    originalPrice: 2499,
    price: 1199,
    condition: "Good",
    seller: "Arjun V.",
    rating: 4.7,
    reusedKg: 0.5,
    description: "20,000mAh power bank with dual USB output and reliable backup for long campus days."
  }
];

export const quickIcons = { Keyboard, Headphones, Plug, Shirt };

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
