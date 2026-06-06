import type { Metadata } from "next";
import { InfoPage } from "@/components/info-page";

export const metadata: Metadata = {
  title: "LinkedIn | DormDeal",
  description: "DormDeal LinkedIn placeholder page."
};

export default function Page() {
  return (
    <InfoPage
      eyebrow="Social"
      title="DormDeal on LinkedIn"
      description="A production DormDeal LinkedIn page would share campus partnerships, sustainability milestones, product updates, and hiring news."
      icon="network"
      primaryCta={{ label: "Campus Partners", href: "/campus-partners" }}
      secondaryCta={{ label: "Careers", href: "/careers" }}
      cards={[
        {
          title: "Impact reports",
          body: "Publish student savings, items reused, and waste prevented across participating campuses."
        },
        {
          title: "Partner updates",
          body: "Share how colleges and student groups are building circular campus economies."
        },
        {
          title: "Team building",
          body: "Invite product, engineering, design, and campus growth talent to join the mission."
        }
      ]}
    />
  );
}
