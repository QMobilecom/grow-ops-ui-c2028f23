
import { Header } from "@/components/Header";

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center text-white p-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">How It Works</h1>
        <p className="text-xl max-w-3xl text-center">
          This page will explain the details of how our AI Voice Agents technology works.
        </p>
      </main>
    </div>
  );
}
