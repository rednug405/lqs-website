import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quilting Pattern Catalog",
  description:
    "Browse 111 edge-to-edge longarm quilting designs available at LQS LLC in Moore, OK. Continuous line patterns for all quilt styles. Choose your design when you drop off your quilt.",
  alternates: { canonical: "https://lqs.llc/patterns" },
  openGraph: {
    title: "Longarm Quilting Pattern Catalog — LQS LLC Moore, OK",
    description:
      "111 edge-to-edge quilting designs to choose from. Florals, geometrics, feathers, and more. Browse before you drop off your quilt.",
    url: "https://lqs.llc/patterns",
  },
};

export default function PatternsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
