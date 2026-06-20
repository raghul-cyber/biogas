"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface CounterProps {
  endValue: number;
  label: string;
  suffix?: string;
  duration?: number;
}

function Counter({ endValue, label, suffix = "", duration = 2 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        // Easing function for smoother finish
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOutQuart * endValue));
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      
      window.requestAnimationFrame(step);
    }
  }, [isInView, endValue, duration]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-6 text-center">
      <div className="font-display text-5xl md:text-6xl font-bold text-amber-500 mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-forest-200 font-medium text-sm md:text-base uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}

export default function ImpactMetrics() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section className="bg-charcoal-800 py-20 border-y border-forest-800">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-forest-700"
        >
          <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
            <Counter endValue={2050} label="Tons of Waste Processed" suffix="k+" />
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
            <Counter endValue={85} label="Active Projects" />
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
            <Counter endValue={142} label="MWh Generated" suffix="M+" />
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
            <Counter endValue={500} label="CO2 Offset (Tons)" suffix="k+" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
