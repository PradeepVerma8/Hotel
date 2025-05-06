import React, { useEffect, useRef } from 'react';
import { Check, BookOpen, Award, Clock3 } from 'lucide-react';

const FeaturedProperty: React.FC = () => {
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

  const features = [
    { icon: <Check size={20} className="text-success-500" />, text: "Premium 2, 3 & 4 BHK Residences" },
    { icon: <Check size={20} className="text-success-500" />, text: "Starting at ₹1.5 Crore*" },
    { icon: <Check size={20} className="text-success-500" />, text: "RERA Approved Project" },
    { icon: <Check size={20} className="text-success-500" />, text: "60% Open Space" },
    { icon: <Check size={20} className="text-success-500" />, text: "State-of-the-art Amenities" },
    { icon: <Check size={20} className="text-success-500" />, text: "Prime Location" },
  ];

  const highlights = [
    {
      icon: <BookOpen size={32} className="text-gold" />,
      title: "RERA Registered",
      description: "Fully compliant with real estate regulations ensuring buyer protection and transparency."
    },
    {
      icon: <Award size={32} className="text-gold" />,
      title: "Award Winning Design",
      description: "Architectural excellence recognized with prestigious awards for innovation and aesthetics."
    },
    {
      icon: <Clock3 size={32} className="text-gold" />,
      title: "On-time Delivery",
      description: "Committed to delivering your dream home within the promised timeframe."
    }
  ];

  return (
    <section id="features" ref={sectionRef} className="section bg-neutral-50 py-20">
      <div className="container">
        <div className="section-title animate-fade-in">
          <span className="inline-block mb-3 text-sm font-semibold text-primary-600 uppercase tracking-wider">
            Exclusive Offering
          </span>
          <h2 className="mb-4">Swarnim - Luxury Redefined</h2>
          <p>
            An elegant residential project offering premium living spaces with world-class amenities
            and thoughtfully designed floor plans for contemporary lifestyle.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          <div className="relative rounded-lg overflow-hidden animate-slide-up" style={{ transitionDelay: '200ms' }}>
            <img 
              src="https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Swarnim Exterior" 
              className="w-full h-full object-cover rounded-lg shadow-elevation-2"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-950/90 to-transparent p-6">
              <span className="text-gold font-medium">Starting from</span>
              <h3 className="text-white">₹1.5 Crore*</h3>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">2 BHK</span>
                <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">3 BHK</span>
                <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">4 BHK</span>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-up" style={{ transitionDelay: '400ms' }}>
            <h3 className="mb-6 text-primary-950">Premium Residences</h3>
            <p className="mb-8 text-neutral-700">
              Swarnim offers meticulously crafted luxury apartments designed for those who appreciate the finer things in life. 
              Every detail is thoughtfully considered to create living spaces that are both functional and beautiful.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    {feature.icon}
                  </div>
                  <span className="text-neutral-700">{feature.text}</span>
                </div>
              ))}
            </div>
            
            <a href="#contact" className="btn btn-primary mt-4">Request More Information</a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {highlights.map((highlight, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-elevation-1 animate-slide-up"
              style={{ transitionDelay: `${600 + index * 200}ms` }}
            >
              <div className="mb-4">
                {highlight.icon}
              </div>
              <h4 className="mb-3 font-semibold">{highlight.title}</h4>
              <p className="text-neutral-600">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperty;