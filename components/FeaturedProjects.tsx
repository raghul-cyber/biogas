"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featured = projects.slice(0, 3); // Get first 3 projects

  return (
    <section className="py-24 bg-forest-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forest-50 mb-4">
              Featured Projects
            </h2>
            <p className="text-forest-200 max-w-xl text-lg">
              Proven scale. Explore our operational facilities and latest developments across the globe.
            </p>
          </div>
          <Link 
            href="/projects"
            className="hidden md:inline-block text-amber-500 hover:text-amber-400 font-semibold border-b border-amber-500 pb-1 mt-6 md:mt-0"
          >
            View All Projects →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" ref={ref}>
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <Link href={`/projects/${project.slug}`} className="group block h-full bg-charcoal rounded-xl overflow-hidden border border-forest-800 hover:border-amber-600 transition-colors">
                <div className="relative h-64 bg-forest-900 overflow-hidden">
                  {/* Placeholder for actual image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent z-10" />
                  <div className="absolute top-4 right-4 z-20">
                    <span className="bg-forest-800 text-forest-50 text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full border border-forest-600">
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 z-20">
                    <p className="text-amber-500 font-semibold text-sm mb-1">{project.feedstock_type}</p>
                    <h3 className="text-2xl font-bold text-forest-50">{project.name}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4 pb-4 border-b border-forest-800">
                    <div>
                      <p className="text-forest-400 text-xs uppercase tracking-wider mb-1">Capacity</p>
                      <p className="text-forest-100 font-medium">{project.capacity_tons_per_day} Tons/Day</p>
                    </div>
                    <div className="text-right">
                      <p className="text-forest-400 text-xs uppercase tracking-wider mb-1">Output</p>
                      <p className="text-forest-100 font-medium">{project.energy_output_kw} kW</p>
                    </div>
                  </div>
                  <p className="text-forest-300 text-sm line-clamp-2">
                    {project.summary}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-10 text-center md:hidden">
          <Link 
            href="/projects"
            className="inline-block text-amber-500 hover:text-amber-400 font-semibold border-b border-amber-500 pb-1"
          >
            View All Projects →
          </Link>
        </div>
      </div>
    </section>
  );
}
