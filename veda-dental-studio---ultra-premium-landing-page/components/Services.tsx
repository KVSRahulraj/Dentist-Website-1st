
import React from 'react';
import { Sparkles, Shield, Activity } from 'lucide-react';

const services = [
  {
    title: 'Painless Root Canal',
    description: 'Advanced endodontic micro-procedures with zero discomfort. State-of-the-art precision tools for precise care.',
    icon: <Activity className="w-10 h-10 text-gold" />,
    mediaType: 'video',
    mediaUrl: 'https://v.pinimg.com/videos/720p/33/c2/39/33c239366e66c7499696328637988358.mp4',
    poster: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Invisible Aligners',
    description: 'Perfectly straight teeth without the metal. Premium Invisalign solutions for professionals who value aesthetics.',
    icon: <Shield className="w-10 h-10 text-gold" />,
    mediaType: 'video',
    mediaUrl: 'https://v.pinimg.com/videos/720p/10/a8/19/10a819777174e1d1f11e938928373819.mp4',
    poster: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Smile Makeovers',
    description: 'Transform your confidence with our Hollywood-style veneers and 1-hour professional whitening systems.',
    icon: <Sparkles className="w-10 h-10 text-gold" />,
    mediaType: 'image',
    mediaUrl: 'https://images.unsplash.com/photo-1559839734-2b71f1e598c6?auto=format&fit=crop&q=80&w=800',
    poster: ''
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <h4 className="text-gold font-bold tracking-[0.2em] uppercase text-sm mb-4">Excellence Defined</h4>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">Our Premium Services</h2>
          <div className="h-1.5 w-20 bg-gold mx-auto rounded-full"></div>
          <p className="text-slate-600 mt-8 text-lg">
            Where medical precision meets aesthetic artistry. Discover our signature treatments designed for the modern individual.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-[3rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-slate-100 flex flex-col h-full"
            >
              <div className="h-72 overflow-hidden relative">
                {service.mediaType === 'video' ? (
                  <video 
                    autoPlay 
                    muted 
                    loop 
                    playsInline 
                    poster={service.poster}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  >
                    <source src={service.mediaUrl} type="video/mp4" />
                  </video>
                ) : (
                  <img 
                    src={service.mediaUrl} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                )}
                <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/0 transition-all duration-500"></div>
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-lg transform -translate-x-12 group-hover:translate-x-0 transition-transform duration-500">
                  {service.icon}
                </div>
              </div>

              <div className="p-10 flex flex-col flex-grow">
                <h3 className="text-2xl font-serif font-bold text-navy mb-4 group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>
                <div className="pt-4 border-t border-slate-50">
                  <button className="text-navy font-bold flex items-center space-x-3 group/btn hover:text-gold transition-colors">
                    <span className="uppercase tracking-widest text-xs">Learn More</span>
                    <div className="w-8 h-[2px] bg-gold group-hover/btn:w-16 transition-all duration-500"></div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
