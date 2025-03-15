import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is the Certificate Verification System?",
      answer: "The Certificate Verification System is a secure platform that allows educational institutions to issue digital certificates and enables employers, students, and other stakeholders to verify the authenticity of these certificates using a unique certificate hash."
    },
    {
      question: "How do I verify a certificate?",
      answer: "To verify a certificate, simply enter the certificate hash (provided on the certificate) in the verification form on our homepage. The system will display the certificate details if it's authentic."
    },
    {
      question: "What information is needed to verify a certificate?",
      answer: "You only need the certificate hash, which is a unique alphanumeric code provided on each certificate. This hash serves as a secure identifier for the certificate in our system."
    },
    {
      question: "How secure is the verification process?",
      answer: "Our verification process uses advanced cryptographic techniques to ensure the highest level of security. Each certificate is assigned a unique hash that cannot be tampered with, ensuring that only authentic certificates can be verified."
    },
    {
      question: "Can I verify multiple certificates at once?",
      answer: "Currently, our system only supports verifying one certificate at a time. However, we're working on a batch verification feature for future releases."
    },
    {
      question: "What should I do if a certificate cannot be verified?",
      answer: "If a certificate cannot be verified, it may be fraudulent or there might be an error in the hash you entered. Double-check the hash and try again. If it still fails, contact the issuing institution or our support team for assistance."
    },
    {
      question: "How can educational institutions join the system?",
      answer: "Educational institutions interested in using our system to issue secure digital certificates can contact our team through the Contact page. We'll provide information about integration options and pricing."
    },
    {
      question: "Is there a mobile app for certificate verification?",
      answer: "We don't currently offer a mobile app, but our website is fully responsive and works well on mobile devices. You can verify certificates from any smartphone or tablet with an internet connection."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <h2>Frequently Asked Questions</h2>
      
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          >
            <div 
              className="faq-question" 
              onClick={() => toggleAccordion(index)}
            >
              <h3>{faq.question}</h3>
              <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
            </div>
            
            <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="faq-contact">
        <h3>Still have questions?</h3>
        <p>If you couldn't find the answer to your question, please feel free to contact our support team.</p>
        <Link to="/contact" className="contact-button">Contact Us</Link>
      </div>
    </div>
  );
};

export default FAQ; 