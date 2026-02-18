
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "I have severe tooth pain. What should I do?",
    answer: "Severe tooth pain may indicate infection, deep decay, or nerve damage. Visit our clinic immediately for an emergency dental examination. Early treatment can save your tooth and prevent complications."
  },
  {
    question: "My teeth are yellow. Can you make them white again?",
    answer: "Yes. We provide professional teeth whitening treatments that safely remove stains and restore a brighter, natural smile in just one visit."
  },
  {
    question: "I have missing teeth. What are my replacement options?",
    answer: "We offer dental implants, bridges, and dentures. Dental implants are the most advanced solution because they look, feel, and function like natural teeth."
  },
  {
    question: "My gums bleed while brushing. Is it serious?",
    answer: "Bleeding gums are often an early sign of gum disease. Our deep cleaning and periodontal treatments can stop infection and restore gum health."
  },
  {
    question: "I have a broken or chipped tooth. Can it be fixed?",
    answer: "Yes. Depending on the damage, we may recommend dental bonding, veneers, or crowns to restore strength and appearance."
  },
  {
    question: "I am afraid of dental treatment. Do you offer painless procedures?",
    answer: "Absolutely. Our clinic uses modern technology, gentle techniques, and anesthesia to ensure comfortable and pain-free dental care."
  },
  {
    question: "I have crooked teeth. Do I need braces?",
    answer: "Not always. We offer clear aligners and modern orthodontic treatments that straighten teeth discreetly and comfortably."
  },
  {
    question: "I have bad breath that doesn’t go away. What can help?",
    answer: "Persistent bad breath is usually caused by bacteria, gum disease, or decay. Professional cleaning and treatment can permanently solve the issue."
  },
  {
    question: "How often should I visit a dentist?",
    answer: "Most patients should visit every six months for routine dental checkups and cleaning to maintain optimal oral health."
  },
  {
    question: "Are dental X-rays safe?",
    answer: "Yes. Modern digital X-rays use minimal radiation and are completely safe for both adults and children."
  },
  {
    question: "How long does a dental appointment take?",
    answer: "Routine checkups usually take 20–30 minutes, while treatments vary depending on the procedure."
  },
  {
    question: "What is a root canal treatment?",
    answer: "A root canal is a procedure that removes infected tissue from inside the tooth to relieve pain and save the natural tooth."
  },
  {
    question: "How can I prevent cavities?",
    answer: "Brush twice daily, floss regularly, limit sugary foods, and schedule regular dental checkups."
  },
  {
    question: "Is teeth cleaning necessary if I brush daily?",
    answer: "Yes. Professional cleaning removes tartar and plaque buildup that cannot be removed by brushing alone."
  },
  {
    question: "Do you treat children?",
    answer: "Yes. We provide specialized pediatric dental care to ensure healthy smiles for children of all ages."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
        <div>
          <h4 className="text-blue-500 font-bold tracking-[0.2em] uppercase text-sm mb-4">Patient Care</h4>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">Common Dental Concerns & FAQs</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            We understand you may have questions about your dental health and treatments. Explore our most common inquiries or reach out for personalized support.
          </p>
          <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
            <h5 className="font-bold text-slate-900 mb-2">Still have questions?</h5>
            <p className="text-slate-500 text-sm mb-6">Our dental experts are available to guide you through your treatment journey.</p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all text-sm font-bold shadow-lg shadow-blue-500/20">Contact Support</button>
          </div>
        </div>

        <div className="space-y-4 overflow-y-auto max-h-[700px] pr-2 custom-scrollbar">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={`border rounded-2xl transition-all duration-300 ${openIndex === i ? 'border-blue-500 bg-blue-50/30 shadow-md' : 'border-slate-100 hover:border-blue-200'}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className={`font-bold text-base md:text-lg ${openIndex === i ? 'text-blue-600' : 'text-slate-700'}`}>{faq.question}</span>
                <div className={`transform transition-transform duration-300 ${openIndex === i ? 'rotate-180' : 'rotate-0'}`}>
                  {openIndex === i ? <Minus className="w-5 h-5 text-blue-500" /> : <Plus className="w-5 h-5 text-slate-400" />}
                </div>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 pb-6 text-slate-600 leading-relaxed text-sm md:text-base">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
