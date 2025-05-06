import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const slides = [
    {
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Swarnim",
      subtitle: "Luxury Apartments",
      description: "Experience elegance redefined in the heart of the city"
    },
    {
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Premium Living",
      subtitle: "Thoughtfully Designed",
      description: "Where luxury meets convenience in every detail"
    },
    {
      image: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Modern Lifestyle",
      subtitle: "Elevated Experience",
      description: "Discover a new standard of contemporary urban living"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section id="home" className="relative h-screen">
      {/* Background slider */}
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="absolute inset-0 bg-primary-950/50"></div>
        </div>
      ))}
      
      {/* Content */}
      <div className="container relative h-full flex flex-col justify-center items-start">
        <div className={`max-w-2xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4 bg-gold px-4 py-1 rounded">
            <span className="text-primary-950 font-semibold tracking-wide text-sm uppercase">
              {slides[currentSlide].subtitle}
            </span>
          </div>
          
          <h1 className="mb-6 text-white font-bold leading-tight">
            {slides[currentSlide].title}
          </h1>
          
          <p className="text-white/90 text-xl mb-8 max-w-lg">
            {slides[currentSlide].description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="btn btn-gold">
              Book a Site Visit
            </a>
            <a href="#features" className="btn bg-white/10 text-white backdrop-blur-sm hover:bg-white/20">
              Explore Features <ArrowRight size={18} className="ml-2" />
            </a>
          </div>
        </div>
        
        {/* Slider indicators */}
        <div className="absolute bottom-12 left-0 right-0">
          <div className="container flex justify-center sm:justify-start">
            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentSlide === index ? 'bg-gold w-10' : 'bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;