import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";
import Footer from "@/components/Footer";
import { ArrowLeft, Zap, Factory, Leaf } from "lucide-react";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = projects.filter((p) => p.id !== project.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-charcoal text-forest-50 flex flex-col">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] w-full bg-forest-900">
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent z-10" />
        {/* Placeholder for project.hero_image */}
        <div className="absolute inset-0 opacity-50 bg-[url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center" />
        
        <div className="absolute bottom-0 left-0 right-0 z-20 p-8 md:p-16 max-w-7xl mx-auto">
          <Link href="/projects" className="inline-flex items-center text-amber-500 hover:text-amber-400 font-medium mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Projects
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-amber-500 text-charcoal-900 text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
              {project.feedstock_type}
            </span>
            <span className="bg-forest-800 text-forest-50 text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full border border-forest-600">
              {project.status}
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-4">{project.name}</h1>
          <p className="text-xl md:text-2xl text-forest-200">{project.location}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 w-full flex flex-col lg:flex-row gap-16">
        {/* Main Content */}
        <div className="lg:w-2/3">
          <h2 className="text-3xl font-bold mb-6 text-amber-500">Project Overview</h2>
          <p className="text-forest-100 text-lg leading-relaxed mb-8">
            {project.full_description}
          </p>
          
          <h3 className="text-2xl font-bold mb-6 mt-12 text-forest-50">Gallery</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.gallery.map((img, idx) => (
              <div key={idx} className="aspect-video bg-forest-900 rounded-lg overflow-hidden border border-forest-800">
                {/* Fallback pattern for missing images */}
                <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-forest-800 to-forest-950 flex items-center justify-center text-forest-700">
                  <Leaf className="w-12 h-12 opacity-50" />
                </div>
              </div>
            ))}
            {project.gallery.length === 0 && (
              <div className="col-span-full text-forest-400 py-8 bg-forest-950 rounded-lg text-center border border-forest-800 border-dashed">
                No gallery images available for this project.
              </div>
            )}
          </div>
        </div>

        {/* Sidebar Stats Panel */}
        <div className="lg:w-1/3">
          <div className="bg-forest-950 border border-forest-800 rounded-2xl p-8 sticky top-8">
            <h3 className="text-xl font-bold mb-6 uppercase tracking-wider text-forest-400">Impact Metrics</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-charcoal rounded-lg text-amber-500">
                  <Factory className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-forest-400 text-sm uppercase tracking-wider mb-1">Processing Capacity</p>
                  <p className="text-2xl font-bold text-forest-50">{project.capacity_tons_per_day} <span className="text-lg font-normal text-forest-300">Tons/Day</span></p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-charcoal rounded-lg text-amber-500">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-forest-400 text-sm uppercase tracking-wider mb-1">Energy Output</p>
                  <p className="text-2xl font-bold text-forest-50">{project.energy_output_kw} <span className="text-lg font-normal text-forest-300">kW</span></p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-charcoal rounded-lg text-amber-500">
                  <Leaf className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-forest-400 text-sm uppercase tracking-wider mb-1">CO2 Offset</p>
                  <p className="text-2xl font-bold text-forest-50">{project.co2_offset_tons_per_year.toLocaleString()} <span className="text-lg font-normal text-forest-300">Tons/Year</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Projects Strip */}
      <div className="bg-forest-950 py-16 border-t border-forest-900 mt-auto">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-forest-50">Related Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProjects.map((p) => (
              <Link href={`/projects/${p.slug}`} key={p.id} className="group block bg-charcoal rounded-xl overflow-hidden border border-forest-800 hover:border-amber-600 transition-colors">
                <div className="p-6">
                  <p className="text-amber-500 font-semibold text-xs mb-2 uppercase tracking-wider">{p.feedstock_type}</p>
                  <h3 className="text-xl font-bold text-forest-50 mb-2 group-hover:text-amber-400 transition-colors">{p.name}</h3>
                  <p className="text-forest-300 text-sm">{p.location}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
