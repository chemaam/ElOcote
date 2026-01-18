import React from 'react';
import { MessageCircle } from 'lucide-react';
import { businessInfo } from '../data/mock';

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open(businessInfo.whatsapp, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#d7ba92] text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        ¡Escríbenos!
      </span>
    </button>
  );
};

export default WhatsAppButton;
