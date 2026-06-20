import Hero from "@/components/Hero";
import ImpactMetrics from "@/components/ImpactMetrics";
import HowItWorks from "@/components/HowItWorks";
import FeaturedProjects from "@/components/FeaturedProjects";
import AudienceCTA from "@/components/AudienceCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-charcoal text-forest-50 overflow-x-hidden">
      <Hero />
      <ImpactMetrics />
      <HowItWorks />
      <FeaturedProjects />
      <AudienceCTA />
      <Footer />
    </main>
  );
}
