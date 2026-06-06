import type { Metadata } from "next";
import { Suspense } from "react";
import { BrowsePage } from "@/components/browse-page";

export const metadata: Metadata = {
  title: "Browse Deals | DormDeal",
  description: "Browse affordable student marketplace deals on DormDeal."
};

export default function Page() {
  return (
    <Suspense>
      <BrowsePage />
    </Suspense>
  );
}
