"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Scissors, Sparkles } from "lucide-react";

type Category = "All" | "Floral & Botanical" | "Hearts" | "Swirls & Loops" | "Geometric & Classic" | "Fun & Whimsical";

interface Pattern {
  name: string;
  category: Exclude<Category, "All">;
}

const patterns: Pattern[] = [
  // Floral & Botanical
  { name: "Apple Leaves", category: "Floral & Botanical" },
  { name: "Audree", category: "Floral & Botanical" },
  { name: "Blooms", category: "Floral & Botanical" },
  { name: "Blossom Cluster E2E", category: "Floral & Botanical" },
  { name: "Blossom E2E", category: "Floral & Botanical" },
  { name: "Clover Edge to Edge", category: "Floral & Botanical" },
  { name: "Cornflower", category: "Floral & Botanical" },
  { name: "Cornflower 2", category: "Floral & Botanical" },
  { name: "Cornflower 3", category: "Floral & Botanical" },
  { name: "Daisy Border", category: "Floral & Botanical" },
  { name: "Daisy Border Continuous", category: "Floral & Botanical" },
  { name: "Daisy Marie", category: "Floral & Botanical" },
  { name: "Daisy Square Continuous", category: "Floral & Botanical" },
  { name: "Daisychain E2E", category: "Floral & Botanical" },
  { name: "Feather Delight", category: "Floral & Botanical" },
  { name: "Field of Flowers", category: "Floral & Botanical" },
  { name: "Flipped on Feathers", category: "Floral & Botanical" },
  { name: "Flower Leaf Border", category: "Floral & Botanical" },
  { name: "Flowers on Parade", category: "Floral & Botanical" },
  { name: "Fluffy Clouds", category: "Floral & Botanical" },
  { name: "Flutterbys", category: "Floral & Botanical" },
  { name: "Holly Berry", category: "Floral & Botanical" },
  { name: "Leaf and Circles Triangle", category: "Floral & Botanical" },
  { name: "Leaf Trail", category: "Floral & Botanical" },
  { name: "Leaf Up", category: "Floral & Botanical" },
  { name: "Leafy Vines", category: "Floral & Botanical" },
  { name: "Leaves Alternating", category: "Floral & Botanical" },
  { name: "Leaves Basic", category: "Floral & Botanical" },
  { name: "Leaves with Spine", category: "Floral & Botanical" },
  { name: "Oak Leaf", category: "Floral & Botanical" },
  { name: "Orange Peels", category: "Floral & Botanical" },
  { name: "Paisley Curl Border", category: "Floral & Botanical" },
  { name: "Rose Garden", category: "Floral & Botanical" },
  { name: "Single Leaf", category: "Floral & Botanical" },
  { name: "Sunshine 1", category: "Floral & Botanical" },
  { name: "Trailing Leaves", category: "Floral & Botanical" },
  { name: "Tree 1", category: "Floral & Botanical" },
  { name: "Tri-Leaf Continuous", category: "Floral & Botanical" },
  { name: "Tulip Border", category: "Floral & Botanical" },
  { name: "Tulips in a Row", category: "Floral & Botanical" },
  { name: "Tulips Triangle", category: "Floral & Botanical" },
  // Hearts
  { name: "Heart Border 2", category: "Hearts" },
  { name: "Heart Border 3", category: "Hearts" },
  { name: "Heart in Heart Border", category: "Hearts" },
  { name: "Heart Triangle", category: "Hearts" },
  { name: "Heart Trio Triangle", category: "Hearts" },
  { name: "Red Hot Hearts", category: "Hearts" },
  // Swirls & Loops
  { name: "Alternating Loops 1", category: "Swirls & Loops" },
  { name: "Alternating Loops 2", category: "Swirls & Loops" },
  { name: "Balloon Continuous Line", category: "Swirls & Loops" },
  { name: "Blustery Breeze", category: "Swirls & Loops" },
  { name: "Castle Scroll", category: "Swirls & Loops" },
  { name: "Curls", category: "Swirls & Loops" },
  { name: "Curls Too", category: "Swirls & Loops" },
  { name: "Double Curls", category: "Swirls & Loops" },
  { name: "Double Swirl 2", category: "Swirls & Loops" },
  { name: "Lazy Curl Sash", category: "Swirls & Loops" },
  { name: "Loop 2 in a Line", category: "Swirls & Loops" },
  { name: "Loop in a Line", category: "Swirls & Loops" },
  { name: "Loop in Loops", category: "Swirls & Loops" },
  { name: "Loops by Three", category: "Swirls & Loops" },
  { name: "Loops Up and Down", category: "Swirls & Loops" },
  { name: "Music Meander", category: "Swirls & Loops" },
  { name: "Ribbon Continuous", category: "Swirls & Loops" },
  { name: "Rolling Along", category: "Swirls & Loops" },
  { name: "Scroll Border", category: "Swirls & Loops" },
  { name: "Spiral", category: "Swirls & Loops" },
  { name: "Squiggle", category: "Swirls & Loops" },
  { name: "Stipple", category: "Swirls & Loops" },
  { name: "Stipple 2", category: "Swirls & Loops" },
  { name: "Three Loop Border", category: "Swirls & Loops" },
  { name: "Undulating Wave", category: "Swirls & Loops" },
  { name: "Water Meander", category: "Swirls & Loops" },
  { name: "Wind", category: "Swirls & Loops" },
  // Geometric & Classic
  { name: "Baptist Fan", category: "Geometric & Classic" },
  { name: "Bubble Scale", category: "Geometric & Classic" },
  { name: "Cat Eyes 2", category: "Geometric & Classic" },
  { name: "Chess Set", category: "Geometric & Classic" },
  { name: "Clamshell", category: "Geometric & Classic" },
  { name: "Clamshell with Arc", category: "Geometric & Classic" },
  { name: "Clamshell with Curl", category: "Geometric & Classic" },
  { name: "Clamshell with Loop", category: "Geometric & Classic" },
  { name: "Design 1 Border", category: "Geometric & Classic" },
  { name: "Diamond Eyes", category: "Geometric & Classic" },
  { name: "Double Circle Continuous", category: "Geometric & Classic" },
  { name: "Four Line Gap Piano Key", category: "Geometric & Classic" },
  { name: "Greek Squared", category: "Geometric & Classic" },
  { name: "Line Illusion Border", category: "Geometric & Classic" },
  { name: "Peppermint Candy", category: "Geometric & Classic" },
  { name: "Piano Key Swag", category: "Geometric & Classic" },
  { name: "Ribbon Candy", category: "Geometric & Classic" },
  { name: "Ribbon Candy Diamond Small", category: "Geometric & Classic" },
  { name: "Rope", category: "Geometric & Classic" },
  { name: "Snail Square 1", category: "Geometric & Classic" },
  { name: "Snail Square 2", category: "Geometric & Classic" },
  { name: "Snail Square 3", category: "Geometric & Classic" },
  { name: "Snail Square 4", category: "Geometric & Classic" },
  { name: "Snail Square 5", category: "Geometric & Classic" },
  { name: "Snail Square Angle", category: "Geometric & Classic" },
  { name: "Spine 1", category: "Geometric & Classic" },
  { name: "Spine 2", category: "Geometric & Classic" },
  { name: "Square Spiral", category: "Geometric & Classic" },
  { name: "Straight Line Stipple", category: "Geometric & Classic" },
  { name: "Tiger Tooth", category: "Geometric & Classic" },
  { name: "Triangle Lacing", category: "Geometric & Classic" },
  { name: "Triangle Loops", category: "Geometric & Classic" },
  { name: "Two Line Gap Piano Key", category: "Geometric & Classic" },
  { name: "Wavy Cogs", category: "Geometric & Classic" },
  { name: "Wrenchworks", category: "Geometric & Classic" },
  { name: "Zig Zag", category: "Geometric & Classic" },
  // Fun & Whimsical
  { name: "Bunny and Stars E2E", category: "Fun & Whimsical" },
  { name: "Dinosaurs", category: "Fun & Whimsical" },
];

const categories: Category[] = [
  "All",
  "Floral & Botanical",
  "Hearts",
  "Swirls & Loops",
  "Geometric & Classic",
  "Fun & Whimsical",
];

const categoryStyles: Record<Category, { bg: string; text: string; badge: string; dot: string }> = {
  "All":                { bg: "bg-rose-400",     text: "text-white",      badge: "bg-rose-100 text-rose-700",        dot: "bg-rose-400" },
  "Floral & Botanical": { bg: "bg-rose-50",      text: "text-rose-700",   badge: "bg-rose-100 text-rose-600",        dot: "bg-rose-400" },
  "Hearts":             { bg: "bg-red-50",       text: "text-red-700",    badge: "bg-red-100 text-red-600",          dot: "bg-red-400" },
  "Swirls & Loops":     { bg: "bg-lavender-50",  text: "text-lavender-700", badge: "bg-lavender-100 text-lavender-700", dot: "bg-lavender-400" },
  "Geometric & Classic":{ bg: "bg-sage-50",      text: "text-sage-700",   badge: "bg-sage-100 text-sage-700",        dot: "bg-sage-500" },
  "Fun & Whimsical":    { bg: "bg-cream-200",    text: "text-taupe-700",  badge: "bg-cream-300 text-taupe-700",      dot: "bg-taupe-400" },
};

const categoryEmojis: Record<Category, string> = {
  "All": "✨",
  "Floral & Botanical": "🌸",
  "Hearts": "♥",
  "Swirls & Loops": "〰",
  "Geometric & Classic": "◇",
  "Fun & Whimsical": "🐰",
};

export default function PatternsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [search, setSearch] = useState("");

  const filtered = patterns.filter((p) => {
    const matchesCat = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const counts: Record<Category, number> = {
    "All": patterns.length,
    "Floral & Botanical": patterns.filter(p => p.category === "Floral & Botanical").length,
    "Hearts": patterns.filter(p => p.category === "Hearts").length,
    "Swirls & Loops": patterns.filter(p => p.category === "Swirls & Loops").length,
    "Geometric & Classic": patterns.filter(p => p.category === "Geometric & Classic").length,
    "Fun & Whimsical": patterns.filter(p => p.category === "Fun & Whimsical").length,
  };

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Header */}
      <div className="py-14" style={{ background: "linear-gradient(135deg, #fde8f0 0%, #fdf3e8 100%)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-2 mb-3">
              <Scissors className="w-5 h-5 text-rose-400" />
              <span className="text-rose-400 font-medium text-sm">Pattern Catalog</span>
            </div>
            <h1 className="text-4xl font-bold text-taupe-800 mb-3">Edge-to-Edge Design Catalog</h1>
            <p className="text-taupe-500 max-w-2xl text-lg leading-relaxed">
              Over <strong className="text-taupe-700">{patterns.length} designs</strong> to choose from — 
              all from the HQ Designs / Continuous Line collection. Browse by category or search by name. 
              Can't find what you love? Kevin can source a special design just for you.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">

        {/* Category Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-2xl p-3 text-center transition-all border-2 ${
                activeCategory === cat
                  ? "border-rose-300 shadow-md bg-white"
                  : "border-transparent bg-white hover:border-rose-100"
              }`}
            >
              <div className="text-xl mb-1">{categoryEmojis[cat]}</div>
              <div className={`text-xs font-semibold leading-tight ${activeCategory === cat ? "text-rose-600" : "text-taupe-600"}`}>
                {cat === "All" ? "All Designs" : cat}
              </div>
              <div className={`text-xs mt-0.5 ${activeCategory === cat ? "text-rose-400" : "text-taupe-300"}`}>
                {counts[cat]}
              </div>
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-taupe-300" />
          <input
            type="text"
            placeholder="Search by design name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 border border-rose-100 rounded-2xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-rose-200 shadow-sm"
          />
          {search && (
            <button onClick={() => setSearch("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-taupe-400 hover:text-rose-400">
              Clear
            </button>
          )}
        </div>

        <div className="mb-4 text-sm text-taupe-400">
          Showing <span className="font-semibold text-taupe-700">{filtered.length}</span> design{filtered.length !== 1 ? "s" : ""}
          {activeCategory !== "All" ? <span> · <span className="text-rose-400">{activeCategory}</span></span> : ""}
        </div>

        {/* Pattern Grid — compact list cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5">
          {filtered.map((pattern, i) => {
            const style = categoryStyles[pattern.category];
            return (
              <motion.div
                key={pattern.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: Math.min(i * 0.02, 0.4) }}
                className="bg-white rounded-2xl border border-rose-50 p-3 hover:shadow-sm transition-shadow group"
              >
                <div className={`w-6 h-1.5 rounded-full ${style.dot} mb-2`} />
                <div className="font-medium text-taupe-700 text-xs leading-snug mb-1.5">{pattern.name}</div>
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${style.badge}`}>
                  {pattern.category === "Floral & Botanical" ? "Floral" :
                   pattern.category === "Geometric & Classic" ? "Geometric" :
                   pattern.category === "Fun & Whimsical" ? "Whimsical" :
                   pattern.category === "Swirls & Loops" ? "Swirls" :
                   pattern.category}
                </span>
              </motion.div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-taupe-300">
            <Scissors className="w-10 h-10 mx-auto mb-3 opacity-30" />
            <p className="text-sm">No designs match "{search}"</p>
            <button onClick={() => { setSearch(""); setActiveCategory("All"); }} className="mt-2 text-rose-400 text-sm hover:underline">
              Clear filters
            </button>
          </div>
        )}

        {/* Custom Design CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-10 rounded-3xl p-8 text-center border border-rose-100"
          style={{ background: "linear-gradient(135deg, #fdf0f4 0%, #fdf7f0 100%)" }}
        >
          <Sparkles className="w-8 h-8 text-rose-300 mx-auto mb-3" />
          <h3 className="font-bold text-taupe-700 text-xl mb-2">Don't See What You're Dreaming Of?</h3>
          <p className="text-taupe-400 text-sm mb-2 max-w-lg mx-auto leading-relaxed">
            If you have a particular design in mind that's not in this catalog, just ask. 
            Kevin can source special designs for you — the cost of the design will simply be 
            added to your quilting bill.
          </p>
          <p className="text-taupe-300 text-xs mb-5">All designs are from the HQ Designs / Continuous Line collection.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a href="tel:4057781440"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-rose-400 hover:bg-rose-500 text-white text-sm font-medium rounded-full transition-colors shadow-sm">
              Call / Text (405) 778-1440
            </a>
            <a href="mailto:kevin@lqs.llc"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 border border-rose-200 text-rose-500 hover:bg-rose-50 text-sm font-medium rounded-full transition-colors bg-white">
              Email Kevin@LQS.LLC
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
