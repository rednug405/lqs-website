import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About & Contact",
  description:
    "LQS LLC is a veteran-owned longarm quilting service at 121 W. Main St, Suite 104, Moore, OK 73150. Owner Kevin Gunder. Call or text (405) 778-1440 or email kevin@lqs.llc.",
  alternates: { canonical: "https://lqs.llc/about" },
  openGraph: {
    title: "About LQS LLC — Veteran-Owned Longarm Quilting in Moore, OK",
    description:
      "Meet Kevin Gunder, owner of LQS LLC. Veteran-owned longarm quilting service at 121 W. Main St, Moore, OK. Call (405) 778-1440.",
    url: "https://lqs.llc/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
