import Link from "next/link";
import ImpactChart from "@/components/ImpactChart";
import Footer from "@/components/Footer";
import { TreePine, Car, Home } from "lucide-react";

export const metadata = {
  title: "Impact Metrics | Biogas Showcase",
  description: "Explore our sustainability impact and cumulative CO2 offset.",
};

export default function ImpactPage() {
  return (
    <div className="min-h-screen bg-charcoal text-forest-50 flex flex-col">
      {/* Header */}
      <div className="pt-32 pb-16 px-4 max-w-7xl mx-auto w-full">
        <div className="mb-16">
          <Link href="/" className="text-amber-500 hover:text-amber-400 mb-6 inline-block font-medium">
            ← Back to Home
          </Link>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
            Real Impact,<br/>
            <span className="text-amber-500">Measurable Results.</span>
          </h1>
          <p className="text-forest-200 text-lg md:text-xl max-w-2xl">
            We don&apos;t just talk about sustainability; we build the infrastructure that makes it happen. See our cumulative effect on the global carbon footprint.
          </p>
        </div>

        {/* Chart Section */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-forest-50 mb-2">Cumulative CO2 Offset</h2>
              <p className="text-forest-300">Total emissions prevented across all active facilities.</p>
            </div>
            <div className="mt-4 md:mt-0 text-right">
              <span className="text-4xl font-bold text-amber-500">1.25M</span>
              <span className="text-forest-200 block text-sm uppercase tracking-wider">Tons as of 2024</span>
            </div>
          </div>
          
          <ImpactChart />
        </div>

        {/* Equivalencies Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-forest-50 mb-10 text-center">What Does 1.25M Tons Look Like?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-forest-950 border border-forest-800 p-8 rounded-2xl flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-charcoal rounded-full flex items-center justify-center mb-6">
                <Car className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="text-4xl font-bold text-forest-50 mb-2">271,000</h3>
              <p className="text-forest-300 font-medium mb-4">Cars Taken Off The Road</p>
              <p className="text-forest-400 text-sm">
                Equivalent to removing the annual emissions of over a quarter million passenger vehicles.
              </p>
            </div>

            <div className="bg-forest-950 border border-forest-800 p-8 rounded-2xl flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-charcoal rounded-full flex items-center justify-center mb-6">
                <Home className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="text-4xl font-bold text-forest-50 mb-2">158,000</h3>
              <p className="text-forest-300 font-medium mb-4">Homes Powered</p>
              <p className="text-forest-400 text-sm">
                Equivalent to the annual electricity usage of an entire mid-sized city.
              </p>
            </div>

            <div className="bg-forest-950 border border-forest-800 p-8 rounded-2xl flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-charcoal rounded-full flex items-center justify-center mb-6">
                <TreePine className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="text-4xl font-bold text-forest-50 mb-2">20.6M</h3>
              <p className="text-forest-300 font-medium mb-4">Tree Seedlings Grown</p>
              <p className="text-forest-400 text-sm">
                Equivalent carbon sequestration to a massive forest grown for 10 years.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
