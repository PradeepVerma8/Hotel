import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-elevation-1' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <div className="text-2xl font-serif font-bold text-primary-950">
                <span className="text-gold">Ganga</span> Realty
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="font-medium text-sm hover:text-primary-600 transition-colors">Home</a>
            <a href="#features" className="font-medium text-sm hover:text-primary-600 transition-colors">Features</a>
            <a href="#amenities" className="font-medium text-sm hover:text-primary-600 transition-colors">Amenities</a>
            <a href="#gallery" className="font-medium text-sm hover:text-primary-600 transition-colors">Gallery</a>
            <a href="#location" className="font-medium text-sm hover:text-primary-600 transition-colors">Location</a>
            <a href="#floor-plans" className="font-medium text-sm hover:text-primary-600 transition-colors">Floor Plans</a>
            <a href="#about" className="font-medium text-sm hover:text-primary-600 transition-colors">About</a>
          </nav>

          <div className="hidden md:flex items-center">
            <a href="#contact" className="btn btn-primary flex items-center">
              <PhoneCall size={18} className="mr-2" />
              <span>Book a Visit</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} className="text-primary-950" />
            ) : (
              <Menu size={24} className={`${isScrolled ? 'text-primary-950' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="container mx-auto py-6 px-4">
          <div className="flex justify-end mb-8">
            <button 
              onClick={toggleMenu}
              className="p-2 focus:outline-none"
              aria-label="Close menu"
            >
              <X size={24} className="text-primary-950" />
            </button>
          </div>
          
          <nav className="flex flex-col space-y-6">
            <a href="#home" onClick={toggleMenu} className="font-medium text-lg hover:text-primary-600 transition-colors">Home</a>
            <a href="#features" onClick={toggleMenu} className="font-medium text-lg hover:text-primary-600 transition-colors">Features</a>
            <a href="#amenities" onClick={toggleMenu} className="font-medium text-lg hover:text-primary-600 transition-colors">Amenities</a>
            <a href="#gallery" onClick={toggleMenu} className="font-medium text-lg hover:text-primary-600 transition-colors">Gallery</a>
            <a href="#location" onClick={toggleMenu} className="font-medium text-lg hover:text-primary-600 transition-colors">Location</a>
            <a href="#floor-plans" onClick={toggleMenu} className="font-medium text-lg hover:text-primary-600 transition-colors">Floor Plans</a>
            <a href="#about" onClick={toggleMenu} className="font-medium text-lg hover:text-primary-600 transition-colors">About</a>
            <a href="#contact" onClick={toggleMenu} className="btn btn-primary w-full justify-center mt-4">Book a Visit</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;