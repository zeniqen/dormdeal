# DormDeal

**Buy Used. Save More. Waste Less.**

DormDeal is a modern student-focused resale marketplace where students can buy and sell textbooks, electronics, calculators, notes, hostel essentials, and accessories. The goal is simple: help students save money while reducing campus waste through reuse and resale.

This project was built as a hackathon-ready MVP with mock data, polished UX, and a sustainability-first product story.

## Why DormDeal?

Students often buy expensive items for one semester, one course, or one hostel year, then leave them unused. DormDeal turns that unused value into a circular student economy.

- Students save money by buying quality used items.
- Sellers recover value from items they no longer need.
- Campuses reduce waste by extending the life of useful products.

## Live Demo Flow For Judges

1. Open the homepage and review the startup-style hero, stats, categories, and sustainability story.
2. Visit `/browse` to filter and search mock student listings.
3. Add a product to the cart, then adjust quantity, remove items, and review the total in the cart drawer.
4. Click a product card to view the product details page.
5. Visit `/sell` and try the manual mock listing form.
6. Try the **AI Listing Generator**:
   - Upload any product image.
   - Click **Generate Listing**.
   - Review the mock AI-generated title, description, price, and sustainability estimate.
7. Visit `/about` to review the mission, impact story, and circular campus economy positioning.
8. Toggle dark mode and resize the browser to see the responsive mobile experience.

## Key Features

- Premium responsive e-commerce landing experience
- Student marketplace product grid with 30 realistic mock listings
- Product detail pages with gallery, seller rating, condition, savings, and sustainability indicators
- Dedicated Browse, Sell Item, and About pages connected through the navbar
- Footer links connected to real company, category, contact, and social placeholder pages
- Slide-out cart drawer powered by Zustand
- Quantity controls, remove item, total price, checkout simulation, and empty cart state
- AI Listing Generator mock workflow
- Animated counters and smooth Framer Motion transitions
- Toast notifications for cart, wishlist, and mock checkout actions
- Loading skeletons for product discovery
- Dark mode toggle
- Mobile-first responsive navigation and layout
- Sustainability impact dashboard with comparison between buying new and buying on DormDeal

## AI Listing Generator

The AI Listing Generator is the main innovation feature of DormDeal.

In a real product, this feature would help students create listings faster by turning a product photo into:

- Product title
- Product description
- Suggested selling price
- Sustainability impact estimate

For this hackathon MVP, the feature is fully simulated with mock responses and does not call an external AI API. This keeps the demo reliable, fast, and backend-free while showing the intended user experience.

## Tech Stack

- **Next.js App Router** for routing and static product pages
- **TypeScript** for safer frontend development
- **Tailwind CSS** for responsive styling
- **Zustand** for cart state management
- **Framer Motion** for animations and transitions
- **Lucide React** for icons
- **Sonner** for toast notifications
- **Mock data only**
- **No backend**
- **No authentication**
- **No payment gateway**

## Project Structure

```txt
app/
  layout.tsx                 Global app shell
  page.tsx                   Homepage entry
  globals.css                Tailwind and global styles
  about/page.tsx             About page
  browse/page.tsx            Browse marketplace page
  sell/page.tsx              Sell item page
  categories/[slug]/page.tsx Category-specific marketplace pages
  products/[slug]/page.tsx   Product details route

components/
  ai-listing-generator.tsx   Mock AI listing workflow
  animated-counter.tsx       Animated stats
  cart-drawer.tsx            Slide-out cart UI
  client-shell.tsx           Navbar, footer, cart, dark mode
  home-page.tsx              Main landing and marketplace page
  product-card.tsx           Product listing card
  product-details.tsx        Product details experience

lib/
  cart-store.ts              Zustand cart state
  data.ts                    Mock categories and products
  utils.ts                   Shared helpers
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```txt
http://localhost:3000
```

Build for production:

```bash
npm run build
```

Run lint:

```bash
npm run lint
```

## Design Direction

DormDeal uses a clean YC-startup-inspired interface:

- Minimal layout with generous spacing
- Rounded 2xl cards
- Soft shadows
- Premium product imagery
- Clear sustainability storytelling
- Strong mobile experience
- Calm color palette with emerald sustainability accents

Primary colors:

- Primary: `#0F172A`
- Secondary: `#10B981`
- Accent: `#F59E0B`
- Background: `#F8FAFC`

## Mock Product Categories

- Books
- Electronics
- Calculators
- Hostel Essentials
- Notes
- Accessories

## What Is Implemented vs. Simulated

Implemented:

- Full responsive UI
- Product browsing
- Product detail pages
- Cart drawer
- Cart quantity state
- Toast notifications
- Dark mode
- Mock AI listing generation
- Sustainability dashboard

Simulated:

- AI output
- Checkout
- Wishlist persistence
- Seller verification
- Product upload storage

Not included by design:

- Backend
- Database
- Authentication
- Real payments
- Real AI API calls

## Future Scope

- Campus-based listing discovery
- Student verification with college email
- Real AI listing generation using vision models
- In-app chat between buyers and sellers
- Saved wishlists and seller profiles
- Pickup scheduling
- Moderation and report flow
- Impact analytics per student and campus

## Judging Highlights

- Clear problem for a real student audience
- Strong sustainability angle with measurable impact storytelling
- Hackathon-friendly innovation through AI-assisted listing creation
- Complete MVP feel without needing backend complexity
- Polished responsive UI that goes beyond a basic e-commerce clone

## Tagline

**Buy Used. Save More. Waste Less.**
