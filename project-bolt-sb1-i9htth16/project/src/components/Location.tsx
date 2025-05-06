import React, { useEffect, useRef } from 'react';
import { MapPin, Building, Car, Train, Landmark, School, ShoppingBag, Plane } from 'lucide-react';

const Location: React.FC = () => {
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

  const locationHighlights = [
    {
      icon: <Building size={20} className="text-gold" />,
      title: "Business District",
      description: "5 min drive to Central Business District",
    },
    {
      icon: <Train size={20} className="text-gold" />,
      title: "Metro Station",
      description: "800m to nearest Metro Station",
    },
    {
      icon: <Landmark size={20} className="text-gold" />,
      title: "Entertainment",
      description: "Close to theaters and cultural centers",
    },
    {
      icon: <School size={20} className="text-gold" />,
      title: "Education",
      description: "Top-rated schools within 2 km radius",
    },
    {
      icon: <ShoppingBag size={20} className="text-gold" />,
      title: "Shopping",
      description: "Premium shopping malls nearby",
    },
    {
      icon: <Plane size={20} className="text-gold" />,
      title: "Airport",
      description: "25 min drive to International Airport",
    },
  ];

  return (
    <section id="location" ref={sectionRef} className="section bg-white">
      <div className="container">
        <div className="section-title animate-fade-in">
          <span className="inline-block mb-3 text-sm font-semibold text-primary-600 uppercase tracking-wider">
            Prime Location
          </span>
          <h2 className="mb-4">Strategic Connectivity</h2>
          <p>
            Situated in one of the most coveted locations, Swarnim offers unparalleled connectivity
            and access to the city's premium amenities.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-slide-up" style={{ transitionDelay: '200ms' }}>
            <div className="bg-neutral-100 p-2 rounded-lg shadow-elevation-1 h-96 relative overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5903186045735!2d77.55632807453773!3d12.93473481708952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15986765d9bb%3A0xc0d8df9c82fdf104!2sJayanagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1714064214374!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, borderRadius: '0.5rem' }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Property Location Map"
                className="z-10 relative"
              ></iframe>
              
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-elevation-1 z-20 flex items-center space-x-2">
                <MapPin size={20} className="text-gold" />
                <span className="font-medium text-primary-950">Swarnim, Jayanagar</span>
              </div>
            </div>
            
            <div className="mt-8 flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <Car size={20} className="text-primary-600" />
                <p className="text-neutral-700">Easy access to major highways and arterial roads</p>
              </div>
              <div className="flex items-center space-x-2">
                <Train size={20} className="text-primary-600" />
                <p className="text-neutral-700">Multiple public transportation options nearby</p>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={20} className="text-primary-600" />
                <p className="text-neutral-700">Located in a safe, established residential neighborhood</p>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-up" style={{ transitionDelay: '400ms' }}>
            <h3 className="mb-6">Neighborhood Highlights</h3>
            <p className="text-neutral-700 mb-6">
              Swarnim is strategically located to provide you with easy access to business districts, 
              entertainment venues, educational institutions, healthcare facilities, and more.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {locationHighlights.map((highlight, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-3 bg-neutral-50 p-4 rounded-lg border border-neutral-200"
                >
                  <div className="p-2 bg-primary-50 rounded-lg">
                    {highlight.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-medium mb-1">{highlight.title}</h4>
                    <p className="text-sm text-neutral-600">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <a href="#contact" className="btn btn-outline">Schedule Site Visit</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;