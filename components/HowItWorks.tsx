"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Leaf, FlaskConical, Flame, Zap } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Feedstock Collection",
    description: "Organic waste from agriculture, municipalities, or industry is collected and prepared.",
    icon: Leaf,
  },
  {
    id: 2,
    title: "Anaerobic Digestion",
    description: "Microorganisms break down the matter in an oxygen-free environment.",
    icon: FlaskConical,
  },
  {
    id: 3,
    title: "Biogas Capture",
    description: "Methane-rich biogas is captured and purified to remove impurities.",
    icon: Flame,
  },
  {
    id: 4,
    title: "Energy Output",
    description: "The gas is converted into renewable electricity, heat, or biomethane.",
    icon: Zap,
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-forest-50 mb-4">
            How It Works
          </h2>
          <p className="text-forest-200 max-w-2xl mx-auto text-lg">
            A closed-loop system that turns environmental liabilities into powerful assets.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Horizontal line for desktop connecting the steps */}
          <div className="hidden md:block absolute top-[45px] left-[10%] right-[10%] h-0.5 bg-forest-800 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div key={step.id} variants={itemVariants} className="flex flex-col items-center text-center group">
                  <div className="w-24 h-24 rounded-full bg-forest-900 border border-forest-700 flex items-center justify-center mb-6 group-hover:border-amber-500 transition-colors shadow-lg">
                    <Icon className="w-10 h-10 text-amber-500" />
                  </div>
                  <h3 className="text-xl font-bold text-forest-50 mb-3">{step.title}</h3>
                  <p className="text-forest-300 text-sm">{step.description}</p>
                  
                  {/* Arrow for mobile view connecting steps */}
                  {index !== steps.length - 1 && (
                    <div className="md:hidden mt-8 text-forest-700">
                      <ArrowRight className="w-6 h-6 rotate-90" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
