import React, { useState } from 'react';

const faqs = [
  {
    question: `What does "ETD" and "ETA" mean on the flight status screen?`,
    answer: `ETD stands for "Estimated Time of Departure" and ETA means "Estimated Time of Arrival." These times can change due to weather or operational factors.`,
  }, {
    question: "How can I check my assigned gate or shift location for the day?",
    answer: 'Gate and shift assignments can be found in the daily briefing on the app under the "My Schedule" tab or via your department supervisor.',
  }, {
    question: "What should I do if a flight is delayed or diverted?",
    answer: "Notify your supervisor immediately and follow the SOP for handling delayed flights, including informing passengers and updating signage.",
  }, {
    question: "How do I report a suspicious item or unattended baggage?",
    answer: 'Use the app’s “Emergency Report” button or dial the internal airport security extension provided during induction.',
  }, {
    question: "Where can I find emergency evacuation procedures?",
    answer: 'Emergency procedures are available in the Knowledge Base section of the app. You can also ask the chatbot "What to do in an emergency?"',
  }, {
    question: "What do I do if I forget the code for a restricted area?",
    answer: "Contact your shift manager or use the chatbot to request access code procedures (identity verification required).",
  }, {
    question: "What should I do if there is a severe weather alert during my shift?",
    answer: "You will receive a push notification. Follow the instructions and report to the designated shelter if instructed.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <h2 className="title">FAQs</h2>
        <div className="faq-wrapper">
          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${activeIndex === index ? "open" : ""}`}
              key={index}
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="faq-question">{faq.question}</h3>
              {activeIndex === index && <p className="faq-answer">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
