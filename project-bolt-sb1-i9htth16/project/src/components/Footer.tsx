import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Youtube, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-950 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
          <div className="lg:col-span-2">
            <div className="text-2xl font-serif font-bold mb-4">
              <span className="text-gold">Ganga</span> Realty
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              Ganga Realty is a premier real estate developer known for creating exceptional living spaces 
              that combine innovation, quality, and thoughtful design.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-primary-900 hover:bg-primary-800 rounded-full transition-colors">
                <Facebook size={18} className="text-white/80" />
              </a>
              <a href="#" className="p-2 bg-primary-900 hover:bg-primary-800 rounded-full transition-colors">
                <Instagram size={18} className="text-white/80" />
              </a>
              <a href="#" className="p-2 bg-primary-900 hover:bg-primary-800 rounded-full transition-colors">
                <Twitter size={18} className="text-white/80" />
              </a>
              <a href="#" className="p-2 bg-primary-900 hover:bg-primary-800 rounded-full transition-colors">
                <Linkedin size={18} className="text-white/80" />
              </a>
              <a href="#" className="p-2 bg-primary-900 hover:bg-primary-800 rounded-full transition-colors">
                <Youtube size={18} className="text-white/80" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-white/70 hover:text-gold transition-colors">Home</a></li>
              <li><a href="#features" className="text-white/70 hover:text-gold transition-colors">Features</a></li>
              <li><a href="#amenities" className="text-white/70 hover:text-gold transition-colors">Amenities</a></li>
              <li><a href="#gallery" className="text-white/70 hover:text-gold transition-colors">Gallery</a></li>
              <li><a href="#floor-plans" className="text-white/70 hover:text-gold transition-colors">Floor Plans</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">About</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-white/70 hover:text-gold transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-gold transition-colors">Careers</a></li>
              <li><a href="#" className="text-white/70 hover:text-gold transition-colors">Awards</a></li>
              <li><a href="#" className="text-white/70 hover:text-gold transition-colors">CSR Initiatives</a></li>
              <li><a href="#" className="text-white/70 hover:text-gold transition-colors">Press & Media</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-gold transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-white/70 hover:text-gold transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/70 hover:text-gold transition-colors">Disclaimer</a></li>
              <li><a href="#" className="text-white/70 hover:text-gold transition-colors">RERA Information</a></li>
            </ul>
          </div>
        </div>
        
        <div className="relative pt-8 border-t border-primary-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Ganga Realty. All rights reserved. | RERA Reg. No: ABCDE12345
            </div>
            <div className="text-white/60 text-sm">
              Disclaimer: Images shown are for representational purposes only.
            </div>
            
            <button 
              onClick={scrollToTop}
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-3 bg-gold hover:bg-gold-dark text-primary-950 rounded-full shadow-elevation-1 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;