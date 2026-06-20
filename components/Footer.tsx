import Link from "next/link";
import { Leaf } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 pt-16 pb-8 border-t border-forest-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Leaf className="w-8 h-8 text-amber-500" />
              <span className="font-display font-bold text-2xl text-forest-50 tracking-tight">
                Biogas Showcase
              </span>
            </div>
            <p className="text-forest-300 max-w-sm mb-6">
              Building the infrastructure to transform organic waste into baseload renewable energy. Powering a sustainable future.
            </p>
          </div>
          
          <div>
            <h4 className="text-forest-100 font-bold mb-4 uppercase tracking-wider text-sm">Navigation</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-forest-400 hover:text-amber-500 transition-colors">Home</Link></li>
              <li><Link href="/projects" className="text-forest-400 hover:text-amber-500 transition-colors">Projects</Link></li>
              <li><Link href="/process" className="text-forest-400 hover:text-amber-500 transition-colors">How It Works</Link></li>
              <li><Link href="/impact" className="text-forest-400 hover:text-amber-500 transition-colors">Impact Metrics</Link></li>
              <li><Link href="/about" className="text-forest-400 hover:text-amber-500 transition-colors">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-forest-100 font-bold mb-4 uppercase tracking-wider text-sm">Stay Updated</h4>
            <ul className="space-y-3 mb-6">
              <li><Link href="/contact" className="text-forest-400 hover:text-amber-500 transition-colors">Contact Us</Link></li>
              <li><a href="#" className="text-forest-400 hover:text-amber-500 transition-colors">Newsroom</a></li>
            </ul>
            <div className="flex gap-2">
              <input 
                type="email" 
                aria-label="Email address for newsletter"
                placeholder="Email address" 
                className="bg-forest-950 border border-forest-800 text-forest-100 px-4 py-2 rounded-lg w-full focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
              />
              <button className="bg-forest-800 hover:bg-forest-700 text-forest-100 px-4 py-2 rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-forest-900 flex flex-col md:flex-row justify-between items-center text-forest-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Biogas Project Showcase. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-forest-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-forest-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
