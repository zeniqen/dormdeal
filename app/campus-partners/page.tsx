import type { Metadata } from "next";
import { InfoPage } from "@/components/info-page";

export const metadata: Metadata = {
  title: "Campus Partners | DormDeal",
  description: "Partner with DormDeal to bring circular student commerce to campus."
};

export default function Page() {
  return (
    <InfoPage
      eyebrow="Campus partners"
      title="Bring a circular student marketplace to your campus"
      description="DormDeal can help colleges reduce move-out waste, support affordability, and make student-to-student reuse easier to discover."
      icon="building"
      primaryCta={{ label: "Contact DormDeal", href: "/contact" }}
      secondaryCta={{ label: "Browse Marketplace", href: "/browse" }}
      cards={[
        {
          title: "Reduce move-out waste",
          body: "Help useful books, electronics, and hostel essentials find another student instead of ending up discarded."
        },
        {
          title: "Support affordability",
          body: "Students can access everyday academic and hostel essentials at resale-friendly prices."
        },
        {
          title: "Campus-ready story",
          body: "The impact dashboard gives partners a simple way to explain savings, reuse, and sustainability outcomes."
        }
      ]}
    />
  );
}
