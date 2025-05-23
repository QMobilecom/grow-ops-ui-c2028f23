
import { Header } from "@/components/Header";

export default function Solutions() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center text-white p-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">Solutions</h1>
        <p className="text-xl max-w-3xl text-center">
          Explore our various AI Voice Agent solutions for different industries and use cases.
        </p>
      </main>
    </div>
  );
}
