"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X, Scissors, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services & Pricing" },
  { href: "/patterns", label: "Pattern Catalog" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About & Contact" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-cream-50 border-b border-rose-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-rose-400 rounded-full flex items-center justify-center group-hover:bg-rose-500 transition-colors shadow-sm">
              <Scissors className="w-4 h-4 text-white" />
            </div>
            <div className="leading-tight">
              <div className="font-bold text-taupe-800 text-sm tracking-wide">LQS LLC</div>
              <div className="text-xs text-taupe-500">Longarm Quilting Service</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "bg-rose-100 text-rose-700"
                    : "text-taupe-600 hover:text-taupe-900 hover:bg-cream-200"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:4057781440"
              className="flex items-center gap-1.5 text-sm text-taupe-500 hover:text-rose-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              (405) 778-1440
            </a>
            <Button asChild size="sm" className="bg-rose-400 hover:bg-rose-500 text-white shadow-sm rounded-full px-5">
              <Link href="/about">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-taupe-600 hover:text-rose-500 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-cream-50 border-t border-rose-100 px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                pathname === link.href
                  ? "bg-rose-100 text-rose-700"
                  : "text-taupe-600 hover:bg-cream-200"
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-rose-100 mt-2">
            <a href="tel:4057781440" className="flex items-center gap-2 px-3 py-2 text-sm text-taupe-600">
              <Phone className="w-4 h-4 text-rose-400" /> (405) 778-1440
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
