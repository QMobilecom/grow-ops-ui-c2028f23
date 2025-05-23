
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (sectionId: string) => {
    // If we're on the home page, scroll to the section
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on a different page, navigate to home with the section hash
      navigate(`/#${sectionId}`);
      // After navigation, scroll to the section
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full py-4 px-6 bg-black/95 backdrop-blur-sm border-b border-slate-800/50 fixed top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center group">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent group-hover:from-emerald-300 group-hover:to-teal-300 transition-all duration-300">
            NOVA
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {[
            { id: 'home', label: 'Home' },
            { id: 'how-it-works', label: 'How It Works' },
            { id: 'solutions', label: 'Solutions' },
            { id: 'pricing', label: 'Pricing' },
            { id: 'resources', label: 'Resources' }
          ].map((item) => (
            <button 
              key={item.id}
              onClick={() => handleNavigation(item.id)} 
              className="px-4 py-2 text-slate-300 hover:text-emerald-400 transition-all duration-300 rounded-lg hover:bg-slate-800/50 font-medium"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <Button variant="ghost" className="text-slate-300 hover:text-emerald-400 hover:bg-slate-800/50 font-medium">
            Log in
          </Button>
          <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            Sign up
          </Button>
          <Link to="/dashboard">
            <Button className="bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-white font-semibold border border-slate-600 hover:border-slate-500 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Dashboard
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-300 hover:text-emerald-400 p-2 rounded-lg hover:bg-slate-800/50 transition-all duration-300" 
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full inset-x-0 bg-black/95 backdrop-blur-sm border-b border-slate-800/50 z-50 py-4 shadow-xl animate-fade-in">
          <div className="flex flex-col space-y-2 px-6">
            {[
              { id: 'home', label: 'Home' },
              { id: 'how-it-works', label: 'How It Works' },
              { id: 'solutions', label: 'Solutions' },
              { id: 'pricing', label: 'Pricing' },
              { id: 'resources', label: 'Resources' }
            ].map((item) => (
              <button 
                key={item.id}
                onClick={() => handleNavigation(item.id)} 
                className="text-slate-300 hover:text-emerald-400 transition-all duration-300 py-3 text-left rounded-lg hover:bg-slate-800/50 px-3 font-medium"
              >
                {item.label}
              </button>
            ))}
            <div className="flex flex-col space-y-3 pt-4 border-t border-slate-800/50">
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800/50 hover:text-emerald-400 hover:border-emerald-400 font-medium">
                Log in
              </Button>
              <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold shadow-lg">
                Sign up
              </Button>
              <Link to="/dashboard" className="w-full" onClick={() => setIsMenuOpen(false)}>
                <Button className="bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-white font-semibold border border-slate-600 hover:border-slate-500 shadow-lg w-full">
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
