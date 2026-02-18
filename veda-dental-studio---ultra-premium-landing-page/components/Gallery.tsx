
import React from 'react';

const galleryItems = [
  {
    url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800',
    title: 'Modern Surgery Room',
    category: 'Clinic'
  },
  {
    url: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800',
    title: 'Premium Reception',
    category: 'Lounge'
  },
  {
    url: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800',
    title: 'Advanced Equipment',
    category: 'Technology'
  },
  {
    url: 'https://images.unsplash.com/photo-1559839734-2b71f1e598c6?auto=format&fit=crop&q=80&w=800',
    title: 'Expert Consultation',
    category: 'Care'
  },
  {
    url: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=800',
    title: 'Family Smiles',
    category: 'Patients'
  },
  {
    url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    title: 'Safe & Sanitized',
    category: 'Standards'
  }
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h4 className="text-gold font-bold tracking-[0.2em] uppercase text-sm mb-4">Visual Tour</h4>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-0">Experience the Excellence</h2>
          </div>
          <p className="text-slate-500 max-w-sm">
            Step inside Hyderabad's most sophisticated dental sanctuary, where technology meets tranquility.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div 
              key={index} 
              className="group relative h-[350px] rounded-[2rem] overflow-hidden shadow-lg cursor-pointer transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <img 
                src={item.url} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-gold text-xs font-bold uppercase tracking-widest mb-2">{item.category}</span>
                <h3 className="text-white text-2xl font-serif font-bold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
