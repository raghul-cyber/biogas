import Link from "next/link";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";

export const metadata = {
  title: "Our Process | Biogas Showcase",
  description: "Learn how we convert organic waste into clean energy.",
};

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-charcoal text-forest-50 flex flex-col">
      <div className="pt-32 pb-12">
        <Link 
          href="/" 
          className="ml-8 md:ml-16 text-amber-500 hover:text-amber-400 mb-6 inline-block font-medium focus:outline-none focus:ring-2 focus:ring-amber-500 rounded"
        >
          ← Back to Home
        </Link>
        <HowItWorks />
      </div>
      <div className="flex-grow flex flex-col items-center justify-center p-8 text-center pb-24">
        <p className="text-forest-300 text-lg md:text-xl mb-8 max-w-2xl border-t border-forest-800 pt-12">
          This page serves as a placeholder for a more detailed deep-dive into the biological and engineering processes behind our biomethane facilities.
        </p>
      </div>
      <Footer />
    </div>
  );
}
