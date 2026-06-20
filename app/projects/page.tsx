"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/projects";
import Footer from "@/components/Footer";

export default function ProjectsPage() {
  const [activeFeedstock, setActiveFeedstock] = useState<string>("All");
  const [activeStatus, setActiveStatus] = useState<string>("All");

  // Extract unique filter options
  const feedstocks = ["All", ...Array.from(new Set(projects.map((p) => p.feedstock_type)))];
  const statuses = ["All", "operational", "in-progress", "planned"];

  // Filter projects
  const filteredProjects = projects.filter((project) => {
    const matchFeedstock = activeFeedstock === "All" || project.feedstock_type === activeFeedstock;
    const matchStatus = activeStatus === "All" || project.status === activeStatus;
    return matchFeedstock && matchStatus;
  });

  return (
    <div className="min-h-screen bg-charcoal text-forest-50 flex flex-col">
      {/* Header */}
      <div className="pt-32 pb-16 px-4 max-w-7xl mx-auto w-full">
        <div className="mb-12">
          <Link href="/" className="text-amber-500 hover:text-amber-400 mb-6 inline-block font-medium">
            ← Back to Home
          </Link>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
            Our Projects
          </h1>
          <p className="text-forest-200 text-lg md:text-xl max-w-2xl">
            Explore our global portfolio of biogas facilities. Filter by feedstock or operational status.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 border-b border-forest-800 pb-8">
          <div>
            <h3 className="text-forest-400 text-sm uppercase tracking-wider mb-3">Filter by Feedstock</h3>
            <div className="flex flex-wrap gap-2">
              {feedstocks.map((feedstock) => (
                <button
                  key={feedstock}
                  onClick={() => setActiveFeedstock(feedstock)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeFeedstock === feedstock
                      ? "bg-amber-500 text-charcoal-900"
                      : "bg-forest-900 text-forest-300 hover:bg-forest-800"
                  }`}
                >
                  {feedstock}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-forest-400 text-sm uppercase tracking-wider mb-3">Filter by Status</h3>
            <div className="flex flex-wrap gap-2">
              {statuses.map((status) => (
                <button
                  key={status}
                  onClick={() => setActiveStatus(status)}
                  className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-colors ${
                    activeStatus === status
                      ? "bg-amber-500 text-charcoal-900"
                      : "bg-forest-900 text-forest-300 hover:bg-forest-800"
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.length === 0 ? (
            <div className="col-span-full text-center py-20 text-forest-400">
              No projects found matching the selected filters.
            </div>
          ) : (
            filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
              >
                <Link href={`/projects/${project.slug}`} className="group block h-full bg-forest-950 rounded-xl overflow-hidden border border-forest-800 hover:border-amber-600 transition-colors">
                  <div className="relative h-64 bg-forest-900 overflow-hidden">
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
                        <p className="text-forest-400 text-xs uppercase tracking-wider mb-1">Location</p>
                        <p className="text-forest-100 font-medium">{project.location}</p>
                      </div>
                    </div>
                    <p className="text-forest-300 text-sm line-clamp-2">
                      {project.summary}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))
          )}
        </motion.div>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
