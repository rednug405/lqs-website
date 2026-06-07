import Link from "next/link";
import { Scissors, MapPin, Phone, Mail, Shield, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-taupe-800 text-taupe-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 bg-rose-400 rounded-full flex items-center justify-center">
                <Scissors className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-cream-100">LQS LLC</span>
            </div>
            <p className="text-sm text-taupe-400 leading-relaxed mb-3">
              Affordable, quality longarm quilting — finished with care, every single time.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-rose-300">
              <Shield className="w-3.5 h-3.5" />
              Veteran-Owned Small Business · Moore, OK
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-cream-200 mb-3 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                ["Home", "/"],
                ["Services & Pricing", "/services"],
                ["Pattern Catalog", "/patterns"],
                ["How It Works", "/how-it-works"],
                ["About & Contact", "/about"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-rose-300 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-cream-200 mb-3 text-sm uppercase tracking-wider">Reach Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-rose-300 mt-0.5 shrink-0" />
                <span className="text-taupe-400">121 W. Main St, Suite 104<br />Moore, OK 73150</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-rose-300 shrink-0" />
                <a href="tel:4057781440" className="hover:text-rose-300 transition-colors text-taupe-400">(405) 778-1440</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-rose-300 shrink-0" />
                <a href="mailto:kevin@lqs.llc" className="hover:text-rose-300 transition-colors text-taupe-400">Kevin@LQS.LLC</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-taupe-700 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-taupe-500">
          <span>© {new Date().getFullYear()} LQS LLC. All rights reserved. Moore, OK 73150.</span>
          <span className="flex items-center gap-1">Made with <Heart className="w-3 h-3 text-rose-400 fill-rose-400" /> · Moore Chamber of Commerce Member</span>
        </div>
      </div>
    </footer>
  );
}
