import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Us | Biogas Showcase",
  description: "Learn about our mission to transform organic waste into power.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-charcoal text-forest-50 flex flex-col">
      <div className="flex-grow flex flex-col items-center justify-center p-8 text-center mt-20">
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 text-forest-50">
          About Us
        </h1>
        <p className="text-forest-200 text-lg md:text-xl mb-8 max-w-2xl">
          We are dedicated to building the infrastructure that transforms organic waste into baseload renewable energy. 
          This page is a placeholder for the full About Us content.
        </p>
        <Link 
          href="/" 
          className="bg-amber-500 hover:bg-amber-400 text-charcoal-900 font-bold py-3 px-8 rounded-full transition-colors focus:outline-none focus:ring-4 focus:ring-amber-500/50"
        >
          Return Home
        </Link>
      </div>
      <Footer />
    </div>
  );
}
