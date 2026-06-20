export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="text-center max-w-3xl">
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 text-forest-50">
          Hello World
        </h1>
        <p className="text-forest-200 text-lg md:text-xl mb-8">
          The Biogas Project Showcase build is working and the design system is active.
        </p>
        <button className="bg-amber-500 hover:bg-amber-600 text-charcoal-900 font-semibold py-3 px-8 rounded-full transition-colors">
          Get Started
        </button>
      </div>
    </main>
  );
}
