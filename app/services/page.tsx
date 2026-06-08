"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Scissors,
  CheckCircle,
  XCircle,
  Calculator,
  AlertCircle,
  Package,
  Zap,
  Sparkles,
} from "lucide-react";

export default function ServicesPage() {
  const [width, setWidth] = useState("");
  const [length, setLength] = useState("");

  const calc =
    width && length ? (parseFloat(width) * parseFloat(length) * 0.025).toFixed(2) : null;

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Header */}
      <div className="py-14" style={{ background: "linear-gradient(135deg, #f8e0e8 0%, #fdf3e8 100%)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-2 mb-3">
              <Scissors className="w-5 h-5 text-rose-400" />
              <span className="text-rose-400 font-medium text-sm">Services & Pricing</span>
            </div>
            <h1 className="text-4xl font-bold text-taupe-800 mb-3">What We Offer</h1>
            <p className="text-taupe-500 max-w-2xl text-lg">
              Straightforward edge-to-edge (E2E) longarm quilting at a single affordable rate. 
              Batting and thread are included — no surprises, ever.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-8">

        {/* Pricing Card */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Card className="border-rose-100 shadow-sm overflow-hidden">
            <CardHeader className="border-b border-rose-100" style={{ background: "linear-gradient(135deg, #fdf0f4 0%, #fdf7f0 100%)" }}>
              <CardTitle className="flex items-center gap-2 text-taupe-700 text-lg">
                <Calculator className="w-5 h-5 text-rose-400" />
                Edge-to-Edge Quilting Pricing
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 bg-white">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-taupe-500 mb-4 text-sm leading-relaxed">
                    All edge-to-edge quilting is priced at a flat{" "}
                    <strong className="text-rose-500">$0.025 per square inch</strong> for a 
                    simple design that does not re-trace over itself.
                  </p>
                  <div className="bg-rose-50 rounded-2xl border border-rose-100 p-4 mb-5">
                    <div className="text-xs text-taupe-400 uppercase tracking-wide mb-1">Pricing Formula</div>
                    <div className="font-mono text-rose-500 font-bold text-xl">
                      Width × Length × $0.025
                    </div>
                    <div className="text-xs text-taupe-400 mt-1">All measurements in inches</div>
                  </div>
                  <div className="space-y-2">
                    {[
                      ["Throw (50″×60″)", 50, 60],
                      ["Twin (60″×80″)", 60, 80],
                      ["Full/Double (80″×90″)", 80, 90],
                      ["Queen (90″×108″)", 90, 108],
                    ].map(([label, w, l]) => (
                      <div key={label as string} className="flex justify-between items-center py-2.5 border-b border-cream-200 last:border-0">
                        <span className="text-sm text-taupe-600">{label as string}</span>
                        <span className="font-semibold text-rose-500 bg-rose-50 px-3 py-0.5 rounded-full text-sm">
                          ${((w as number) * (l as number) * 0.025).toFixed(2)}
                        </span>
                      </div>
                    ))}
                    <div className="flex justify-between items-center py-2.5 border-b border-cream-200">
                      <div>
                        <span className="text-sm text-taupe-600">Quilted Jacket</span>
                        <span className="ml-2 text-xs text-lavender-500 bg-lavender-50 px-2 py-0.5 rounded-full font-medium">Custom Quilting</span>
                      </div>
                      <span className="font-semibold text-rose-500 bg-rose-50 px-3 py-0.5 rounded-full text-sm">Starting at $85</span>
                    </div>
                  </div>
                  <div className="mt-4 bg-sage-50 border border-sage-200 rounded-xl px-4 py-3 text-sm text-taupe-600 leading-relaxed">
                    <strong className="text-sage-700">Please note:</strong> A minimum charge of <strong className="text-taupe-700">$50</strong> applies to all longarm quilting services, regardless of quilt size.
                  </div>
                </div>

                {/* Calculator */}
                <div>
                  <div className="bg-cream-100 rounded-2xl border border-rose-100 p-6">
                    <div className="flex items-center gap-2 mb-1">
                      <Calculator className="w-4 h-4 text-rose-400" />
                      <h3 className="font-semibold text-taupe-700">Price Calculator</h3>
                    </div>
                    <p className="text-xs text-taupe-400 mb-4">Enter your quilt top's dimensions in inches.</p>
                    <div className="space-y-3 mb-4">
                      <div>
                        <label className="block text-xs font-medium text-taupe-600 mb-1.5">Width (inches)</label>
                        <input
                          type="number"
                          value={width}
                          onChange={(e) => setWidth(e.target.value)}
                          placeholder="e.g. 60"
                          className="w-full border border-rose-100 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-taupe-600 mb-1.5">Length (inches)</label>
                        <input
                          type="number"
                          value={length}
                          onChange={(e) => setLength(e.target.value)}
                          placeholder="e.g. 80"
                          className="w-full border border-rose-100 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div className={`rounded-2xl p-5 text-center transition-all ${calc ? "bg-white border-2 border-rose-200 shadow-sm" : "bg-white/60 border border-rose-50"}`}>
                      {calc ? (
                        <>
                          <div className="text-xs text-taupe-400 mb-1">Estimated quilting cost</div>
                          <div className="text-5xl font-bold text-rose-400">${calc}</div>
                          <div className="text-xs text-taupe-400 mt-1.5">✓ Batting & thread included</div>
                        </>
                      ) : (
                        <div className="text-taupe-300 text-sm py-2">Enter dimensions to calculate</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Included / You Provide */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6"
        >
          <Card className="border-sage-200 bg-sage-50">
            <CardHeader className="border-b border-sage-100 pb-3">
              <CardTitle className="flex items-center gap-2 text-sage-700 text-base">
                <CheckCircle className="w-5 h-5" />
                What We Provide
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-5">
              <div className="flex items-start gap-3">
                <Package className="w-5 h-5 text-sage-500 mt-0.5 shrink-0" />
                <div>
                  <div className="font-medium text-taupe-700 text-sm">80/20 Blend Batting</div>
                  <p className="text-taupe-400 text-xs mt-1 leading-relaxed">
                    High-quality 80% cotton / 20% polyester batting for the perfect weight and feel. 
                    You may supply your own, but we reserve the right to decline batting we consider 
                    unsuitable.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-sage-500 mt-0.5 shrink-0" />
                <div>
                  <div className="font-medium text-taupe-700 text-sm">#60 Glide Thread</div>
                  <p className="text-taupe-400 text-xs mt-1 leading-relaxed">
                    Premium #60 Glide thread on top with a matching color bobbin for a beautiful, 
                    consistent finish throughout your quilt.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Scissors className="w-5 h-5 text-sage-500 mt-0.5 shrink-0" />
                <div>
                  <div className="font-medium text-taupe-700 text-sm">Edge-to-Edge Pattern Quilting</div>
                  <p className="text-taupe-400 text-xs mt-1 leading-relaxed">
                    Your chosen design quilted across the entire quilt. Browse our pattern catalog or 
                    request a special design — we can source it for you (a sourced design cost added to your bill).
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-lavender-200 bg-lavender-50">
            <CardHeader className="border-b border-lavender-100 pb-3">
              <CardTitle className="flex items-center gap-2 text-lavender-700 text-base">
                <AlertCircle className="w-5 h-5" />
                What You Provide
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-5">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-lavender-500 mt-0.5 shrink-0" />
                <div>
                  <div className="font-medium text-taupe-700 text-sm">Your Quilt Top</div>
                  <p className="text-taupe-400 text-xs mt-1 leading-relaxed">
                    Pressed and squared up, with seams trimmed and lying flat. Let us know about 
                    any special considerations at drop-off.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-lavender-500 mt-0.5 shrink-0" />
                <div>
                  <div className="font-medium text-taupe-700 text-sm">Backing Material</div>
                  <p className="text-taupe-400 text-xs mt-1 leading-relaxed">
                    Backing is <strong className="text-taupe-600">not provided</strong>. You must supply at least{" "}
                    <strong className="text-taupe-600">4″ extra on all four sides</strong> beyond your quilt top's 
                    measurements. (Example: 60×80 top → backing should be at least 68×88.)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Custom Design note */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
          <div className="bg-rose-50 border border-rose-100 rounded-2xl p-5 flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-rose-400 mt-0.5 shrink-0" />
            <div>
              <div className="font-semibold text-taupe-700 mb-1">Want a Special Design?</div>
              <p className="text-taupe-500 text-sm leading-relaxed">
                Don't see exactly what you're looking for in our catalog? No problem — if you have a 
                particular design in mind, just ask. Kevin can source the pattern for you. The cost of 
                the design will be added to your quilting bill. Contact us to discuss your idea before drop-off.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Not Currently Offered */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <Card className="border-cream-300 bg-cream-100">
            <CardContent className="p-5">
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-taupe-300 mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-semibold text-taupe-600 mb-1 text-sm">Binding Service</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    A binding service is available right next door by Joyce (Kevin's wife) at <a href="https://www.seamscreations.com">Seams Creations LLC</a>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Backing callout */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
          <div className="bg-lavender-50 border border-lavender-100 rounded-2xl p-5 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-lavender-400 mt-0.5 shrink-0" />
            <div>
              <div className="font-semibold text-taupe-700 mb-1">Backing Requirement Reminder</div>
              <p className="text-taupe-500 text-sm leading-relaxed">
                Please provide at least <strong className="text-taupe-700">4″ extra on all four sides</strong> beyond 
                your quilt top's measurements. This extra backing is required for the longarm machine to 
                properly clamp and quilt your top. Insufficient backing may delay or prevent completion.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
