
import { Header } from "@/components/Header";

export default function Resources() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center text-white p-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">Resources</h1>
        <p className="text-xl max-w-3xl text-center">
          Access documentation, tutorials, guides, and other helpful resources.
        </p>
      </main>
    </div>
  );
}
