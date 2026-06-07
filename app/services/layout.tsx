import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Longarm quilting pricing for Moore, OK and surrounding areas. Edge-to-edge quilting at $0.025/sq in — throw, twin, full, queen. Batting and Glide thread included. Minimum $65. Call (405) 778-1440.",
  alternates: { canonical: "https://lqs.llc/services" },
  openGraph: {
    title: "Longarm Quilting Pricing — LQS LLC Moore, OK",
    description:
      "Affordable edge-to-edge quilting starting at $0.025/sq in. Batting & thread included. Serving Moore, Norman, Midwest City, and OKC. Call (405) 778-1440.",
    url: "https://lqs.llc/services",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
