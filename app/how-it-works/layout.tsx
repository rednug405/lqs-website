import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "How to get your quilt longarm quilted at LQS LLC in Moore, OK. Simple drop-off process — bring your quilt top and backing, choose a pattern, and pick up a finished quilt. Call (405) 778-1440.",
  alternates: { canonical: "https://lqs.llc/how-it-works" },
  openGraph: {
    title: "How Longarm Quilting Works — LQS LLC Moore, OK",
    description:
      "Easy drop-off longarm quilting service in Moore, OK. Bring your quilt top and backing, pick a pattern, and we do the rest. Batting and thread included.",
    url: "https://lqs.llc/how-it-works",
  },
};

export default function HowItWorksLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
