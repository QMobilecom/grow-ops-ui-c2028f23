
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full py-4 px-6 bg-black fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-bold text-white">NOVA</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('home')} className="text-white hover:text-green-400 transition-colors">
            Home
          </button>
          <button onClick={() => scrollToSection('how-it-works')} className="text-white hover:text-green-400 transition-colors">
            How It Works
          </button>
          <button onClick={() => scrollToSection('solutions')} className="text-white hover:text-green-400 transition-colors">
            Solutions
          </button>
          <button onClick={() => scrollToSection('resources')} className="text-white hover:text-green-400 transition-colors">
            Resources
          </button>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="link" className="text-white hover:text-green-400">
            Log in
          </Button>
          <Button className="bg-green-400 hover:bg-green-500 text-black">
            Sign up
          </Button>
          <Link to="/dashboard">
            <Button className="bg-green-400 hover:bg-green-500 text-black">
              Dashboard
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-black z-50 py-4">
          <div className="flex flex-col space-y-4 px-6">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-white hover:text-green-400 transition-colors py-2 text-left"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')} 
              className="text-white hover:text-green-400 transition-colors py-2 text-left"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('solutions')} 
              className="text-white hover:text-green-400 transition-colors py-2 text-left"
            >
              Solutions
            </button>
            <button 
              onClick={() => scrollToSection('resources')} 
              className="text-white hover:text-green-400 transition-colors py-2 text-left"
            >
              Resources
            </button>
            <div className="flex flex-col space-y-2 pt-2">
              <Button variant="outline" className="border-white text-white hover:bg-gray-800">
                Log in
              </Button>
              <Button className="bg-green-400 hover:bg-green-500 text-black">
                Sign up
              </Button>
              <Link to="/dashboard" className="w-full" onClick={() => setIsMenuOpen(false)}>
                <Button className="bg-green-400 hover:bg-green-500 text-black w-full">
                  Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
