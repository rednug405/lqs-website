"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, MapPin, Phone, Mail, Star, Scissors, Users, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream-50">
      <div className="py-14" style={{ background: "linear-gradient(135deg, #fde8f0 0%, #f0ebe6 100%)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-2 mb-3">
              <Heart className="w-5 h-5 text-rose-400" />
              <span className="text-rose-400 font-medium text-sm">About & Contact</span>
            </div>
            <h1 className="text-4xl font-bold text-taupe-800 mb-3">About LQS LLC</h1>
            <p className="text-taupe-500 max-w-2xl text-lg">
              A veteran-owned longarm quilting service in Moore, Oklahoma. Quality work, 
              honest pricing, and personal care — for every single quilt.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="space-y-6">

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Card className="border-rose-100 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center shrink-0">
                    <Scissors className="w-8 h-8 text-rose-400" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-taupe-800">Kevin Gunder</h2>
                    <p className="text-taupe-400 text-sm">Owner & Operator, LQS LLC</p>
                    <Badge className="mt-1 bg-rose-50 text-rose-600 border-rose-100 text-xs font-medium">
                      <Shield className="w-3 h-3 mr-1" /> Veteran-Owned
                    </Badge>
                  </div>
                </div>
                <div className="space-y-3 text-sm text-taupe-500 leading-relaxed">
                  <p>
                    LQS LLC was founded with a simple mission: provide Moore-area quilters with an 
                    affordable, reliable longarm quilting service they can truly trust. As a veteran, 
                    Kevin brings the same attention to detail and commitment to quality that defined 
                    his years of service.
                  </p>
                  <p>
                    Every quilt that comes through the door is treated with care and respect. Whether 
                    it&apos;s your first quilt top or your hundredth, Kevin understands the time, love, and 
                    creativity that goes into piecing — and he&apos;ll make sure the quilting does it justice.
                  </p>
                  <p>
                    Kevin is proud to be a member of the Moore Chamber of Commerce and the Moore Rotary Club, 
                    and part of the <a href="https://www.rednug.llc/" className="text-rose-400 hover:underline">rednug® LLC</a> family of veteran-owned businesses serving the Moore, Oklahoma community.
                    10% of all sales are donated to a military organization.
                  </p>
                  <p>
                  Kevin's wife, Joyce, has her business, <a href="https://www.seamscreations.com/" className="text-rose-400 hover:underline">Seams Creations LLC</a> sewing classes, and your source for bag making notions, is conveniently located next door (suite 102).</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { icon: Shield, title: "Veteran-Owned", desc: "Proud veteran-owned small business", bg: "bg-rose-50", iconColor: "text-rose-400" },
                { icon: MapPin, title: "Moore, OK", desc: "Locally serving the community", bg: "bg-lavender-50", iconColor: "text-lavender-500" },
                { icon: Star, title: "Quality First", desc: "Premium materials every time", bg: "bg-sage-50", iconColor: "text-sage-500" },
                { icon: Users, title: "Community Member", desc: "Rotary Club & Chamber of Commerce", bg: "bg-cream-200", iconColor: "text-taupe-500" },
              ].map((item, i) => (
                <Card key={i} className={`border-0 ${item.bg}`}>
                  <CardContent className="p-4">
                    <item.icon className={`w-5 h-5 ${item.iconColor} mb-2`} />
                    <div className="font-semibold text-taupe-700 text-sm">{item.title}</div>
                    <div className="text-xs text-taupe-400 mt-0.5">{item.desc}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <div className="rounded-2xl p-6 border border-rose-100 space-y-4" style={{ background: "linear-gradient(135deg, #fdf0f4 0%, #fdf7f0 100%)" }}>
              <h3 className="font-semibold text-taupe-700">Find Us</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" />
                  <div>
                    <div className="font-medium text-taupe-700 text-sm">Studio Address</div>
                    <div className="text-rose-400 text-sm">121 W. Main St, Suite 104<br />Moore, OK 73150</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-rose-400 shrink-0" />
                  <div>
                    <div className="font-medium text-taupe-700 text-sm">Call or Text</div>
                    <a href="tel:4057781440" className="text-rose-500 hover:underline text-sm">(405) 778-1440</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-rose-400 shrink-0" />
                  <div>
                    <div className="font-medium text-taupe-700 text-sm">Email</div>
                    <a href="mailto:kevin@lqs.llc" className="text-rose-500 hover:underline text-sm">Kevin@LQS.LLC</a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <div className="bg-cream-200 rounded-2xl h-44 flex items-center justify-center">
              <div className="text-center text-taupe-500">
                <MapPin className="w-8 h-8 mx-auto mb-2 text-rose-300" />
                <p className="font-medium text-taupe-600 text-sm">121 W. Main St, Suite 104</p>
                <p className="text-xs text-taupe-400">Moore, OK 73150</p>
                <a href="https://maps.google.com/?q=121+W+Main+St+Moore+OK+73150" target="_blank" rel="noopener noreferrer"
                  className="mt-2 inline-block text-xs text-rose-400 hover:underline">
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
