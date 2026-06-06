import type { Metadata } from "next";
import { InfoPage } from "@/components/info-page";

export const metadata: Metadata = {
  title: "Contact | DormDeal",
  description: "Contact the DormDeal team."
};

export default function Page() {
  return (
    <InfoPage
      eyebrow="Contact"
      title="Talk to DormDeal"
      description="For the hackathon MVP, contact is represented as a polished product page. In a production launch this would connect to campus partnerships, support, and seller onboarding."
      icon="mail"
      primaryCta={{ label: "Email hello@dormdeal.in", href: "mailto:hello@dormdeal.in" }}
      secondaryCta={{ label: "Sell an Item", href: "/sell" }}
      cards={[
        {
          title: "General questions",
          body: "Ask about the marketplace concept, demo flow, feature roadmap, or student sustainability story."
        },
        {
          title: "Campus partnerships",
          body: "Explore how DormDeal could support end-of-semester reuse drives and student affordability programs."
        },
        {
          title: "Product feedback",
          body: "Share ideas for search, trust, pickup safety, seller tools, or future AI listing generation."
        }
      ]}
    />
  );
}
