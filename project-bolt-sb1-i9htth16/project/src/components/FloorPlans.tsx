import React, { useState, useEffect, useRef } from 'react';
import { Bed, Bath, Move, Maximize2, Check } from 'lucide-react';

const FloorPlans: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
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
  
  const floorPlans = [
    {
      type: "2 BHK Premium",
      area: "1150",
      bedrooms: 2,
      bathrooms: 2,
      price: "₹1.5 Cr*",
      image: "https://images.pexels.com/photos/4484775/pexels-photo-4484775.jpeg?auto=compress&cs=tinysrgb&w=1600",
      features: [
        "Master bedroom with walk-in closet",
        "Modern kitchen with breakfast counter",
        "Private balcony",
        "Guest bathroom",
        "Utility area"
      ]
    },
    {
      type: "3 BHK Luxury",
      area: "1750",
      bedrooms: 3,
      bathrooms: 3,
      price: "₹2.2 Cr*",
      image: "https://images.pexels.com/photos/5502227/pexels-photo-5502227.jpeg?auto=compress&cs=tinysrgb&w=1600",
      features: [
        "Master suite with private balcony",
        "Two additional bedrooms",
        "Spacious living and dining area",
        "Dedicated study space",
        "Maid's room with separate entrance"
      ]
    },
    {
      type: "4 BHK Penthouse",
      area: "2450",
      bedrooms: 4,
      bathrooms: 4,
      price: "₹3.8 Cr*",
      image: "https://images.pexels.com/photos/5502231/pexels-photo-5502231.jpeg?auto=compress&cs=tinysrgb&w=1600",
      features: [
        "Panoramic city views",
        "Private terrace garden",
        "Entertainment lounge",
        "Gourmet kitchen with island",
        "Walk-in closets in all bedrooms"
      ]
    }
  ];

  return (
    <section id="floor-plans" ref={sectionRef} className="section bg-neutral-50">
      <div className="container">
        <div className="section-title animate-fade-in">
          <span className="inline-block mb-3 text-sm font-semibold text-primary-600 uppercase tracking-wider">
            Design & Layout
          </span>
          <h2 className="mb-4">Thoughtfully Designed Floor Plans</h2>
          <p>
            Each residence at Swarnim is meticulously designed to maximize space, functionality and aesthetics,
            offering the perfect blend of luxury and practicality.
          </p>
        </div>
        
        <div className="mt-12 flex justify-center animate-slide-up">
          <div className="flex flex-wrap gap-2 bg-white rounded-full p-1.5 border border-neutral-200 shadow-sm">
            {floorPlans.map((plan, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-2 text-sm font-medium rounded-full transition-all ${
                  activeTab === index 
                    ? 'bg-primary-600 text-white shadow-sm' 
                    : 'text-neutral-600 hover:bg-neutral-100'
                }`}
              >
                {plan.type}
              </button>
            ))}
          </div>
        </div>
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center animate-slide-up" style={{ transitionDelay: '200ms' }}>
          <div className="relative aspect-square overflow-hidden rounded-lg shadow-elevation-2">
            <img 
              src={floorPlans[activeTab].image} 
              alt={`${floorPlans[activeTab].type} Floor Plan`} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary-950/60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="text-center">
                <Maximize2 size={40} className="text-white mx-auto mb-4" />
                <span className="text-white font-medium">Click to View Detailed Floor Plan</span>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white p-8 rounded-lg shadow-elevation-1 border border-neutral-100">
              <h3 className="mb-4 flex items-center">
                {floorPlans[activeTab].type}
                <span className="ml-3 text-base bg-gold/10 text-gold px-3 py-0.5 rounded-full">
                  {floorPlans[activeTab].price}
                </span>
              </h3>
              
              <div className="flex flex-wrap gap-6 my-6">
                <div className="flex items-center gap-2">
                  <Bed size={20} className="text-primary-600" />
                  <span className="text-neutral-700">
                    <strong>{floorPlans[activeTab].bedrooms}</strong> Bedrooms
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Bath size={20} className="text-primary-600" />
                  <span className="text-neutral-700">
                    <strong>{floorPlans[activeTab].bathrooms}</strong> Bathrooms
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Move size={20} className="text-primary-600" />
                  <span className="text-neutral-700">
                    <strong>{floorPlans[activeTab].area}</strong> sq.ft.
                  </span>
                </div>
              </div>
              
              <div className="my-6">
                <h4 className="text-lg mb-4">Features:</h4>
                <ul className="grid grid-cols-1 gap-2">
                  {floorPlans[activeTab].features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check size={18} className="text-success-500 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="btn btn-primary">Enquire Now</a>
                <button className="btn btn-outline">Download Plan</button>
              </div>
            </div>
            
            <div className="mt-6 text-neutral-600 text-sm">
              <p>* Prices are subject to change without prior notice. Please contact our sales team for the most current pricing and availability.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 animate-slide-up" style={{ transitionDelay: '400ms' }}>
          {floorPlans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-white p-6 rounded-lg border-2 transition-all duration-300 ${
                activeTab === index 
                  ? 'border-gold shadow-elevation-2 scale-105 z-10' 
                  : 'border-neutral-200 shadow-elevation-1 hover:shadow-elevation-2'
              }`}
              onClick={() => setActiveTab(index)}
              role="button"
              tabIndex={0}
            >
              <div className="flex justify-between items-center mb-4">
                <h4 className="">{plan.type}</h4>
                <span className="text-gold font-medium">{plan.price}</span>
              </div>
              <div className="flex gap-3 my-3 text-sm text-neutral-700">
                <span className="flex items-center">
                  <Bed size={16} className="mr-1" /> {plan.bedrooms}
                </span>
                <span className="flex items-center">
                  <Bath size={16} className="mr-1" /> {plan.bathrooms}
                </span>
                <span className="flex items-center">
                  <Move size={16} className="mr-1" /> {plan.area} sq.ft.
                </span>
              </div>
              <div className="mt-4">
                <button 
                  className={`text-sm font-medium ${
                    activeTab === index ? 'text-gold' : 'text-primary-600'
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FloorPlans;