import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Check } from 'lucide-react';

const Contact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'General Inquiry',
    message: ''
  });
  
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
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to your backend or email service
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        interest: 'General Inquiry',
        message: ''
      });
    }, 5000);
  };
  
  const contactInfo = [
    {
      icon: <Phone size={20} className="text-gold" />,
      title: "Call Us",
      details: ["+91 98765 43210", "+91 98765 43211"]
    },
    {
      icon: <Mail size={20} className="text-gold" />,
      title: "Email",
      details: ["info@gangarealty.com", "sales@gangarealty.com"]
    },
    {
      icon: <MapPin size={20} className="text-gold" />,
      title: "Visit Us",
      details: ["Swarnim Sales Office", "Jayanagar, Bangalore - 560041"]
    },
    {
      icon: <Clock size={20} className="text-gold" />,
      title: "Business Hours",
      details: ["Mon-Sat: 10:00 AM - 7:00 PM", "Sunday: By Appointment"]
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="section bg-primary-950 text-white">
      <div className="container">
        <div className="section-title animate-fade-in">
          <span className="inline-block mb-3 text-sm font-semibold text-gold uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="mb-4 text-white">Contact Us</h2>
          <p className="text-white/80">
            Interested in experiencing Swarnim firsthand? Reach out to our team for more information
            or to schedule a personalized tour.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-slide-up" style={{ transitionDelay: '200ms' }}>
            <div className="bg-primary-900/60 backdrop-blur-sm p-8 rounded-lg">
              <h3 className="text-white mb-8">Send Us a Message</h3>
              
              {formSubmitted ? (
                <div className="bg-success-500/20 border border-success-500/30 rounded-lg p-6 text-center">
                  <div className="mx-auto w-12 h-12 rounded-full bg-success-500/20 flex items-center justify-center mb-4">
                    <Check size={24} className="text-success-500" />
                  </div>
                  <h4 className="text-white mb-2">Thank You!</h4>
                  <p className="text-white/80">
                    Your message has been submitted successfully. Our team will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">Your Name*</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gold/50"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">Email Address*</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gold/50"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-2">Phone Number*</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gold/50"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="interest" className="block text-sm font-medium text-white/80 mb-2">I'm Interested In*</label>
                      <select
                        id="interest"
                        name="interest"
                        required
                        value={formData.interest}
                        onChange={handleChange}
                        className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-gold/50"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="2 BHK Premium">2 BHK Premium</option>
                        <option value="3 BHK Luxury">3 BHK Luxury</option>
                        <option value="4 BHK Penthouse">4 BHK Penthouse</option>
                        <option value="Schedule Visit">Schedule Visit</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gold/50"
                      placeholder="I would like to know more about..."
                    ></textarea>
                  </div>
                  
                  <div className="flex items-center mb-6">
                    <input
                      type="checkbox"
                      id="consent"
                      required
                      className="w-4 h-4 text-gold bg-white/10 border-white/20 rounded focus:ring-gold"
                    />
                    <label htmlFor="consent" className="ml-2 block text-sm text-white/80">
                      I agree to receive updates about this property and future projects*
                    </label>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn bg-gold hover:bg-gold-dark text-primary-950 flex items-center justify-center w-full sm:w-auto"
                  >
                    <Send size={18} className="mr-2" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
          
          <div className="animate-slide-up" style={{ transitionDelay: '400ms' }}>
            <div className="h-64 mb-8 rounded-lg overflow-hidden shadow-elevation-2">
              <img 
                src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Swarnim Sales Office" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="bg-primary-900/60 backdrop-blur-sm p-8 rounded-lg">
              <h3 className="text-white mb-6">Contact Information</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-3 bg-gold/20 text-gold rounded-lg">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">{info.title}</h4>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-white/80 text-sm mb-1">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-gold/10 border border-gold/20 rounded-lg">
                <h4 className="text-gold font-medium mb-2">Special Offer</h4>
                <p className="text-white/80 text-sm">
                  Book a site visit now and get exclusive early-bird pricing and complimentary interior design consultation worth ₹1 lakh!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;