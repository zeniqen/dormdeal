import type { Metadata } from "next";
import { InfoPage } from "@/components/info-page";

export const metadata: Metadata = {
  title: "Careers | DormDeal",
  description: "Explore mock future roles at DormDeal."
};

export default function Page() {
  return (
    <InfoPage
      eyebrow="Careers"
      title="Build tools for student affordability and campus reuse"
      description="DormDeal is a hackathon MVP today, but the product direction is big: local commerce, sustainability, trust, and student-first design."
      icon="briefcase"
      primaryCta={{ label: "See the Product", href: "/browse" }}
      secondaryCta={{ label: "Contact Us", href: "/contact" }}
      cards={[
        {
          title: "Product and design",
          body: "Design dense, fast, trustworthy workflows for students buying and selling between classes."
        },
        {
          title: "Engineering",
          body: "Build listing, search, matching, AI generation, and impact analytics for a campus-scale marketplace."
        },
        {
          title: "Campus growth",
          body: "Work with student ambassadors and college partners to launch circular marketplaces locally."
        }
      ]}
    />
  );
}
