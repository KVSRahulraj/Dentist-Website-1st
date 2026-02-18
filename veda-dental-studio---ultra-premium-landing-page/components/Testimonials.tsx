import React, { useRef, useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Anjali Reddy",
    role: "Corporate Professional",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    content: "The \"Invisible Aligners\" transformed my smile without anyone noticing. The environment at Veda is ultra-premium and so relaxing.",
    stars: 5,
    tag: "Invisalign Aligners"
  },
  {
    name: "Dr. Vikram Singh",
    role: "Local Resident",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    content: "Painless root canal is actually painless here. Their high-tech approach saved my tooth. Best clinic in Hyderabad!",
    stars: 5,
    tag: "Emergency Crown"
  },
  {
    name: "Meera Kapoor",
    role: "Designer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
    content: "The Smile Makeover gave me the confidence I needed for my business events. The doctors are highly professional.",
    stars: 5,
    tag: "Teeth Whitening + Veneers"
  },
  {
    name: "Suresh Kumar",
    role: "Tech Lead",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    content: "Very well managed clinic. Perfect for corporate people who value time. Sunday appointments are a life-saver.",
    stars: 5,
    tag: "Dental Cleaning"
  },
  {
    name: "Priya Sharma",
    role: "Marketing Manager",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
    content: "The teeth whitening results were immediate! I love how they explain every step. Highly recommended for busy professionals.",
    stars: 5,
    tag: "Laser Whitening"
  },
  {
    name: "Rahul Khanna",
    role: "Entrepreneur",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    content: "Veda Dental provided the best implant experience. High-end equipment and very friendly staff. My search for a reliable dentist ends here.",
    stars: 5,
    tag: "Dental Implants"
  }
];

const stats = [
  { value: "2,500+", label: "Happy Patients" },
  { value: "15+", label: "Years Experience" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "500+", label: "5-Star Reviews" }
];

const Testimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let scrollPos = 0;

    const scroll = () => {
      if (!isHovered) {
        scrollPos += 1; // Speed of auto-scroll
        if (scrollPos >= scrollContainer.scrollWidth / 2) {
          scrollPos = 0;
        }
        scrollContainer.scrollLeft = scrollPos;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  return (
    <section id="testimonials" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-blue-500 font-bold tracking-widest uppercase text-xs mb-4">Patient Stories</h4>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">What Our Patients Say</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Real stories from real patients who trusted us with their smiles. Join over 2,500+ happy patients.
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto mb-20 px-4">
          {/* Horizontal Sliding Container */}
          <div 
            ref={scrollRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex space-x-8 overflow-x-hidden py-10 whitespace-nowrap"
          >
            {[...testimonials, ...testimonials].map((t, idx) => (
              <div 
                key={idx}
                className="inline-block min-w-[350px] md:min-w-[400px] bg-white p-8 rounded-3xl shadow-sm border border-slate-100 whitespace-normal hover:border-blue-500 hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="text-blue-100 mb-4 group-hover:text-blue-500 transition-colors">
                  <Quote className="w-12 h-12" />
                </div>
                
                <div className="flex space-x-1 mb-4">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-orange-400 fill-orange-400" />
                  ))}
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">
                  "{t.content}"
                </p>

                <div className="border-t border-slate-50 pt-6">
                    <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold rounded-full mb-4 uppercase tracking-tighter">
                        {t.tag}
                    </span>
                    <div className="flex items-center space-x-3">
                        <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                        <div>
                            <h4 className="text-slate-900 font-bold text-sm">{t.name}</h4>
                            <p className="text-slate-400 text-[10px]">{t.role}</p>
                        </div>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-50 text-center hover:shadow-lg transition-all duration-300">
              <h3 className="text-3xl font-bold text-blue-500 mb-1">{stat.value}</h3>
              <p className="text-slate-400 text-xs font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;