"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Briefcase, Building2, Users } from "lucide-react";

export default function AudienceCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const audiences = [
    {
      title: "For Investors",
      copy: "Evaluate project economics, technical risk, and ESG impact.",
      ctaText: "View Impact Metrics",
      ctaLink: "/impact",
      icon: Briefcase,
    },
    {
      title: "For Municipalities",
      copy: "Turn urban organic waste streams into district energy and revenue.",
      ctaText: "Explore How It Works",
      ctaLink: "/process",
      icon: Building2,
    },
    {
      title: "For Community Partners",
      copy: "Learn how our facilities protect local air, water, and soil quality.",
      ctaText: "Read Our Story",
      ctaLink: "/about",
      icon: Users,
    },
  ];

  return (
    <section className="py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-forest-50 mb-4">
            Partner With Us
          </h2>
          <p className="text-forest-200 max-w-2xl mx-auto text-lg">
            Whether you&apos;re looking to invest, manage waste, or improve your community, we have a pathway for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" ref={ref}>
          {audiences.map((audience, i) => {
            const Icon = audience.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="bg-forest-900 border border-forest-800 p-8 rounded-2xl flex flex-col items-center text-center hover:border-forest-600 transition-colors shadow-lg"
              >
                <div className="w-16 h-16 bg-charcoal rounded-full flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="text-2xl font-bold text-forest-50 mb-4">{audience.title}</h3>
                <p className="text-forest-300 mb-8 flex-grow">{audience.copy}</p>
                <Link
                  href={audience.ctaLink}
                  className="w-full inline-block bg-transparent hover:bg-forest-800 text-amber-500 border border-amber-500 hover:border-amber-400 font-semibold py-3 px-6 rounded-full transition-all"
                >
                  {audience.ctaText}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
