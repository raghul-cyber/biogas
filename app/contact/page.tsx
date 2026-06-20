import Link from "next/link";
import Footer from "@/components/Footer";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata = {
  title: "Contact Us | Biogas Showcase",
  description: "Get in touch to partner on a biogas project.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-charcoal text-forest-50 flex flex-col">
      <div className="flex-grow pt-32 pb-24 px-4 max-w-7xl mx-auto w-full">
        <Link 
          href="/" 
          className="text-amber-500 hover:text-amber-400 mb-12 inline-block font-medium focus:outline-none focus:ring-2 focus:ring-amber-500 rounded"
        >
          ← Back to Home
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
              Let&apos;s Build <span className="text-amber-500">Together.</span>
            </h1>
            <p className="text-forest-200 text-lg md:text-xl mb-12">
              Have an organic waste stream you need to manage? Looking to invest in renewable infrastructure? We want to hear from you.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-forest-300">
                <div className="w-12 h-12 bg-forest-900 rounded-full flex items-center justify-center text-amber-500">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-lg">hello@biogasshowcase.example.com</span>
              </div>
              <div className="flex items-center gap-4 text-forest-300">
                <div className="w-12 h-12 bg-forest-900 rounded-full flex items-center justify-center text-amber-500">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-lg">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-4 text-forest-300">
                <div className="w-12 h-12 bg-forest-900 rounded-full flex items-center justify-center text-amber-500">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-lg">100 Renewable Way, Climate City, CC 12345</span>
              </div>
            </div>
          </div>
          
          <div className="bg-forest-950 p-8 md:p-12 rounded-2xl border border-forest-800">
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-forest-300 mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-charcoal border border-forest-800 rounded-lg px-4 py-3 text-forest-50 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-forest-300 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-charcoal border border-forest-800 rounded-lg px-4 py-3 text-forest-50 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                  placeholder="jane@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-forest-300 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-charcoal border border-forest-800 rounded-lg px-4 py-3 text-forest-50 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button 
                type="button"
                className="w-full bg-amber-500 hover:bg-amber-400 text-charcoal-900 font-bold py-4 rounded-lg transition-colors focus:outline-none focus:ring-4 focus:ring-amber-500/50"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
