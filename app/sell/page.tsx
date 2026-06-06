import type { Metadata } from "next";
import { SellPage } from "@/components/sell-page";

export const metadata: Metadata = {
  title: "Sell an Item | DormDeal",
  description: "Create a mock student marketplace listing with DormDeal."
};

export default function Page() {
  return <SellPage />;
}
