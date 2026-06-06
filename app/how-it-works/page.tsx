"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle, Phone, Package, Scissors, Truck,
  AlertCircle, Clock, ArrowRight, MessageSquare,
} from "lucide-react";
import Link from "next/link";

const steps = [
  {
    step: 1, icon: Scissors, title: "Prepare Your Quilt Top",
    description: "Press your quilt top flat and square it up. Trim loose threads and make sure all seams are pressed and lying flat — this ensures the most beautiful finish.",
    tips: ["Press (don't pull) seams flat", "Check that corners are square", "Trim dog-ears if possible"],
  },
  {
    step: 2, icon: Package, title: "Prepare Your Backing",
    description: "Your backing must be at least 4″ larger than your quilt top on all four sides. Piece and press it flat. You are responsible for providing the backing.",
    tips: ["Add at least 4″ extra on ALL sides", "Press backing seams flat", "Example: 60×80 top → 68×88 backing"],
  },
  {
    step: 3, icon: Phone, title: "Contact Kevin",
    description: "Call, text, or email to confirm availability and discuss your quilt. This is also when you'll choose your e2e pattern and get your price estimate.",
    tips: ["Call/text: (405) 778-1440", "Email: Kevin@LQS.LLC", "Have your dimensions ready"],
  },
  {
    step: 4, icon: Truck, title: "Drop Off Your Quilt",
    description: "Bring your quilt top and backing to 121 W. Main St, Suite 104, Moore, OK. Kevin will review everything, confirm your pattern, and give you a final price.",
    tips: ["121 W. Main St, Suite 104, Moore OK", "Bring both quilt top AND backing", "Price confirmed at drop-off"],
  },
  {
    step: 5, icon: Scissors, title: "We Quilt It",
    description: "Kevin loads your quilt, sets up your chosen pattern, and quilts it edge-to-edge using premium #60 Glide thread and quality 80/20 batting. You'll be notified when it's ready.",
    tips: ["80/20 batting loaded by us", "#60 Glide thread + matching bobbin", "We'll call when it's done"],
  },
  {
    step: 6, icon: CheckCircle, title: "Pick Up & Enjoy!",
    description: "Come pick up your beautifully finished quilt! Inspect it with Kevin present so any concerns can be addressed right away. It's ready for binding.",
    tips: ["Inspect before leaving", "Ready for binding (not included)", "Payment due at pick-up"],
  },
];

const faqs = [
  { q: "How much do you charge?", a: "$0.025 per square inch for edge-to-edge quilting. Formula: Width × Length × $0.025. For example, a 60×80 quilt = $120. Batting and thread are included in that price." },
  { q: "Do I need to provide batting?", a: "No — quality 80/20 blend batting is included. You may supply your own, but we reserve the right to decline batting we consider unsuitable to work with." },
  { q: "What do I need to bring?", a: "Your pressed quilt top and your backing material. Backing must be at least 4″ larger on all four sides than your quilt top. We provide the batting and thread." },
  { q: "Do you offer binding?", a: "Not currently. We return your quilt fully quilted and ready for you to add your binding." },
  { q: "How long does it take?", a: "Turnaround time varies depending on current workload. Contact Kevin for current availability and estimated completion time before dropping off." },
  { q: "Can I request a special design?", a: "Absolutely! If you have a particular design in mind that's not in our catalog, Kevin can source it for you. The cost of the design will be added to your quilting bill." },
  { q: "Do you take mail-in orders?", a: "We primarily serve local drop-off customers. Contact Kevin to discuss your specific situation." },
  { q: "How do I pick a pattern?", a: "Browse our Pattern Catalog on this site, or contact Kevin — he loves helping quilters pick a design that complements their colors and piecing style." },
  { q: "What sizes can you handle?", a: "Everything from table runners to king-size quilts. Contact us for extra-large or unusual dimensions to confirm before drop-off." },
  { q: "What if I have a concern about my finished quilt?", a: "Please inspect your quilt with Kevin present at pick-up so anything can be addressed right away. Communication throughout is key — Kevin will contact you if any issue arises during quilting." },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-cream-50">
      <div className="py-14" style={{ background: "linear-gradient(135deg, #fde8f0 0%, #f0ebe6 100%)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle className="w-5 h-5 text-rose-400" />
              <span className="text-rose-400 font-medium text-sm">How It Works</span>
            </div>
            <h1 className="text-4xl font-bold text-taupe-800 mb-3">The Process, Step by Step</h1>
            <p className="text-taupe-500 max-w-2xl text-lg">
              Getting your quilt finished is simple and stress-free. Here's exactly what to expect from prep to pick-up.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-12">
        {/* Steps */}
        <div>
          <h2 className="text-2xl font-bold text-taupe-700 mb-6">6 Simple Steps</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {steps.map((step, i) => (
              <motion.div key={step.step} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.09 }}>
                <Card className="h-full border-rose-50 bg-white hover:shadow-sm transition-shadow">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 bg-rose-100 text-rose-500 rounded-full flex items-center justify-center font-bold text-sm shrink-0 border border-rose-200">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1.5">
                          <step.icon className="w-4 h-4 text-rose-300" />
                          <h3 className="font-semibold text-taupe-700 text-sm">{step.title}</h3>
                        </div>
                        <p className="text-taupe-400 text-xs mb-2.5 leading-relaxed">{step.description}</p>
                        <ul className="space-y-1">
                          {step.tips.map((tip, j) => (
                            <li key={j} className="flex items-start gap-1.5 text-xs text-taupe-400">
                              <ArrowRight className="w-3 h-3 text-rose-300 mt-0.5 shrink-0" />
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quick Reference */}
        <div className="rounded-3xl p-6 md:p-8 border border-rose-100" style={{ background: "linear-gradient(135deg, #fdf0f4 0%, #fdf7f0 100%)" }}>
          <div className="flex items-center gap-2 mb-5">
            <Clock className="w-5 h-5 text-rose-400" />
            <h2 className="text-xl font-bold text-taupe-700">Quick Reference</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              ["Price", "$0.025/sq in · batting & thread included"],
              ["You Bring", "Quilt top + backing (4″ extra all sides)"],
              ["We Provide", "80/20 batting + #60 Glide thread"],
              ["Custom Designs", "Available — design cost added to bill"],
              ["Binding", "Not currently offered"],
              ["Contact", "(405) 778-1440 · Kevin@LQS.LLC"],
            ].map(([label, value]) => (
              <div key={label} className="bg-white rounded-2xl p-4 border border-rose-50 shadow-sm">
                <div className="text-xs font-semibold text-rose-400 uppercase tracking-wide mb-1">{label}</div>
                <div className="text-sm text-taupe-600">{value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <MessageSquare className="w-5 h-5 text-rose-400" />
            <h2 className="text-2xl font-bold text-taupe-700">Frequently Asked Questions</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
                className="bg-white rounded-2xl border border-rose-50 p-5"
              >
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-4 h-4 text-rose-300 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-taupe-700 text-sm mb-1.5">{faq.q}</h3>
                    <p className="text-taupe-400 text-xs leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-3xl p-8 text-center" style={{ background: "linear-gradient(135deg, #f2c4d2 0%, #e4d9cc 100%)" }}>
          <h2 className="text-2xl font-bold text-taupe-800 mb-2">Still have questions?</h2>
          <p className="text-taupe-500 mb-5 text-sm">Kevin is happy to answer anything before you drop off your quilt.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a href="tel:4057781440" className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-rose-400 hover:bg-rose-500 text-white font-medium rounded-full transition-colors shadow-sm">
              <Phone className="w-4 h-4" /> Call / Text (405) 778-1440
            </a>
            <Link href="/about" className="inline-flex items-center justify-center gap-2 px-7 py-3 border border-taupe-300 text-taupe-600 hover:bg-white/50 font-medium rounded-full transition-colors bg-white/30">
              Send a Message
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
