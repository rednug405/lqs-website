"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Scissors, Sparkles } from "lucide-react";

type Category = "All" | "Floral & Botanical" | "Hearts" | "Swirls & Loops" | "Geometric & Classic" | "Fun & Whimsical";

interface Pattern {
  name: string;
  category: Exclude<Category, "All">;
  img: string;
}

function slug(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

const patterns: Pattern[] = [
  // Floral & Botanical
  { name: "Apple Leaves", category: "Floral & Botanical", img: "/patterns/apple-leaves.png" },
  { name: "Audree", category: "Floral & Botanical", img: "/patterns/audree.png" },
  { name: "Blooms", category: "Floral & Botanical", img: "/patterns/blooms.png" },
  { name: "Blossom Cluster E2E", category: "Floral & Botanical", img: "/patterns/blossom-cluster-e2e.png" },
  { name: "Blossom E2E", category: "Floral & Botanical", img: "/patterns/blossom-e2e.png" },
  { name: "Clover E2E", category: "Floral & Botanical", img: "/patterns/clover-e2e.png" },
  { name: "Cornflower 1", category: "Floral & Botanical", img: "/patterns/cornflower-1.png" },
  { name: "Cornflower 2", category: "Floral & Botanical", img: "/patterns/cornflower-2.png" },
  { name: "Cornflower 3", category: "Floral & Botanical", img: "/patterns/cornflower-3.png" },
  { name: "Daisy Border", category: "Floral & Botanical", img: "/patterns/daisy-border.png" },
  { name: "Daisy Border Continuous", category: "Floral & Botanical", img: "/patterns/daisy-border-continuous.png" },
  { name: "Daisy Marie", category: "Floral & Botanical", img: "/patterns/daisy-marie.png" },
  { name: "Daisy Square Continuous", category: "Floral & Botanical", img: "/patterns/daisy-square-continuous.png" },
  { name: "Daisychain E2E", category: "Floral & Botanical", img: "/patterns/daisychain-e2e.png" },
  { name: "Feather Delight", category: "Floral & Botanical", img: "/patterns/feather-delight.png" },
  { name: "Field of Flowers", category: "Floral & Botanical", img: "/patterns/field-of-flowers.png" },
  { name: "Flipped on Feathers", category: "Floral & Botanical", img: "/patterns/flipped-on-feathers.png" },
  { name: "Flower Leaf Border", category: "Floral & Botanical", img: "/patterns/flower-leaf-border.png" },
  { name: "Flowers on Parade", category: "Floral & Botanical", img: "/patterns/flowers-on-parade.png" },
  { name: "Fluffy Clouds", category: "Floral & Botanical", img: "/patterns/fluffy-clouds.png" },
  { name: "Flutterbys", category: "Floral & Botanical", img: "/patterns/flutterbys.png" },
  { name: "Holly Berry", category: "Floral & Botanical", img: "/patterns/holly-berry.png" },
  { name: "Leaf and Circles Triangle", category: "Floral & Botanical", img: "/patterns/leaf-and-circles-triangle.png" },
  { name: "Leaf Trail", category: "Floral & Botanical", img: "/patterns/leaf-trail.png" },
  { name: "Leaf Up", category: "Floral & Botanical", img: "/patterns/leaf-up.png" },
  { name: "Leafy Vines", category: "Floral & Botanical", img: "/patterns/leafy-vines.png" },
  { name: "Leaves Alternating", category: "Floral & Botanical", img: "/patterns/leaves-alternating.png" },
  { name: "Leaves Basic", category: "Floral & Botanical", img: "/patterns/leaves-basic.png" },
  { name: "Leaves with Spine", category: "Floral & Botanical", img: "/patterns/leaves-with-spine.png" },
  { name: "Oak Leaf", category: "Floral & Botanical", img: "/patterns/oak-leaf.png" },
  { name: "Orange Peels", category: "Floral & Botanical", img: "/patterns/orange-peels.png" },
  { name: "Paisley Curl Border", category: "Floral & Botanical", img: "/patterns/paisley-curl-border.png" },
  { name: "Rose Garden", category: "Floral & Botanical", img: "/patterns/rose-garden.png" },
  { name: "Single Leaf", category: "Floral & Botanical", img: "/patterns/single-leaf.png" },
  { name: "Sunshine 1", category: "Floral & Botanical", img: "/patterns/sunshine-1.png" },
  { name: "Trailing Leaves", category: "Floral & Botanical", img: "/patterns/trailing-leaves.png" },
  { name: "Tree 1", category: "Floral & Botanical", img: "/patterns/tree-1.png" },
  { name: "Tri-Leaf Continuous", category: "Floral & Botanical", img: "/patterns/tri-leaf-continuous.png" },
  { name: "Tulip Border", category: "Floral & Botanical", img: "/patterns/tulip-border.png" },
  { name: "Tulips in a Row", category: "Floral & Botanical", img: "/patterns/tulips-in-a-row.png" },
  { name: "Tulips Triangle", category: "Floral & Botanical", img: "/patterns/tulips-triangle.png" },
  // Hearts
  { name: "Heart Border 2", category: "Hearts", img: "/patterns/heart-border-2.png" },
  { name: "Heart Border 3", category: "Hearts", img: "/patterns/heart-border-3.png" },
  { name: "Heart in Heart Border", category: "Hearts", img: "/patterns/heart-in-heart-border.png" },
  { name: "Heart Triangle", category: "Hearts", img: "/patterns/heart-triangle.png" },
  { name: "Heart Trio Triangle", category: "Hearts", img: "/patterns/heart-trio-triangle.png" },
  { name: "Red Hot Hearts", category: "Hearts", img: "/patterns/red-hot-hearts.png" },
  // Swirls & Loops
  { name: "Alternating Loops 1", category: "Swirls & Loops", img: "/patterns/alternating-loops-1.png" },
  { name: "Alternating Loops 2", category: "Swirls & Loops", img: "/patterns/alternating-loops-2.png" },
  { name: "Balloon Continuous Line", category: "Swirls & Loops", img: "/patterns/balloon-continuous-line.png" },
  { name: "Blustery Breeze", category: "Swirls & Loops", img: "/patterns/blustery-breeze.png" },
  { name: "Castle Scroll", category: "Swirls & Loops", img: "/patterns/castle-scroll.png" },
  { name: "Curls", category: "Swirls & Loops", img: "/patterns/curls.png" },
  { name: "Curls Too", category: "Swirls & Loops", img: "/patterns/curls-too.png" },
  { name: "Double Curls", category: "Swirls & Loops", img: "/patterns/double-curls.png" },
  { name: "Double Swirl 2", category: "Swirls & Loops", img: "/patterns/double-swirl-2.png" },
  { name: "Lazy Curl Sash", category: "Swirls & Loops", img: "/patterns/lazy-curl-sash.png" },
  { name: "Loop 2 in a Line", category: "Swirls & Loops", img: "/patterns/loop-2-in-a-line.png" },
  { name: "Loop in a Line", category: "Swirls & Loops", img: "/patterns/loop-in-a-line.png" },
  { name: "Loop in Loops", category: "Swirls & Loops", img: "/patterns/loop-in-loops.png" },
  { name: "Loops by Three", category: "Swirls & Loops", img: "/patterns/loops-by-three.png" },
  { name: "Loops Up and Down", category: "Swirls & Loops", img: "/patterns/loops-up-and-down.png" },
  { name: "Music Meander", category: "Swirls & Loops", img: "/patterns/music-meander.png" },
  { name: "Ribbon Continuous", category: "Swirls & Loops", img: "/patterns/ribbon-continuous.png" },
  { name: "Rolling Along", category: "Swirls & Loops", img: "/patterns/rolling-along.png" },
  { name: "Scroll Border", category: "Swirls & Loops", img: "/patterns/scroll-border.png" },
  { name: "Spiral", category: "Swirls & Loops", img: "/patterns/spiral.png" },
  { name: "Squiggle", category: "Swirls & Loops", img: "/patterns/squiggle.png" },
  { name: "Stipple", category: "Swirls & Loops", img: "/patterns/stipple.png" },
  { name: "Stipple 2", category: "Swirls & Loops", img: "/patterns/stipple-2.png" },
  { name: "Three Loop Border", category: "Swirls & Loops", img: "/patterns/three-loop-border.png" },
  { name: "Undulating Wave", category: "Swirls & Loops", img: "/patterns/undulating-wave.png" },
  { name: "Water Meander", category: "Swirls & Loops", img: "/patterns/water-meander.png" },
  { name: "Wind", category: "Swirls & Loops", img: "/patterns/wind.png" },
  // Geometric & Classic
  { name: "Alternating Baptist Fan", category: "Geometric & Classic", img: "/patterns/UE-Alternating Baptist Fan.png" }
  { name: "UE-Hexi", category: "Geometric & Classic", img: "/patterns/UE-Hexi.png" }
  { name: "UE-Snow Crystals", category: "Geometric & Classic", img: "/patterns/UE-Snow Crystals.png" }
  { name: "UE-Stars", category: "Geometric & Classic", img: "/patterns/UE-Stars.png" }
  { name: "Baptist Fan", category: "Geometric & Classic", img: "/patterns/baptist-fan.png" },
  { name: "Bubble Scale", category: "Geometric & Classic", img: "/patterns/bubble-scale.png" },
  { name: "Cat Eyes 2", category: "Geometric & Classic", img: "/patterns/cat-eyes-2.png" },
  { name: "Chess Set", category: "Geometric & Classic", img: "/patterns/chess-set.png" },
  { name: "Clamshell", category: "Geometric & Classic", img: "/patterns/clamshell.png" },
  { name: "Clamshell with Arc", category: "Geometric & Classic", img: "/patterns/clamshell-with-arc.png" },
  { name: "Clamshell with Curl", category: "Geometric & Classic", img: "/patterns/clamshell-with-curl.png" },
  { name: "Clamshell with Loop", category: "Geometric & Classic", img: "/patterns/clamshell-with-loop.png" },
  { name: "Design 1 Border", category: "Geometric & Classic", img: "/patterns/design-1-border.png" },
  { name: "Diamond Eyes", category: "Geometric & Classic", img: "/patterns/diamond-eyes.png" },
  { name: "Double Circle Continuous", category: "Geometric & Classic", img: "/patterns/double-circle-continuous.png" },
  { name: "Four Line Gap Piano Key", category: "Geometric & Classic", img: "/patterns/four-line-gap-piano-key.png" },
  { name: "Greek Squared", category: "Geometric & Classic", img: "/patterns/greek-squared.png" },
  { name: "Line Illusion Border", category: "Geometric & Classic", img: "/patterns/line-illusion-border.png" },
  { name: "Peppermint Candy", category: "Geometric & Classic", img: "/patterns/peppermint-candy.png" },
  { name: "Piano Key Swag", category: "Geometric & Classic", img: "/patterns/piano-key-swag.png" },
  { name: "Ribbon Candy", category: "Geometric & Classic", img: "/patterns/ribbon-candy.png" },
  { name: "Ribbon Candy Diamond Small", category: "Geometric & Classic", img: "/patterns/ribbon-candy-diamond-small.png" },
  { name: "Rope", category: "Geometric & Classic", img: "/patterns/rope.png" },
  { name: "Snail Square 1", category: "Geometric & Classic", img: "/patterns/snail-square-1.png" },
  { name: "Snail Square 2", category: "Geometric & Classic", img: "/patterns/snail-square-2.png" },
  { name: "Snail Square 3", category: "Geometric & Classic", img: "/patterns/snail-square-3.png" },
  { name: "Snail Square 4", category: "Geometric & Classic", img: "/patterns/snail-square-4.png" },
  { name: "Snail Square 5", category: "Geometric & Classic", img: "/patterns/snail-square-5.png" },
  { name: "Snail Square Angle", category: "Geometric & Classic", img: "/patterns/snail-square-angle.png" },
  { name: "Spine 1", category: "Geometric & Classic", img: "/patterns/spine-1.png" },
  { name: "Spine 2", category: "Geometric & Classic", img: "/patterns/spine-2.png" },
  { name: "Square Spiral", category: "Geometric & Classic", img: "/patterns/square-spiral.png" },
  { name: "Straight Line Stipple", category: "Geometric & Classic", img: "/patterns/straight-line-stipple.png" },
  { name: "Tiger Tooth", category: "Geometric & Classic", img: "/patterns/tiger-tooth.png" },
  { name: "Triangle Lacing", category: "Geometric & Classic", img: "/patterns/triangle-lacing.png" },
  { name: "Triangle Loops", category: "Geometric & Classic", img: "/patterns/triangle-loops.png" },
  { name: "Two Line Gap Piano Key", category: "Geometric & Classic", img: "/patterns/two-line-gap-piano-key.png" },
  { name: "Wavy Cogs", category: "Geometric & Classic", img: "/patterns/wavy-cogs.png" },
  { name: "Wrenchworks", category: "Geometric & Classic", img: "/patterns/wrenchworks.png" },
  { name: "Zig Zag", category: "Geometric & Classic", img: "/patterns/zig-zag.png" },
  // Fun & Whimsical
  { name: "UE-Animal Crackers", category: "Fun & Whimsical", img: "/patterns/UE-Animal Crackers.png" }
  { name: "UE-Halloween", category: "Fun & Whimsical", img: "/patterns/UE-Holloween.png" }
  { name: "UE-Animal Crackers", category: "Fun & Whimsical", img: "/patterns/UE-Animal Crackers.png" }
  { name: "UE-Halloween", category: "Fun & Whimsical", img: "/patterns/UE-Holloween.png" }
  { name: "Bunny and Stars E2E", category: "Fun & Whimsical", img: "/patterns/bunny-and-stars-e2e.png" },
  { name: "Dinosaurs", category: "Fun & Whimsical", img: "/patterns/dinosaurs.png" },
];

const categories: Category[] = ["All", "Floral & Botanical", "Hearts", "Swirls & Loops", "Geometric & Classic", "Fun & Whimsical"];
const categoryEmoji: Record<string, string> = {
  "All": "✨",
  "Floral & Botanical": "🌸",
  "Hearts": "💕",
  "Swirls & Loops": "🌀",
  "Geometric & Classic": "◇",
  "Fun & Whimsical": "🐰",
};

export default function PatternsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered = patterns.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Header */}
      <div className="py-14" style={{ background: "linear-gradient(135deg, #f8e0e8 0%, #fdf3e8 100%)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-2 mb-3">
              <Scissors className="w-5 h-5 text-rose-400" />
              <span className="text-rose-400 font-medium text-sm">Pattern Catalog</span>
            </div>
            <h1 className="text-4xl font-bold text-taupe-800 mb-3">Choose Your Design</h1>
            <p className="text-taupe-500 max-w-2xl text-lg">
              Browse {patterns.length}+ edge-to-edge designs from the HQ continuous line collection. 
              Don&apos;t see what you&apos;re looking for? We can source special designs — just ask!
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        {/* Search + Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-taupe-400" />
            <input
              type="text"
              placeholder="Search designs…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 border border-rose-100 rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-rose-300"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-rose-400 text-white shadow-sm"
                    : "bg-white border border-rose-100 text-taupe-500 hover:border-rose-300"
                }`}
              >
                {categoryEmoji[cat]} {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Count */}
        <p className="text-xs text-taupe-400 mb-5">
          Showing {filtered.length} of {patterns.length} designs
        </p>

        {/* Pattern Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
          {filtered.map((pattern, i) => (
            <motion.div
              key={pattern.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: Math.min(i * 0.02, 0.3) }}
              className="bg-white rounded-2xl border border-rose-50 shadow-sm hover:shadow-md hover:border-rose-200 transition-all group overflow-hidden"
            >
              <div className="aspect-square bg-cream-50 overflow-hidden p-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={pattern.img}
                  alt={pattern.name}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="px-2 pb-2.5 pt-1.5">
                <p className="text-taupe-700 text-xs font-medium leading-tight text-center">{pattern.name}</p>
                <p className="text-taupe-300 text-[10px] text-center mt-0.5">{categoryEmoji[pattern.category]}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-taupe-400">
            <p className="text-lg mb-1">No designs match your search.</p>
            <p className="text-sm">Try a different keyword or browse all categories.</p>
          </div>
        )}

        {/* Custom design CTA */}
        <div className="mt-12 bg-rose-50 border border-rose-100 rounded-2xl p-6 flex items-start gap-4">
          <Sparkles className="w-6 h-6 text-rose-400 mt-0.5 shrink-0" />
          <div>
            <h3 className="font-semibold text-taupe-700 mb-1">Don&apos;t see the perfect design?</h3>
            <p className="text-taupe-500 text-sm leading-relaxed">
              If you have a particular design in mind that isn&apos;t in our catalog, Kevin can source it for you. 
              The cost of the design will be added to your quilting bill.{" "}
              <a href="/about" className="text-rose-500 hover:text-rose-600 font-medium underline underline-offset-2">
                Contact us to discuss →
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
