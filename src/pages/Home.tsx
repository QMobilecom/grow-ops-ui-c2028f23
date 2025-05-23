
import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { VoiceVisualizer } from "@/components/VoiceVisualizer";
import { Link } from "react-router-dom";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <div className="bg-black text-white py-2 text-center text-sm">
        New Launch! AI Voice Agents Program · Join now to get rewards for creating Voice AI content.
      </div>
      <Header />
      
      <main className="flex-grow flex flex-col">
        {/* Hero Section */}
        <section className="flex-grow flex flex-col justify-center items-center text-center px-4 md:px-8 max-w-5xl mx-auto relative">
          <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-6">
              Voice AI agents
              <br />
              for developers
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button size="lg" className="bg-green-400 hover:bg-green-500 text-black text-lg px-8 py-6">
                SIGN UP
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-gray-800 text-lg px-8 py-6">
                READ THE DOCS
              </Button>
            </div>
            
            <div className="mt-20 bg-cream-100 text-black px-8 py-6 rounded-full inline-flex items-center">
              <span className="text-xl font-medium">TALK TO VAPI</span>
            </div>
          </div>
          
          <VoiceVisualizer />
        </section>
        
        {/* Partner Logos */}
        <div className="bg-gray-900 py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {['Company 1', 'Company 2', 'Company 3', 'Company 4', 'Company 5'].map((company, i) => (
                <div key={i} className="text-white opacity-70 text-lg font-bold">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
