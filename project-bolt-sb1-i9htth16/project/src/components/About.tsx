import React, { useEffect, useRef } from 'react';
import { Award, Building, Clock3, Users } from 'lucide-react';

const About: React.FC = () => {
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

  const achievements = [
    {
      value: "25+",
      label: "Years of Excellence"
    },
    {
      value: "50+",
      label: "Completed Projects"
    },
    {
      value: "10K+",
      label: "Happy Residents"
    },
    {
      value: "15+",
      label: "Industry Awards"
    }
  ];

  const milestones = [
    {
      year: "1998",
      title: "Company Founded",
      description: "Ganga Realty was established with a vision to transform urban living."
    },
    {
      year: "2005",
      title: "First Landmark Project",
      description: "Completed our first large-scale residential project to critical acclaim."
    },
    {
      year: "2012",
      title: "International Expansion",
      description: "Expanded operations internationally with projects across Asia."
    },
    {
      year: "2023",
      title: "Swarnim Launch",
      description: "Launched our most ambitious luxury project to date - Swarnim."
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="section bg-white">
      <div className="container">
        <div className="section-title animate-fade-in">
          <span className="inline-block mb-3 text-sm font-semibold text-primary-600 uppercase tracking-wider">
            About Developer
          </span>
          <h2 className="mb-4">Ganga Realty</h2>
          <p>
            A leading real estate developer with a legacy of excellence and a commitment to creating exceptional living spaces.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative animate-slide-up" style={{ transitionDelay: '200ms' }}>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Ganga Realty Team" 
                className="w-full rounded-lg shadow-elevation-2 object-cover h-[500px]"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-elevation-1 w-48">
                <img 
                  src="https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="Company Logo" 
                  className="w-full"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16">
              {achievements.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-serif font-bold text-gold mb-2">{item.value}</div>
                  <div className="text-sm text-neutral-600">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="animate-slide-up" style={{ transitionDelay: '400ms' }}>
            <h3 className="mb-6">Creating Extraordinary Spaces Since 1998</h3>
            
            <p className="text-neutral-700 mb-4">
              Ganga Realty has established itself as a premier real estate developer, known for creating 
              properties that blend exceptional design, quality construction, and thoughtful amenities.
            </p>
            
            <p className="text-neutral-700 mb-8">
              With a focus on innovation and customer satisfaction, we strive to exceed expectations with 
              every project we undertake. Our commitment to excellence has earned us numerous industry awards 
              and the trust of thousands of satisfied homeowners.
            </p>
            
            <div className="flex flex-col space-y-6 mb-8">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-primary-50 rounded-lg">
                  <Building size={20} className="text-primary-600" />
                </div>
                <div>
                  <h4 className="text-base font-medium mb-1">Premium Quality Construction</h4>
                  <p className="text-sm text-neutral-600">
                    Using only the finest materials and latest construction technologies
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-primary-50 rounded-lg">
                  <Award size={20} className="text-primary-600" />
                </div>
                <div>
                  <h4 className="text-base font-medium mb-1">Award-Winning Designs</h4>
                  <p className="text-sm text-neutral-600">
                    Collaborating with renowned architects and interior designers
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-primary-50 rounded-lg">
                  <Users size={20} className="text-primary-600" />
                </div>
                <div>
                  <h4 className="text-base font-medium mb-1">Customer-Centric Approach</h4>
                  <p className="text-sm text-neutral-600">
                    Dedicated to creating exceptional experiences for our customers
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-primary-50 rounded-lg">
                  <Clock3 size={20} className="text-primary-600" />
                </div>
                <div>
                  <h4 className="text-base font-medium mb-1">On-Time Delivery</h4>
                  <p className="text-sm text-neutral-600">
                    Proven track record of timely project completion
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 animate-slide-up" style={{ transitionDelay: '600ms' }}>
          <h3 className="text-center mb-12">Our Journey</h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary-100"></div>
            
            <div className="relative">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`flex items-center justify-${index % 2 === 0 ? 'start' : 'end'} sm:justify-center mb-12 last:mb-0`}
                >
                  <div className={`flex flex-col ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'} items-center gap-6 sm:gap-12 w-full`}>
                    <div className={`flex items-center justify-${index % 2 === 0 ? 'end' : 'start'} sm:w-1/2 order-2 sm:order-${index % 2 === 0 ? 2 : 1}`}>
                      <div className="sm:max-w-xs bg-white p-6 rounded-lg shadow-elevation-1 border border-neutral-100">
                        <h4 className="text-lg font-medium mb-2">{milestone.title}</h4>
                        <p className="text-neutral-600">{milestone.description}</p>
                      </div>
                    </div>
                    
                    <div className="relative order-1 sm:order-none z-10">
                      <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-white font-medium">
                        {index + 1}
                      </div>
                    </div>
                    
                    <div className={`flex items-center justify-${index % 2 === 0 ? 'start' : 'end'} sm:w-1/2 order-3 sm:order-${index % 2 === 0 ? 1 : 2}`}>
                      <div className="text-xl font-serif font-bold text-primary-600">
                        {milestone.year}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;