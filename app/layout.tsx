import type { Metadata } from "next";
import "./globals.css";
import { ClientShell } from "@/components/client-shell";

export const metadata: Metadata = {
  title: "DormDeal | Buy Used. Save More. Waste Less.",
  description: "A student-focused marketplace for textbooks, electronics, notes, and hostel essentials."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
