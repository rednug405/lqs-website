"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Scissors,
  Star,
  MapPin,
  Phone,
  ArrowRight,
  Shield,
  CheckCircle,
  DollarSign,
  Heart,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Edge-to-Edge (E2E) Quilting",
    desc: "Choose a beautiful design from our pattern catalog and we'll quilt it from edge to edge using premium #60 Glide thread. Batting included.",
    href: "/services",
    color: "bg-rose-50",
    iconColor: "text-rose-500",
    iconBg: "bg-rose-100",
  },
  {
    icon: Star,
    title: "Pattern Catalog",
    desc: "Dozens of designs to choose from — feathers, swirls, florals, geometrics, and more. Can't find what you love? We can source a special design just for you.",
    href: "/patterns",
    color: "bg-lavender-50",
    iconColor: "text-lavender-500",
    iconBg: "bg-lavender-100",
  },
  {
    icon: Heart,
    title: "Batting Provided",
    desc: "We supply quality 80/20 blend batting so your quilt has the perfect weight and feel. Just bring your top and backing — we handle the rest.",
    href: "/services",
    color: "bg-sage-50",
    iconColor: "text-sage-600",
    iconBg: "bg-sage-100",
  },
];

const whyUs = [
  "Veteran-owned & operated — dedicated to quality",
  "Affordable flat rate: $0.025 per square inch",
  "Premium 80/20 batting provided at no extra charge",
  "#60 Glide thread with matching color bobbin",
  "Locally based in Moore, OK — convenient drop-off",
  "E2E designs available — we can source it for you",
  "Moore Rotary and Chamber of Commerce member",
];

const quiltPhotos = [
  {
    src: "https://galaxy-prod.tlcdn.com/view/user_2sAarrLje1VUsIBHLbxLIzMq0XH/b793fab636534382adf94b2f4700c1b9.webp",
    alt: "Longarm quilted quilt — LQS LLC",
  },
  {
    src: "https://galaxy-prod.tlcdn.com/view/user_2sAarrLje1VUsIBHLbxLIzMq0XH/892687a688d0472792a4c0a5c7fc1d27.webp",
    alt: "Beautiful edge-to-edge quilting pattern",
  },
  {
    src: "https://galaxy-prod.tlcdn.com/view/user_2sAarrLje1VUsIBHLbxLIzMq0XH/1e2b773e0dff457d9ea3780dcf0dc050.webp",
    alt: "Detailed quilting design by LQS LLC",
  },
  {
    src: "https://galaxy-prod.tlcdn.com/view/user_2sAarrLje1VUsIBHLbxLIzMq0XH/439ed6f8bc134e93a2816de227b7d7f8.webp",
    alt: "Custom longarm quilting — Moore OK",
  },
  {
    src: "https://galaxy-prod.tlcdn.com/view/user_2sAarrLje1VUsIBHLbxLIzMq0XH/0b92b71e431446c68f5a52a9f7f21b55.webp",
    alt: "Finished quilt with edge-to-edge design",
  },
  {
    src: "https://galaxy-prod.tlcdn.com/view/user_2sAarrLje1VUsIBHLbxLIzMq0XH/c98c0eb69784408b977184a4b6c96d46.webp",
    alt: "Quilting workmanship from LQS LLC",
  },
  {
    src: "https://galaxy-prod.tlcdn.com/view/user_2sAarrLje1VUsIBHLbxLIzMq0XH/c1276df1ff854d23b00c5554029e1273.webp",
    alt: "Quilt top finished by longarm — LQS LLC",
  },
  {
    src: "https://galaxy-prod.tlcdn.com/view/user_2sAarrLje1VUsIBHLbxLIzMq0XH/c4ac07ff820549829c06ffa8ccc1495d.webp",
    alt: "Longarm quilting result — Moore Oklahoma",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-cream-50">

      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #f8e8ed 0%, #fdf3e8 50%, #f0ebe6 100%)" }}
      >
        {/* Decorative quilt-block pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, #c05a7a 0, #c05a7a 1px, transparent 0, transparent 50%), repeating-linear-gradient(-45deg, #c05a7a 0, #c05a7a 1px, transparent 0, transparent 50%)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-wrap items-center gap-2 mb-5">
                <Badge className="bg-rose-100 text-rose-700 border-rose-200 px-3 py-1 text-xs font-medium">
                  <Shield className="w-3 h-3 mr-1.5" />
                  Veteran-Owned Small Business
                </Badge>
                <Badge className="bg-cream-200 text-taupe-600 border-taupe-200 px-3 py-1 text-xs font-medium">
                  <MapPin className="w-3 h-3 mr-1.5" />
                  Moore, OK
                </Badge>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-taupe-800 mb-5">
                Finish Your Quilt<br />
                <span className="text-rose-400">with Love.</span>
              </h1>

              <p className="text-lg md:text-xl text-taupe-500 mb-8 leading-relaxed max-w-2xl">
                Affordable longarm quilting right here in Moore, Oklahoma — serving Moore, Norman, Midwest City, and the greater OKC area. Batting and thread included. Just bring your quilt top and backing.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="bg-rose-400 hover:bg-rose-500 text-white font-semibold rounded-full shadow-sm px-7">
                  <Link href="/services">
                    See Pricing <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-rose-200 text-rose-600 hover:bg-rose-50 rounded-full px-7 bg-white/70">
                  <Link href="/patterns">Browse Patterns</Link>
                </Button>
                <a
                  href="tel:4057781440"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-taupe-500 hover:text-rose-500 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  (405) 778-1440
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Warm stats ribbon */}
      <section className="bg-rose-400 text-white py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center md:justify-between gap-6 text-sm">
            {[
              ["$0.025 / sq in", "Simple flat rate"],
              ["Batting Included", "80/20 blend"],
              ["Thread Included", "#60 Glide with matching bobbin"],
              ["Custom Designs", "We can source it for you"],
            ].map(([value, label]) => (
              <div key={label} className="flex items-center gap-2 text-center sm:text-left">
                <Sparkles className="w-4 h-4 text-rose-200 shrink-0" />
                <div>
                  <div className="font-semibold text-white text-sm">{value}</div>
                  <div className="text-rose-100 text-xs">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-taupe-800 mb-2">What We Do</h2>
            <p className="text-taupe-400 max-w-md mx-auto text-sm">
              Everything you need to turn your pieced quilt top into a treasured finished quilt.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
              >
                <Card className={`h-full hover:shadow-md transition-shadow border-0 ${svc.color}`}>
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 ${svc.iconBg} rounded-2xl flex items-center justify-center mb-4`}>
                      <svc.icon className={`w-6 h-6 ${svc.iconColor}`} />
                    </div>
                    <h3 className="font-semibold text-taupe-800 text-lg mb-2">{svc.title}</h3>
                    <p className="text-taupe-500 text-sm leading-relaxed mb-4">{svc.desc}</p>
                    <Link
                      href={svc.href}
                      className="inline-flex items-center gap-1 text-sm font-medium text-rose-500 hover:text-rose-600 transition-colors"
                    >
                      Learn more <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing preview */}
      <section className="py-16 bg-cream-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="rounded-3xl overflow-hidden border border-rose-100 shadow-sm"
            style={{ background: "linear-gradient(135deg, #fdf0f4 0%, #fdf7f0 100%)" }}>
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-taupe-800 mb-3">Simple, Honest Pricing</h2>
                <p className="text-taupe-500 leading-relaxed mb-5 text-sm">
                  No confusing tiers. No surprise fees. One flat rate for beautiful edge-to-edge quilting, 
                  with batting and thread already included.
                </p>
                <div className="bg-white/80 rounded-2xl border border-rose-100 p-4 inline-block mb-5 shadow-sm">
                  <div className="text-xs text-taupe-400 mb-1 uppercase tracking-wide">Your estimate</div>
                  <div className="font-mono text-rose-500 font-bold text-xl">
                    Width × Length × $0.025
                  </div>
                </div>
                <div className="block">
                  <Button asChild className="bg-rose-400 hover:bg-rose-500 text-white rounded-full shadow-sm">
                    <Link href="/services">Full Pricing + Calculator <ArrowRight className="ml-2 w-4 h-4" /></Link>
                  </Button>
                </div>
              </div>
              <div className="p-8 bg-white/50 flex flex-col justify-center">
                <div className="space-y-2.5">
                  {[
                    ["Throw (50″×60″)", "$75.00"],
                    ["Twin (60″×80″)", "$120.00"],
                    ["Full/Double (80″×90″)", "$180.00"],
                    ["Queen (90″×108″)", "$243.00"],
                    ["Quitled Jackets start at", "$85"]
                  ].map(([size, price]) => (
                    <div key={size} className="flex justify-between items-center bg-white rounded-xl px-4 py-2.5 border border-rose-50 shadow-sm">
                      <span className="text-taupe-600 text-sm">{size}</span>
                      <span className="font-bold text-rose-500">{price}</span>
                    </div>
                  ))}
                  <p className="text-xs text-taupe-400 text-right pt-1">✓ Batting & thread included</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-taupe-800 mb-2">Our Work</h2>
            <p className="text-taupe-400 max-w-md mx-auto text-sm">
              Real quilts finished right here in Moore, OK. Every stitch made with care.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {quiltPhotos.map((photo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.07 }}
                className="relative group overflow-hidden rounded-2xl aspect-square shadow-sm border border-rose-100"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-taupe-800/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline" className="border-rose-200 text-rose-500 hover:bg-rose-50 rounded-full px-7">
              <Link href="/about">About LQS LLC <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16 bg-cream-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-taupe-800 mb-3">Why Quilters Choose LQS</h2>
              <p className="text-taupe-500 leading-relaxed mb-6 text-sm">
                We're a local, veteran-owned business in Moore, OK. Kevin brings the same care and 
                precision to every single quilt that he gave to his service career.
              </p>
              <ul className="space-y-3">
                {whyUs.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-taupe-600 text-sm">
                    <CheckCircle className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button asChild variant="outline" className="border-rose-200 text-rose-500 hover:bg-rose-50 rounded-full">
                  <Link href="/about">Meet Kevin <ArrowRight className="ml-2 w-4 h-4" /></Link>
                </Button>
              </div>
            </div>

            {/* Testimonial-style card */}
            <div className="bg-white rounded-3xl border border-rose-100 p-8 shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-rose-400 fill-rose-400" />
                ))}
              </div>
              <p className="text-taupe-600 text-sm leading-relaxed italic mb-5">
                "I started LQS LLC because I know how much love goes into a quilt top. 
                Every quilt that comes through the door gets my full attention — I treat it 
                like it's my own. Affordable prices, quality work, and a quick turnaround 
                so you can enjoy your finished quilt sooner."
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-cream-200">
                <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-rose-400" />
                </div>
                <div>
                  <div className="font-semibold text-taupe-800 text-sm">Kevin Gunder</div>
                  <div className="text-xs text-taupe-400">Owner, LQS LLC · Moore, OK</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14" style={{ background: "linear-gradient(135deg, #f2c4d2 0%, #e4d9cc 100%)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <DollarSign className="w-10 h-10 text-rose-400 mx-auto mb-3 opacity-60" />
          <h2 className="text-2xl md:text-3xl font-bold text-taupe-800 mb-3">
            Ready to finish your quilt?
          </h2>
          <p className="text-taupe-500 mb-6 text-sm max-w-md mx-auto">
            Call, text, or email Kevin — he responds quickly and is happy to answer any questions before you bring your quilt in.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Button asChild size="lg" className="bg-rose-400 hover:bg-rose-500 text-white rounded-full shadow-sm px-8">
              <Link href="/about">Contact Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-taupe-300 text-taupe-600 hover:bg-white/60 rounded-full px-8 bg-white/40">
              <Link href="/how-it-works">See How It Works</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
