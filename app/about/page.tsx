import type { Metadata } from "next";
import { AboutPage } from "@/components/about-page";

export const metadata: Metadata = {
  title: "About | DormDeal",
  description: "Learn about DormDeal's mission to help students save money and reduce waste."
};

export default function Page() {
  return <AboutPage />;
}
