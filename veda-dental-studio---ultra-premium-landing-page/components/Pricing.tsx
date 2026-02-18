
import React from 'react';
import { Check } from 'lucide-react';

const pricingData = [
  {
    tier: 'Basic Care',
    price: '₹499',
    description: 'Perfect for regular maintenance',
    features: ['Comprehensive Consultation', 'Digital X-Rays', 'Basic Scaling', 'Oral Hygiene Report'],
    popular: false
  },
  {
    tier: 'Premium Smile',
    price: '₹2,499',
    description: 'The standard choice for many',
    features: ['Advanced Polishing', 'Sensitivity Treatment', 'Gum Massage Therapy', 'Dental Wellness Kit'],
    popular: true
  },
  {
    tier: 'Elite Aesthetics',
    price: '₹5,999',
    description: 'Ultimate transformation starts here',
    features: ['Laser Whitening Session', 'Cosmetic Consultation', 'Fluoride Enrichment', 'Lifetime Smile Plan'],
    popular: false
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white to-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-gold font-bold tracking-[0.2em] uppercase text-sm mb-4">Transparent Pricing</h4>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">Investment in Your Smile</h2>
          <p className="text-slate-600 max-w-xl mx-auto">Luxury care doesn't have to be opaque. We offer premium services at ethical prices.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingData.map((plan, i) => (
            <div 
              key={i} 
              className={`relative p-10 rounded-[2.5rem] transition-all duration-500 hover:shadow-2xl flex flex-col ${
                plan.popular 
                ? 'bg-navy text-white scale-105 shadow-xl border-2 border-gold z-10' 
                : 'bg-white border border-slate-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold text-navy font-bold text-xs py-1 px-4 rounded-full uppercase tracking-widest shadow-lg">
                  Most Popular
                </div>
              )}
              
              <h3 className={`text-2xl font-serif font-bold mb-2 ${plan.popular ? 'text-gold' : 'text-navy'}`}>{plan.tier}</h3>
              <p className={`text-sm mb-8 ${plan.popular ? 'text-white/70' : 'text-slate-500'}`}>{plan.description}</p>
              
              <div className="mb-8">
                <span className="text-4xl font-bold font-serif">{plan.price}</span>
                <span className={`text-sm ml-1 ${plan.popular ? 'text-white/60' : 'text-slate-400'}`}>/ Visit</span>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center space-x-3">
                    <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${plan.popular ? 'bg-gold/20 text-gold' : 'bg-gold/10 text-gold'}`}>
                      <Check className="w-3 h-3" />
                    </div>
                    <span className={`text-sm ${plan.popular ? 'text-white/80' : 'text-slate-600'}`}>{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-2xl font-bold transition-all ${
                plan.popular 
                ? 'bg-gold text-white hover:bg-white hover:text-navy shadow-lg shadow-gold/20' 
                : 'bg-navy text-white hover:bg-gold shadow-md'
              }`}>
                Book This Plan
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center text-slate-400 text-sm tracking-widest uppercase">
          Interest-Free EMI options available for Major Treatments
        </div>
      </div>
    </section>
  );
};

export default Pricing;
