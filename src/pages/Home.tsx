
import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mic, Brain, Zap, Shield, Users, Star } from "lucide-react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col">
      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-2 text-center text-sm font-medium">
        New Launch! AI Voice Agents Program · Join now to get rewards for creating Voice AI content.
      </div>
      <Header />
      
      <main className="flex-grow flex flex-col pt-20">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-4 md:px-8 max-w-6xl mx-auto">
          <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold text-white mb-8 leading-tight">
              The Future of
              <br />
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Nova AI</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl">
              Transform your business with intelligent voice agents that understand, respond, and act like humans.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white text-lg px-8 py-6 font-semibold shadow-lg hover:shadow-xl transition-all">
                Get Started Free
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900 text-lg px-8 py-6 font-semibold bg-slate-800/50 backdrop-blur-sm">
                Watch Demo
              </Button>
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 px-4 md:px-8 bg-gradient-to-b from-transparent via-slate-800/30 to-purple-900/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-white text-center mb-16">
              How It Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center bg-slate-800/60 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50 hover:border-emerald-400/50 transition-all duration-300 shadow-xl">
                <div className="bg-gradient-to-br from-emerald-400/20 to-teal-400/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mic className="text-emerald-400" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Voice Input</h3>
                <p className="text-slate-300">Advanced speech recognition processes natural language with 99.9% accuracy</p>
              </div>
              <div className="text-center bg-slate-800/60 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50 hover:border-emerald-400/50 transition-all duration-300 shadow-xl">
                <div className="bg-gradient-to-br from-emerald-400/20 to-teal-400/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain className="text-emerald-400" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">AI Processing</h3>
                <p className="text-slate-300">Intelligent algorithms understand context and intent to provide meaningful responses</p>
              </div>
              <div className="text-center bg-slate-800/60 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50 hover:border-emerald-400/50 transition-all duration-300 shadow-xl">
                <div className="bg-gradient-to-br from-emerald-400/20 to-teal-400/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="text-emerald-400" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Instant Action</h3>
                <p className="text-slate-300">Real-time responses and actions executed in milliseconds</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Solutions Section */}
        <section id="solutions" className="py-20 px-4 md:px-8 bg-gradient-to-b from-purple-900/50 via-slate-900/80 to-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-white text-center mb-16">
              Solutions
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-slate-800/80 to-purple-800/40 p-8 rounded-xl border border-slate-700/50 hover:border-emerald-400/50 transition-all duration-300 shadow-xl backdrop-blur-sm">
                <Shield className="text-emerald-400 mb-4" size={48} />
                <h3 className="text-3xl font-bold text-white mb-4">Enterprise Security</h3>
                <p className="text-slate-300 mb-6">Bank-grade encryption and compliance with industry standards</p>
                <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg">
                  Learn More
                </Button>
              </div>
              <div className="bg-gradient-to-br from-slate-800/80 to-purple-800/40 p-8 rounded-xl border border-slate-700/50 hover:border-emerald-400/50 transition-all duration-300 shadow-xl backdrop-blur-sm">
                <Users className="text-emerald-400 mb-4" size={48} />
                <h3 className="text-3xl font-bold text-white mb-4">Team Collaboration</h3>
                <p className="text-slate-300 mb-6">Seamless integration with your existing workflow and team</p>
                <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Resources Section */}
        <section id="resources" className="py-20 px-4 md:px-8 bg-gradient-to-b from-slate-800/50 to-purple-900/50">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-16">
              Resources
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-slate-800/80 to-purple-800/40 p-6 rounded-xl border border-slate-700/50 hover:border-emerald-400/50 transition-all duration-300 shadow-xl backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-4">Documentation</h3>
                <p className="text-slate-300 mb-4">Complete guides and API references</p>
                <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg">
                  View Docs
                </Button>
              </div>
              <div className="bg-gradient-to-br from-slate-800/80 to-purple-800/40 p-6 rounded-xl border border-slate-700/50 hover:border-emerald-400/50 transition-all duration-300 shadow-xl backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-4">Tutorials</h3>
                <p className="text-slate-300 mb-4">Step-by-step implementation guides</p>
                <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg">
                  Start Learning
                </Button>
              </div>
              <div className="bg-gradient-to-br from-slate-800/80 to-purple-800/40 p-6 rounded-xl border border-slate-700/50 hover:border-emerald-400/50 transition-all duration-300 shadow-xl backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-4">Support</h3>
                <p className="text-slate-300 mb-4">24/7 expert assistance</p>
                <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg">
                  Get Help
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-purple-900/50 via-slate-900/80 to-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Trusted by Industry Leaders
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-slate-800/80 to-purple-800/40 p-8 rounded-xl border border-slate-700/50 hover:border-emerald-400/50 transition-all duration-300 shadow-xl backdrop-blur-sm">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-emerald-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-slate-300 mb-6 text-lg">
                  "Nova has transformed our customer service. Response times improved by 80%."
                </p>
                <div className="text-white font-semibold">Sarah Chen, CTO at TechFlow</div>
              </div>
              <div className="bg-gradient-to-br from-slate-800/80 to-purple-800/40 p-8 rounded-xl border border-slate-700/50 hover:border-emerald-400/50 transition-all duration-300 shadow-xl backdrop-blur-sm">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-emerald-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-slate-300 mb-6 text-lg">
                  "The most intuitive voice AI platform we've ever used. Highly recommended."
                </p>
                <div className="text-white font-semibold">Marcus Rodriguez, VP at DataCorp</div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Partner Logos */}
        <div className="bg-gradient-to-b from-slate-800/50 to-purple-900/50 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h3 className="text-center text-white text-xl mb-8">Trusted by leading companies</h3>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {['Microsoft', 'Amazon', 'Google', 'IBM', 'Oracle', 'Salesforce'].map((company, i) => (
                <div key={i} className="text-slate-400 opacity-70 text-xl font-bold hover:text-emerald-400 transition-colors cursor-pointer">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-emerald-500 to-teal-500">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Join thousands of businesses already using Nova AI Voice Agents
            </p>
            <Button size="lg" className="bg-white hover:bg-slate-100 text-emerald-600 text-lg px-8 py-6 font-semibold shadow-lg hover:shadow-xl transition-all">
              Start Your Free Trial
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
