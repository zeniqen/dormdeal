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
  },
  {
    id: "p13",
    slug: "data-structures-textbook",
    name: "Data Structures Textbook",
    category: "Books",
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80"
    ],
    originalPrice: 1199,
    price: 549,
    condition: "Good",
    seller: "Tanay J.",
    rating: 4.6,
    reusedKg: 1.1,
    description: "Core CS textbook with clean pages, algorithm notes, and important sections bookmarked."
  },
  {
    id: "p14",
    slug: "physics-lab-manual",
    name: "Physics Lab Manual",
    category: "Books",
    image: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80"
    ],
    originalPrice: 650,
    price: 219,
    condition: "Fair",
    seller: "Ritika N.",
    rating: 4.3,
    reusedKg: 0.8,
    description: "Usable lab manual with experiment tables, diagrams, and a few highlighted observations."
  },
  {
    id: "p15",
    slug: "financial-accounting-guide",
    name: "Financial Accounting Guide",
    category: "Books",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80"
    ],
    originalPrice: 999,
    price: 399,
    condition: "Like New",
    seller: "Mihir C.",
    rating: 4.8,
    reusedKg: 1,
    description: "Commerce guide with solved examples, ledger formats, and exam-style practice sets."
  },
  {
    id: "p16",
    slug: "graphing-calculator-ti-84",
    name: "Graphing Calculator TI-84",
    category: "Calculators",
    image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1757256137041-0aab889db199?auto=format&fit=crop&w=1200&q=80"
    ],
    originalPrice: 8499,
    price: 4299,
    condition: "Good",
    seller: "Kunal W.",
    rating: 4.7,
    reusedKg: 0.5,
    description: "Graphing calculator for advanced math courses with clear screen and responsive keypad."
  },
  {
    id: "p17",
    slug: "basic-casio-calculator",
    name: "Basic Casio Calculator",
    category: "Calculators",
    image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1757256137041-0aab889db199?auto=format&fit=crop&w=1200&q=80"
    ],
    originalPrice: 499,
    price: 199,
    condition: "Good",
    seller: "Sia H.",
    rating: 4.4,
    reusedKg: 0.2,
    description: "Simple calculator for commerce and quick daily calculations. Battery recently replaced."
  },
  {
    id: "p18",
    slug: "wireless-mouse",
    name: "Wireless Mouse",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=1200&q=80"
    ],
    originalPrice: 1299,
    price: 599,
    condition: "Like New",
    seller: "Yash M.",
    rating: 4.7,
    reusedKg: 0.25,
    description: "Quiet wireless mouse with USB receiver, smooth scroll wheel, and strong battery life."
  },
  {
    id: "p19",
    slug: "bluetooth-speaker-mini",
    name: "Mini Bluetooth Speaker",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1200&q=80"
    ],
    originalPrice: 2499,
    price: 1099,
    condition: "Good",
    seller: "Neil A.",
    rating: 4.5,
    reusedKg: 0.6,
    description: "Portable speaker for hostel rooms, club events, and small study breaks. Charging cable included."
  },
  {
    id: "p20",
    slug: "laptop-stand-foldable",
    name: "Foldable Laptop Stand",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1616628188859-7a11abb6fcc9?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1616628188859-7a11abb6fcc9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=80"
    ],
    originalPrice: 1599,
    price: 749,
    condition: "Like New",
    seller: "Avni S.",
    rating: 4.8,
    reusedKg: 0.8,
    description: "Aluminium foldable laptop stand with adjustable height for better desk posture."
  },
  {
    id: "p21",
    slug: "steel-water-bottle",
    name: "Steel Water Bottle",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=1200&q=80"
    ],
    originalPrice: 899,
    price: 349,
    condition: "Good",
    seller: "Diya F.",
    rating: 4.6,
    reusedKg: 0.4,
    description: "Insulated steel bottle with minor exterior marks and excellent temperature retention."
  },
  {
    id: "p22",
    slug: "geometry-drafting-set",
    name: "Geometry Drafting Set",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80"
    ],
    originalPrice: 1199,
    price: 499,
    condition: "Good",
    seller: "Harsh P.",
    rating: 4.5,
    reusedKg: 0.35,
    description: "Drafting tools for engineering drawing: scale, compass, set squares, and storage case."
  },
  {
    id: "p23",
    slug: "hostel-bedside-organizer",
    name: "Hostel Bedside Organizer",
    category: "Hostel Essentials",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80"
    ],
    originalPrice: 899,
    price: 379,
    condition: "Good",
    seller: "Pooja E.",
    rating: 4.6,
    reusedKg: 0.7,
    description: "Hanging organizer for phone, charger, notebooks, and small bedside essentials."
  },
  {
    id: "p24",
    slug: "folding-laundry-basket",
    name: "Folding Laundry Basket",
    category: "Hostel Essentials",
    image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=1200&q=80"
    ],
    originalPrice: 799,
    price: 299,
    condition: "Fair",
    seller: "Laksh B.",
    rating: 4.2,
    reusedKg: 0.9,
    description: "Lightweight collapsible laundry basket with sturdy handles and plenty of hostel-life mileage left."
  },
  {
    id: "p25",
    slug: "mini-table-fan",
    name: "Mini Table Fan",
    category: "Hostel Essentials",
    image: "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=1200&q=80"
    ],
    originalPrice: 1499,
    price: 699,
    condition: "Good",
    seller: "Aditya Q.",
    rating: 4.5,
    reusedKg: 1.1,
    description: "Compact table fan for hostel desks with two speed settings and stable base."
  },
  {
    id: "p26",
    slug: "microeconomics-notes",
    name: "Microeconomics Notes",
    category: "Notes",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80"
    ],
    originalPrice: 699,
    price: 199,
    condition: "Like New",
    seller: "Gayatri U.",
    rating: 4.9,
    reusedKg: 0.45,
    description: "Concise notes with diagrams, demand-supply graphs, and quick revision summaries."
  },
  {
    id: "p27",
    slug: "dbms-handwritten-notes",
    name: "DBMS Handwritten Notes",
    category: "Notes",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80"
    ],
    originalPrice: 899,
    price: 299,
    condition: "Good",
    seller: "Raghav I.",
    rating: 4.7,
    reusedKg: 0.5,
    description: "Database notes covering ER diagrams, normalization, SQL queries, and transaction concepts."
  },
  {
    id: "p28",
    slug: "aptitude-placement-notes",
    name: "Aptitude Placement Notes",
    category: "Notes",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80"
    ],
    originalPrice: 999,
    price: 349,
    condition: "Good",
    seller: "Palak D.",
    rating: 4.8,
    reusedKg: 0.55,
    description: "Placement prep notes with shortcuts, solved questions, and topic-wise practice sheets."
  },
  {
    id: "p29",
    slug: "usb-powered-desk-hub",
    name: "USB Powered Desk Hub",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1616578273578-4a9b9070cc04?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1616578273578-4a9b9070cc04?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=1200&q=80"
    ],
    originalPrice: 1899,
    price: 899,
    condition: "Open Box",
    seller: "Ojas V.",
    rating: 4.6,
    reusedKg: 0.35,
    description: "Four-port USB hub for laptop desks, keyboards, mice, and storage drives."
  },
  {
    id: "p30",
    slug: "clip-on-book-light",
    name: "Clip-on Book Light",
    category: "Hostel Essentials",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=80"
    ],
    originalPrice: 699,
    price: 279,
    condition: "Like New",
    seller: "Tara Z.",
    rating: 4.8,
    reusedKg: 0.25,
    description: "Rechargeable clip-on reading light for late-night study without waking roommates."
  }
];

export const quickIcons = { Keyboard, Headphones, Plug, Shirt };

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function slugifyCategory(category: string) {
  return category.toLowerCase().replaceAll(" ", "-");
}

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => slugifyCategory(category.name) === slug);
}

export function getProductsByCategory(category: string) {
  return products.filter((product) => product.category === category);
}
