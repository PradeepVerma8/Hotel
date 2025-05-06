import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, Maximize, X } from 'lucide-react';

const Gallery: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [lightboxActive, setLightboxActive] = useState(false);
  const [lightboxImage, setLightboxImage] = useState('');
  const sectionRef = useRef<HTMLElement | null>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll('.animate-fade-in, .animate-slide-up');
    elements.forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);
  
  const images = [
    {
      main: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Swarnim Building Exterior",
      category: "Exterior"
    },
    {
      main: "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Luxurious Living Room",
      category: "Interior"
    },
    {
      main: "https://images.pexels.com/photos/1648771/pexels-photo-1648771.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Modern Kitchen Design",
      category: "Interior"
    },
    {
      main: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Master Bedroom",
      category: "Interior"
    },
    {
      main: "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Elegant Bathroom",
      category: "Interior"
    },
    {
      main: "https://images.pexels.com/photos/1643385/pexels-photo-1643385.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Swimming Pool Area",
      category: "Amenities"
    }
  ];
  
  const thumbnails = [
    {
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: "Swarnim Building Exterior Thumbnail"
    },
    {
      image: "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: "Luxurious Living Room Thumbnail"
    },
    {
      image: "https://images.pexels.com/photos/1648771/pexels-photo-1648771.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: "Modern Kitchen Design Thumbnail"
    },
    {
      image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: "Master Bedroom Thumbnail"
    },
    {
      image: "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: "Elegant Bathroom Thumbnail"
    },
    {
      image: "https://images.pexels.com/photos/1643385/pexels-photo-1643385.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: "Swimming Pool Area Thumbnail"
    }
  ];
  
  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % images.length);
  };
  
  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + images.length) % images.length);
  };
  
  const openLightbox = (imageUrl: string) => {
    setLightboxImage(imageUrl);
    setLightboxActive(true);
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setLightboxActive(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" ref={sectionRef} className="section bg-neutral-50">
      <div className="container">
        <div className="section-title animate-fade-in">
          <span className="inline-block mb-3 text-sm font-semibold text-primary-600 uppercase tracking-wider">
            Visual Tour
          </span>
          <h2 className="mb-4">Experience Swarnim</h2>
          <p className="text-neutral-600">
            Take a visual journey through our meticulously designed spaces and experience the Swarnim lifestyle.
          </p>
        </div>
        
        <div className="mt-16 animate-slide-up">
          <div className="relative overflow-hidden rounded-lg shadow-elevation-2">
            <div className="relative aspect-[16/9] overflow-hidden">
              <img 
                src={images[activeSlide].main}
                alt={images[activeSlide].alt}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              
              <button 
                onClick={() => openLightbox(images[activeSlide].main)}
                className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm hover:bg-white text-primary-950 p-2 rounded-full shadow-elevation-1 transition-all"
                aria-label="View full size image"
              >
                <Maximize size={20} />
              </button>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-primary-950/80 to-transparent">
                <div className="text-white">
                  <span className="text-gold text-sm font-medium">{images[activeSlide].category}</span>
                  <h4 className="text-white">{images[activeSlide].alt}</h4>
                </div>
              </div>
            </div>
            
            <button 
              onClick={prevSlide} 
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white text-primary-950 p-3 rounded-full shadow-elevation-1 transition-all"
              aria-label="Previous image"
            >
              <ArrowLeft size={20} />
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white text-primary-950 p-3 rounded-full shadow-elevation-1 transition-all"
              aria-label="Next image"
            >
              <ArrowRight size={20} />
            </button>
          </div>
          
          <div className="mt-6 grid grid-cols-3 sm:grid-cols-6 gap-3">
            {thumbnails.map((thumbnail, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`relative overflow-hidden rounded-md ${activeSlide === index ? 'ring-2 ring-gold' : 'opacity-70 hover:opacity-100'} transition-all`}
                aria-label={`View ${images[index].alt}`}
              >
                <img 
                  src={thumbnail.image} 
                  alt={thumbnail.alt} 
                  className="w-full h-20 object-cover"
                />
              </button>
            ))}
          </div>
        </div>
        
        {/* Image Grid for additional images */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up" style={{ transitionDelay: '200ms' }}>
          {images.map((image, index) => (
            <div 
              key={`grid-${index}`} 
              className="relative overflow-hidden rounded-lg shadow-elevation-1 cursor-pointer group"
              onClick={() => openLightbox(image.main)}
            >
              <img 
                src={image.main} 
                alt={image.alt} 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-primary-950/0 group-hover:bg-primary-950/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <Maximize size={32} className="text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Lightbox */}
      {lightboxActive && (
        <div 
          className="fixed inset-0 bg-primary-950/90 z-50 flex items-center justify-center backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <div className="relative max-w-6xl max-h-[90vh] p-4">
            <img 
              src={lightboxImage} 
              alt="Enlarged view" 
              className="max-w-full max-h-[80vh] object-contain"
            />
            <button 
              onClick={closeLightbox} 
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;