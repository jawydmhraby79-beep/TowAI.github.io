export default function Home() {
  return (
    <section className="flex-1 flex items-center justify-center text-center">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
          Welcome to the Sci-Fi Portfolio
        </h1>
        <p className="max-w-[600px] text-text-secondary md:text-xl">
          An immersive journey through a modular Next.js application.
        </p>
        {/* Chat component will be added here later */}
      </div>
    </section>
  );
}