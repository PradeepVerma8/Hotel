import React, { useEffect, useRef } from 'react';
import { School as Pool, Dumbbell, Trees, Coffee, Wifi, Shield, ParkingMeter as Parking, Shield as Child, PawPrint, Landmark } from 'lucide-react';

const Amenities: React.FC = () => {
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

  const amenities = [
    {
      icon: <Pool size={24} className="text-gold" />,
      title: "Swimming Pool",
      description: "Temperature controlled infinity pool with stunning views"
    },
    {
      icon: <Dumbbell size={24} className="text-gold" />,
      title: "Fitness Center",
      description: "State-of-the-art gym with modern equipment and trainers"
    },
    {
      icon: <Trees size={24} className="text-gold" />,
      title: "Landscaped Gardens",
      description: "Carefully designed green spaces for relaxation"
    },
    {
      icon: <Coffee size={24} className="text-gold" />,
      title: "Clubhouse",
      description: "Exclusive club with lounge, entertainment and meeting areas"
    },
    {
      icon: <Wifi size={24} className="text-gold" />,
      title: "Smart Home",
      description: "Advanced home automation and high-speed connectivity"
    },
    {
      icon: <Shield size={24} className="text-gold" />,
      title: "24/7 Security",
      description: "Round-the-clock security with modern surveillance"
    },
    {
      icon: <Parking size={24} className="text-gold" />,
      title: "Ample Parking",
      description: "Dedicated and visitor parking with EV charging points"
    },
    {
      icon: <Child size={24} className="text-gold" />,
      title: "Kids' Play Area",
      description: "Safe and engaging play spaces for children"
    },
    {
      icon: <PawPrint size={24} className="text-gold" />,
      title: "Pet Friendly",
      description: "Designated pet areas and walking paths"
    },
    {
      icon: <Landmark size={24} className="text-gold" />,
      title: "Banquet Hall",
      description: "Elegant space for hosting events and celebrations"
    }
  ];

  return (
    <section id="amenities" ref={sectionRef} className="section bg-primary-950 text-white">
      <div className="container">
        <div className="section-title animate-fade-in">
          <span className="inline-block mb-3 text-sm font-semibold text-gold uppercase tracking-wider">
            Lifestyle Features
          </span>
          <h2 className="mb-4 text-white">World-Class Amenities</h2>
          <p className="text-white/80">
            Indulge in a lifestyle of comfort and luxury with our carefully curated selection of premium amenities.
          </p>
        </div>
        
        <div className="relative mt-16 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-20"></div>
          
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {amenities.map((amenity, index) => (
              <div 
                key={index} 
                className="group bg-white/10 backdrop-blur-sm hover:bg-white/15 rounded-lg p-6 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 p-3 bg-primary-900 inline-block rounded-lg group-hover:bg-gold transition-colors duration-300">
                  {amenity.icon}
                </div>
                <h4 className="mb-2 text-white font-medium">{amenity.title}</h4>
                <p className="text-white/70 text-sm">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            At Swarnim, we believe that luxury is in the details. Our amenities are designed to enhance your lifestyle and provide comfort and convenience at every step.
          </p>
          <a href="#contact" className="btn bg-gold/20 hover:bg-gold/30 text-gold backdrop-blur-sm border border-gold/30 transition-all">
            Schedule a Tour
          </a>
        </div>
      </div>
    </section>
  );
};

export default Amenities;