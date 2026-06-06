import type { Metadata } from "next";
import { InfoPage } from "@/components/info-page";

export const metadata: Metadata = {
  title: "Instagram | DormDeal",
  description: "DormDeal Instagram placeholder page."
};

export default function Page() {
  return (
    <InfoPage
      eyebrow="Social"
      title="DormDeal on Instagram"
      description="A real DormDeal launch would use Instagram for campus drops, seller spotlights, reuse wins, and student ambassador updates."
      icon="camera"
      primaryCta={{ label: "Browse Deals", href: "/browse" }}
      secondaryCta={{ label: "Contact Us", href: "/contact" }}
      cards={[
        {
          title: "Deal drops",
          body: "Showcase fresh textbooks, gadgets, and hostel essentials as they become available."
        },
        {
          title: "Reuse stories",
          body: "Highlight students who saved money while keeping useful items in circulation."
        },
        {
          title: "Campus campaigns",
          body: "Promote move-out resale drives and category-specific marketplace weeks."
        }
      ]}
    />
  );
}
