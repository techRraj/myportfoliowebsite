// src/components/WhatsAppButton.jsx
import React from 'react';

const WhatsAppButton = () => {
  const whatsappNumber = "+917415104895"; // 🔴 REPLACE WITH YOUR ACTUAL NUMBER
  const message = encodeURIComponent("Hi Rajkumar, I found your portfolio and would like to discuss a project.");

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
   // src/components/WhatsAppButton.jsx
<a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="whatsapp-float-button" aria-label="Chat with me on WhatsApp">
  <img src="/img/whatsapp.png
" alt="WhatsApp" className="whatsapp-icon" />
</a>
  );
};

export default WhatsAppButton;
