
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Calendar, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  
  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Close menu when resizing to desktop
  useEffect(() => {
    if (!isMobile) {
      setIsMenuOpen(false);
    }
  }, [isMobile]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "Gallery", path: "/gallery" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === path;
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold">
            <div className="flex items-center justify-center h-8 w-8 bg-bncet-blue text-white rounded-md">
              <Calendar size={20} />
            </div>
            <div className="text-bncet-darkBlue">
              <span className="font-montserrat font-extrabold">BNCET</span>{" "}
              <span className="text-bncet-blue font-semibold">Events Hub</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive(link.path)
                    ? "text-bncet-blue bg-blue-50"
                    : "text-gray-600 hover:text-bncet-blue hover:bg-gray-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="ml-2 bg-bncet-blue hover:bg-bncet-darkBlue">
              <Link to="/events">
                Register for Events
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="inline-flex md:hidden items-center justify-center p-2 rounded-md text-gray-700 hover:text-bncet-blue hover:bg-gray-100 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">
              {isMenuOpen ? "Close menu" : "Open menu"}
            </span>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-gray-100 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3 text-base font-medium rounded-md ${
                  isActive(link.path)
                    ? "text-bncet-blue bg-blue-50"
                    : "text-gray-600 hover:text-bncet-blue hover:bg-gray-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="w-full mt-4 bg-bncet-blue hover:bg-bncet-darkBlue">
              <Link to="/events">
                Register for Events
              </Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
